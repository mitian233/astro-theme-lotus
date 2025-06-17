// 自定义 rehype 插件：将 Markdown 中的图片用链接包裹
import { visit } from "unist-util-visit";

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('vfile').VFile} VFile
 */

/**
 * rehype 插件，将所有的图片元素包裹在锚点标签中
 * @type {import('unified').Plugin<[], Root, Root>}
 */
export default function rehypeWrapImages() {
  /**
   * @param {Root} tree
   * @param {VFile} file
   * @returns {void | Root}
   */
  return (tree, file) => {
    visit(tree, { tagName: "img" }, (node, index, parent) => {
      // node is an Element, parent is Element or Root
      if (
        node.type === "element" &&
        parent &&
        typeof index === "number" &&
        "children" in parent
      ) {
        // Add lazy loading to the image
        if (node.properties) {
          node.properties.loading = "lazy";
        }

        // Create an <a> element
        /** @type {Element} */
        const link = {
          type: "element",
          tagName: "a",
          properties: {
            href: String(node.properties?.src || ""),
            class: "img-link",
            "data-fancybox": "gallery",
            "data-caption": String(node.properties?.alt || ""),
          },
          children: [node],
        };

        // Create a caption element if alt text exists
        const altText = String(node.properties?.alt || "");
        const captionElement = altText
          ? {
              type: "element",
              tagName: "p",
              properties: {
                class: "img-caption",
              },
              children: [
                {
                  type: "text",
                  value: altText,
                },
              ],
            }
          : null;

        // Create a wrapper div to contain both link and caption
        const wrapper = {
          type: "element",
          tagName: "div",
          properties: {
            class: "img-wrapper",
          },
          children: captionElement ? [link, captionElement] : [link],
        }; // If img is the parent's sole child and parent is <p>, replace <p>'s content
        // Ensure parent is an Element before checking tagName
        if (
          parent.type === "element" &&
          parent.tagName === "p" &&
          parent.children.length === 1
        ) {
          // Create a new parent array with the wrapper
          const newParentChildren = [...parent.children];
          newParentChildren[index] = wrapper; // Replace the image with the wrapper
          parent.children = newParentChildren;
        } else {
          // Otherwise, splice the wrapper in place of the image
          // Ensure parent.children is available and index is valid
          if (Array.isArray(parent.children)) {
            parent.children.splice(index, 1, wrapper);
          }
        }
      }
    });
    return tree; // Explicitly return the tree
  };
}

// 自定义 rehype 插件：将 Markdown 中的图片用链接包裹
import { visit } from "unist-util-visit";

/**
 * rehype 插件，将所有的图片元素包裹在锚点标签中
 * @returns {import('unified').Transformer}
 */
export default function rehypeWrapImages() {
  return (tree) => {
    visit(tree, { tagName: "img" }, (node, index, parent) => {
      // 创建一个 <a> 元素
      const link = {
        type: "element",
        tagName: "a",
        properties: {
          href: node.properties.src,
          class: "img-link",
          "data-fancybox": "gallery",
          "data-caption": node.properties.alt || "",
        },
        children: [node],
      };

      // 如果 img 是父元素的唯一子元素并且父元素是 <p>，直接替换 <p> 的内容
      if (parent.tagName === "p" && parent.children.length === 1) {
        parent.children = [link];
      } else {
        // 否则，在图片的位置插入链接元素
        parent.children.splice(index, 1, link);
      }
    });
  };
}

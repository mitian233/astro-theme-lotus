import { type CollectionEntry } from "astro:content";
import { slugify } from "./common_utils";

export function sortItemsByDateDesc(
  itemA: CollectionEntry<"blog">,
  itemB: CollectionEntry<"blog">
) {
  return (
    new Date(itemB.data.pubDate).getTime() -
    new Date(itemA.data.pubDate).getTime()
  );
}

export function getAllCategroies(posts: CollectionEntry<"blog">[]) {
  const categories: string[] = [
    ...new Set(
      posts.flatMap((post) => post.data.category || []).filter(Boolean)
    ),
  ];
  return categories
    .map((category) => {
      return {
        name: category,
        slug: slugify(category),
      };
    })
    .filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
    });
}
export function getPostsByCategory(
  posts: CollectionEntry<"blog">[],
  categorySlug: string
) {
  const filteredPosts: CollectionEntry<"blog">[] = posts.filter(
    (post) => slugify(post.data.category || "") === categorySlug
  );
  return filteredPosts;
}

import { getAllPages } from "./mdx";

export function getNavigationData() {
  return {
    conditions: getAllPages("conditions"),
    treatments: getAllPages("treatments"),
  };
}

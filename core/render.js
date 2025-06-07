import { Fragment } from "./fragment.js";

/**
 * Renders a virtual node tree to the console in structured HTML-like format.
 * @param {import("../shared/types").VNode} node
 * @param {number} indent
 */
export function render(node, indent = 0) {
  if (node === null || node === undefined || typeof node === "boolean") return;

  const space = "  ".repeat(indent);

  if (typeof node === "string" || typeof node === "number") {
    console.log(space + node);
    return;
  }

  if (typeof node.type === "function") {
    return render(node.type(node.props), indent);
  }

  if (node.type === Fragment) {
    node.props.children.forEach((child) => render(child, indent));
    return;
  }

  const { type, props } = node;

  const attrs = Object.entries(props || {})
    .filter(([k]) => k !== "children")
    .map(([k, v]) => ` ${k}="${v}"`)
    .join("");

  console.log(`${space}<${type}${attrs}>`);
  (props.children || []).forEach((child) => render(child, indent + 1));
  console.log(`${space}</${type}>`);
}

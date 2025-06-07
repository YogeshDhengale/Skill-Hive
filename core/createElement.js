/**
 * Custom JSX-compatible createElement for our console renderer.
 * @param {string | Function | symbol} type
 * @param {Object} props
 * @param  {...any} children
 * @returns {import("../shared/types").VNode}
 */
export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat(),
    },
  };
}

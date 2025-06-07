export function NestedUiList({ items }) {
  return (
    <ul id="nested-components">
      {items.map((n) => (
        <Item name={`Item ${n}`} key={n} />
      ))}
    </ul>
  );
}

function Item({ name }) {
  return <li>{name}</li>;
}

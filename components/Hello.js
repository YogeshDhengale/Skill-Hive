/** @param {{ name: string }} props */

export function Hello({ name }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a custom-rendered component.</p>
    </div>
  );
}

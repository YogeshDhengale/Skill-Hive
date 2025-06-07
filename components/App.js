import { Fragment } from "../core/fragment.js";
import { Hello } from "./Hello.js";
import { NestedUiList } from "./NestedComponents.js";

/** @returns {import("../shared/types").VNode} */

export function App() {
  return (
    <main id="root" className="container">
      <Hello name="Yogesh" />
      <section>
        <h2>Items:</h2>
        <NestedUiList items={[1, 2, 3]} />
      </section>
      <Fragment>
        <footer>Console-based JSX Renderer</footer>
        <small>© 2025</small>
      </Fragment>
    </main>
  );
}

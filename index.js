import { createElement } from './core/createElement.js';
import { render } from './core/render.js';
import { App } from './components/App.js';

// Expose global JSX transform support (for Babel JSX)
globalThis.React = { createElement };

// Trigger render
render(<App />);

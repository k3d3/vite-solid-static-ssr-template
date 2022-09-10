// This script uses SolidJS's renderToString method to prerender the default App to index.html.

import { renderToString, generateHydrationScript } from "solid-js/web";
import App from "./App";

export function render(url: string) {
  const body = renderToString(() => <App />);
  const hydration = generateHydrationScript();
  return {
    hydration,
    body,
  };
}
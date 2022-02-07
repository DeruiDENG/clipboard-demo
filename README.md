# Clipboard Demo

By using the Clipboard API, the copy function can be done in an a11y friendly way.

This project uses the create-react-app to demo the solution.

## Tech being used
* [Clipboard.writeText()](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText): The Clipboard interface's writeText() property writes the specified text string to the system clipboard. Text may be read back using either read() or readText(). The "clipboard-write" permission of the Permissions API, is granted automatically to pages when they are in the active tab.
* [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions): A live region is explicitly denoted using the `aria-live` attribute. It can give hints to the screen readers to read the content of the specified region. 

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Clipboard API requires [Secure Context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts). Good news is localhost is considered secure by the browsers.


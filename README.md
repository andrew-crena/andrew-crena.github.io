# andrew-crena.github.io

The front door: <https://andrew-crena.github.io/>. A menu of every project, generated from one file.

## Add a project

1. Make the project, in its own repo or as a folder here, with GitHub Pages on.
2. Add an entry to [`projects.js`](projects.js). The fields are explained at the top of that file.
3. Commit. The card, category filter and search pick it up automatically.

Entries with `hidden: true` stay off the page; use that for things not ready to show.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Project hub (reads `projects.js`) |
| `projects.js` | The registry |
| `fountain/` | From a Fountain listening page |
| `letters/`, `docent/` | From a Fountain letter book and docent desk |
| `fountain-config.js` | Address of the From a Fountain service |
| `assets/site.css` | Shared base styles, light and dark |
| `assets/backlink.js` | Drop-in "← All projects" link for any project page |
| `404.html` | Not-found page that points back here |

## Link a project back to the hub

Add one line to the project's page:

```html
<script src="https://andrew-crena.github.io/assets/backlink.js" defer></script>
```

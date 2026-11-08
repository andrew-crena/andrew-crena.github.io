# andrew-crena.github.io

Source for <https://andrew-crena.github.io/>.

## Layout

| Path | What |
| --- | --- |
| `index.html`, `style.css` | Main personal page. Plain HTML and CSS, no build step. |
| `projects/` | Project center (reads `projects.js`, styled by `assets/site.css`) |
| `projects.js` | Project registry. Add an entry to list a project; the fields are explained at the top of the file. |
| `fountain/`, `letters/`, `docent/` | From a Fountain listening page, letter book and docent desk |
| `fountain-config.js` | Address of the From a Fountain service |
| `assets/backlink.js` | Drop-in "← All projects" link for any project page |
| `404.html` | Not-found page |

Unfinished text on the main page is marked `[TODO: ...]`. Search for `TODO` to find it.

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Link a project back to the project center

```html
<script src="https://andrew-crena.github.io/assets/backlink.js" defer></script>
```

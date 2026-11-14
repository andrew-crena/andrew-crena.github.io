# andrew-crena.github.io

Source for <https://andrew-crena.github.io/>.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Personal homepage (self-contained: inline CSS, Google Fonts) |
| `headshot.jpg`, `Andrew_Crena_CV.pdf` | Homepage photo and the CV it links to |
| `style.css` | Plain styles used by `404.html` |
| `cv.pdf` | Older CV, kept but not linked from anywhere |
| `projects/index.html` | Projects page: the listening installation, then the other projects. Plain HTML, edited directly. |
| `projects/images/` | Photos for the projects page (see below) |
| `fountain/`, `letters/`, `docent/` | From a Fountain listening page, letter book and docent desk |
| `fountain-config.js` | Address of the From a Fountain service |
| `assets/backlink.js` | Drop-in "← All projects" link for any project page |
| `404.html` | Not-found page |

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Link a project back to the project center

```html
<script src="https://andrew-crena.github.io/assets/backlink.js" defer></script>
```

## Projects page

Every card is written out in `projects/index.html`; comments there mark the flagship section and the grid. To add a project, copy one `<li class="card">` block in the grid and change its photo, title, description and link.

### Photos

Save each photo over its placeholder, keeping the file name, and the page picks it up.

| File | Goes on | Shape |
| --- | --- | --- |
| `projects/images/kissa-fountain.jpg` | From a Fountain (outdoors, Terman Fountain) | Landscape 4:3, about 1200 × 900 |
| `projects/images/kissa-center-for-creativity.jpg` | Center for Creativity (indoors, Redwood City) | Landscape 4:3, about 1200 × 900 |
| `projects/images/house-collection.jpg` | House Collection | Square, about 1000 × 1000 |
| `projects/images/not-quite-my-tempo.jpg` | Not Quite My Tempo | Square, about 1000 × 1000 |
| `projects/images/notes.jpg` | Notes | Square, about 1000 × 1000 |

Keep each under about 300 KB (export as JPEG at around 80 % quality) so the page opens quickly from an email. If a photo is a different shape, it still shows; the `width` and `height` on its `<img>` just stop the page jumping while it loads, so update them to match.

The fountain photo is also the preview image when the link is shared.

### Not listed yet

These repos have GitHub Pages turned on but no card: `spb-pacer`, `raise-scale`, `killer-miller`, `sounds-of-the-west-wing`, `temp-tool`, `tempo2`. Add a card for any you want to show.

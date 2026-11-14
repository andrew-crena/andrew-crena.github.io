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

`projects/index.html` is plain HTML: three sections of cards (listening installation, research and community, records and tools). To add a card, copy an `<li class="card">` block and change its photo, title, text and links. Shared styles are in `projects/projects.css`. Project pages live in their own folders: `projects/yard-aers/`, `projects/music-for-mental-health/`.

### Photos

Save each photo over its placeholder in `projects/images/`, keeping the file name. All are landscape 4:3, about 1200 × 900; export as JPEG around 80 % quality to keep each under about 300 KB.

| File | Goes on |
| --- | --- |
| `kissa-fountain.jpg` | From a Fountain (done: Terman Fountain at dusk). Also the preview image when the link is shared. |
| `fountain-setup.jpg` | The setup diagram, opened from "How it's set up" |
| `kissa-center-for-creativity.jpg` | Center for Creativity |
| `yard-aers.jpg` | Yard AERS card and page |
| `music-for-mental-health.jpg` | Music for Mental Health card and page |
| `house-collection.jpg` | House Collection |
| `not-quite-my-tempo.jpg` | Not Quite My Tempo |

### Not listed

Notes (`/my-digital-garden/`) has no card, but the site still works. These repos have GitHub Pages turned on but no card: `spb-pacer`, `raise-scale`, `killer-miller`, `sounds-of-the-west-wing`, `temp-tool`, `tempo2`.

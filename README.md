# andrew-crena.github.io

Source for <https://andrew-crena.github.io/>.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Personal homepage (self-contained: inline CSS, Google Fonts) |
| `headshot.jpg`, `Andrew_Crena_CV.pdf` | Homepage photo and the CV it links to |
| `projects/index.html` | Projects page: the listening installation, then the other projects. Plain HTML, edited directly. |
| `projects/images/` | Photos for the projects page (see below) |
| `fountain/`, `letters/`, `docent/` | From a Fountain listening page, letter book and docent desk |
| `fountain-config.js` | Address of the From a Fountain service |
| `yard/` | QR redirect to the survey (counts scans, then forwards) |
| `assets/icon.svg` | Browser-tab icon for the projects pages |
| `404.html` | Not-found page (uses `projects/projects.css`) |

## Preview locally

```
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Projects page

`projects/index.html` is plain HTML in three sections (listening installation, community projects, records and tools). Each project is a heading, a photo, a sentence or two, and a line of links; to add one, copy an existing block. Shared styles are in `projects/projects.css`. Project pages live in their own folders: `projects/yard-aers/`, `projects/music-for-mental-health/`.

### Photos

All in `projects/images/`. To change one, save the new photo over it with the same name. Photos are cropped to landscape 4:3; keep each under about 300 KB.

| File | Where |
| --- | --- |
| `kissa-fountain.jpg` | From a Fountain card; also the preview image when the link is shared |
| `fountain-setup.jpg` | Setup diagram ("How it's set up") |
| `kissa-center-for-creativity.jpg` | Center for Creativity card |
| `yard-aers.jpg` | Yard AERS card and page (playing vinyl outside at the Yard) |
| `yard-aers-card-mockup.jpg` | Yard AERS page (survey card mock-up) |
| `music-for-mental-health.jpg`, `music-for-mental-health-2.jpg` | Music for Mental Health card and page |
| `house-collection.jpg` | House Collection card |
| `not-quite-my-tempo.jpg` | Not Quite My Tempo card |

### Not listed

Notes (`/my-digital-garden/`) has no card; the homepage links to it. These repos have GitHub Pages turned on but no card: `spb-pacer`, `raise-scale`, `killer-miller`, `sounds-of-the-west-wing`, `temp-tool`, `tempo2`.

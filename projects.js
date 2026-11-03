/* ================================================================
   PROJECT REGISTRY: the one file to edit when you make something.

   Add an object to the list. Fields:
     id          short unique slug (used in the URL: /#id)
     title       display name
     description one or two sentences, in your own words
     href        where the card goes (relative for pages in this repo,
                 "/<repo>/" for another repo's GitHub Pages site)
     category    "tools" | "music" | "live" | "writing" | "research"
                 (add a new one to CATEGORIES below if you need it)
     status      "in progress" | "archived"  shown as a tag (optional;
                 leave it off for finished, working things)
     year        number (optional; newest sort first)
     tags        ["short", "words"]                    (optional)
     links       [{ label, href }]  extra links under the card (optional)
     repo        "owner/name" to show a source link     (optional)
     featured    true to pin near the top               (optional)
     hidden      true to keep it out of the list until it is ready
   ================================================================ */
window.CATEGORIES = [
  { id: 'tools',    label: 'Tools' },
  { id: 'music',    label: 'Music' },
  { id: 'live',     label: 'Live' },
  { id: 'writing',  label: 'Writing' },
  { id: 'research', label: 'Research' },
];

window.PROJECTS = [
  {
    id: 'fountain',
    title: 'From a Fountain',
    description: 'Records played live, for whoever happens by. Listen, watch the turntable, or leave a memory in the letter book.',
    href: 'fountain/',
    category: 'live',
    year: 2026,
    tags: ['vinyl', 'stream', 'jazz kissa'],
    links: [{ label: 'Letter book', href: 'letters/' }],
    repo: 'andrew-crena/from-a-fountain',
    featured: true,
  },
  {
    id: 'tempo',
    title: 'Not Quite My Tempo',
    description: 'Live BPM with beat phase and tap tempo, a guitar, bass and chromatic tuner, key detection with mixing hints, and loudness metering. Runs in the browser.',
    href: '/not-quite-my-tempo/',
    category: 'tools',
    year: 2026,
    tags: ['audio', 'bpm', 'tuner', 'key', 'lufs'],
    repo: 'andrew-crena/not-quite-my-tempo',
    featured: true,
  },
  {
    id: 'house',
    title: 'House Collection',
    description: 'My house music.',
    href: '/house-collection/',
    category: 'music',
    repo: 'andrew-crena/house-collection',
  },
  {
    id: 'garden',
    title: 'My Digital Garden',
    description: 'Notes and ideas in progress.',
    href: '/my-digital-garden/',
    category: 'writing',
    status: 'in progress',
    repo: 'andrew-crena/my-digital-garden',
  },

  /* These repos have GitHub Pages turned on but no description yet.
     Write one, pick a category, and delete `hidden: true` to publish. */
  { id: 'spb-pacer', title: 'SPB Pacer', description: '', href: '/spb-pacer/', category: 'tools', repo: 'andrew-crena/spb-pacer', hidden: true },
  { id: 'raise-scale', title: 'Raise Scale', description: '', href: '/raise-scale/', category: 'tools', repo: 'andrew-crena/raise-scale', hidden: true },
  { id: 'killer-miller', title: 'Killer Miller', description: '', href: '/killer-miller/', category: 'tools', repo: 'andrew-crena/killer-miller', hidden: true },
  { id: 'west-wing', title: 'Sounds of the West Wing', description: '', href: '/sounds-of-the-west-wing/', category: 'music', repo: 'andrew-crena/sounds-of-the-west-wing', hidden: true },
  { id: 'temp-tool', title: 'Temp Tool', description: '', href: '/temp-tool/', category: 'tools', repo: 'andrew-crena/temp-tool', hidden: true },
  { id: 'tempo2', title: 'Tempo 2', description: '', href: '/tempo2/', category: 'tools', repo: 'andrew-crena/tempo2', hidden: true },
];

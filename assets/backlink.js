/* Drop-in "back to all projects" link for any project page:
     <script src="https://andrew-crena.github.io/assets/backlink.js" defer></script>
   Options on the script tag:
     data-position="top-left|top-right|bottom-left|bottom-right"  (default top-left)
     data-label="All projects"
   Skips itself if the page already has an element with [data-hub-link]. */
(() => {
  const me = document.currentScript;
  const run = () => {
    if (document.querySelector('[data-hub-link]')) return;
    const pos = (me && me.dataset.position) || 'top-left';
    const [v, h] = pos.split('-');
    const a = document.createElement('a');
    a.href = 'https://andrew-crena.github.io/projects/';
    a.dataset.hubLink = '';
    a.textContent = '← ' + ((me && me.dataset.label) || 'All projects');
    a.style.cssText = 'position:fixed;' + v + ':max(10px,env(safe-area-inset-' + v + '));' + h + ':max(10px,env(safe-area-inset-' + h + '));' +
      'z-index:2147483000;font:600 13px/1 system-ui,sans-serif;padding:9px 12px;border-radius:999px;' +
      'background:rgba(20,19,15,.82);color:#fff;text-decoration:none;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)';
    document.body.appendChild(a);
  };
  if (document.body) run(); else document.addEventListener('DOMContentLoaded', run);
})();

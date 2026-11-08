// Where the From a Fountain letter book service runs (server/fountain.py in andrew-crena/from-a-fountain).
// The same ngrok address as the stream: the service passes the stream through.
// start-fountain.bat uses the first address, or the second when the ngrok
// sign-in can't use the first, so pages try both and keep the one that answers.
window.FOUNTAIN_APIS = [
  'https://malika-unflaky-loan.ngrok-free.dev',
  'https://cuddly-doe-adversely.ngrok-free.app',
];
window.FOUNTAIN_API = window.FOUNTAIN_APIS[0];   // older pages read this

// fountainFetch('/api/now', opts): like fetch, against whichever address is up.
// An address that is down fails at the network level (ngrok's error page has
// no CORS headers), so a thrown fetch means "try the next one"; any HTTP
// answer is the service's own and is returned as is.
(() => {
  const KEY = 'fountain.api';
  let good = null;
  try { good = sessionStorage.getItem(KEY); } catch (e) {}
  window.fountainFetch = async (path, opts) => {
    opts = Object.assign({ cache: 'no-store' }, opts || {});
    opts.headers = Object.assign({ 'ngrok-skip-browser-warning': '1' }, opts.headers || {});
    const bases = window.FOUNTAIN_APIS.slice().sort((a, b) => (b === good) - (a === good));
    let last;
    for (const base of bases) {
      const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 8000);
      try {
        const r = await fetch(base + path, Object.assign({}, opts, { signal: ctl.signal }));
        clearTimeout(t);
        if (base !== good) { good = base; try { sessionStorage.setItem(KEY, base); } catch (e) {} }
        window.FOUNTAIN_API = base;
        return r;
      } catch (e) { clearTimeout(t); last = e; }
    }
    throw last || new Error('From a Fountain service unreachable');
  };
})();

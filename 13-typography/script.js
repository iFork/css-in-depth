
const html = document.documentElement;
/* 
NOTE: setting initial wfonts-inactive prevents even a breif FOIT
because both in Chrome and Firefox, even w/o initially setting .wfonts-inactive
but waiting for a timeout and setting .fonts-failed only after failure
I cannot produce full FOIT effect till the end of fontobservers timeout.
In reality, w/o `font-display` descriptor or `font-display: block` I get
sequence of:
FOIT > FOUT > styled text
*/
html.classList.add('wfonts-inactive');

// inject fontfaceobserver
const script = document.createElement('script');
script.src = 'fontfaceobserver.js';
script.async = true;

script.onload = function () {
  const roboto = new FontFaceObserver('Roboto');
  const sansita = new FontFaceObserver('Sansita');
  const timeout = 1000;

  Promise.all([
    roboto.load(null, timeout),
    sansita.load(null, timeout)
  ])
    .then(function () {
      html.classList.remove('wfonts-inactive');
      html.classList.add('wfonts-active');
    })
}

document.head.appendChild(script);

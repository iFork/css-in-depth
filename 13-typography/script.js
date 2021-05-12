
const html = document.documentElement;

// inject fontfaceobserver
const script = document.createElement('script');
script.src = 'fontfaceobserver.js';
script.async = true;

script.onload = function () {
  const roboto = new FontFaceObserver('Roboto');
  const sansita = new FontFaceObserver('Sansita');
  const timeout = 2000;

  Promise.all([
    roboto.load(null, timeout),
    sansita.load(null, timeout)
  ])
    .then(function () {
      html.classList.add('fonts-loaded');
    })
    .catch(function () {
      html.classList.add('fonts-failed');
    })
}

// html.appendChild(script);
document.head.appendChild(script);


(function formLoadingState () {
  const forms = document.getElementsByClassName('form');
  Array.prototype.forEach.call(forms, function (frm) {
    const inputs = frm.querySelectorAll('textarea, input');
    const btn = frm.querySelector('.button--submit');

    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      btn.classList.add('is-loading');
      btn.disabled = true;
      Array.prototype.forEach.call(inputs, function (inp) {
        inp.disabled = true;
      })
    })
  })
})();


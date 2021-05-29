
(function registerFormsLoadingState () {
  const forms = document.getElementsByClassName('form');
  Array.prototype.forEach.call(forms, registerFormLoadingState)

  function registerFormLoadingState(frm) {
    const inputs = frm.querySelectorAll('textarea, input');
    const btn = frm.querySelector('.button--submit');
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      btn.classList.add('is-loading');
      btn.disabled = true;
      disableInputs(inputs);
    });
  }
  function disableInputs(inputs) {
    Array.prototype.forEach.call(inputs, function (inp) {
      inp.disabled = true;
    });
  }
})();


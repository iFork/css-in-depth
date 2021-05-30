
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

(function registerSaveReminders () {
  const forms = document.getElementsByClassName('form');
  Array.prototype.forEach.call(forms, registerSaveReminder);

  function registerSaveReminder (form) {
    const inputs = form.querySelectorAll('textarea, input');
    const btn = form.querySelector('.button--submit');
    Array.prototype.forEach.call(inputs, respondToEvents);

    let timeoutID = null;
    function respondToEvents (input) {
      input.addEventListener('keyup', function () {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function () {
          btn.classList.add('shake');
        }, 5000);
      })
      btn.addEventListener('animationend', function () {
        btn.classList.remove('shake');
      })
    }
  }
})();

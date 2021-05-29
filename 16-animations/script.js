
(function addButtonLoadingState () {
  const buttons = document.getElementsByClassName('button--submit');
  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      btn.classList.add('is-loading');
      btn.disabled = true;
    })
  })
})();


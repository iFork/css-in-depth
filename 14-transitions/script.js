(function () {
  const dropdownToggles = document.getElementsByClassName('dropdown__toggle');
  Array.prototype.forEach.call(dropdownToggles, function (toggle) {
    const dropdown = toggle.parentNode;
    toggle.addEventListener('click', function () {
      dropdown.classList.toggle('is-open');
      console.log({toggle});
    })
  })
})();

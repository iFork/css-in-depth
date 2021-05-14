(function registerDropdownTogglers() {
  const dropdownToggles = document.getElementsByClassName('dropdown__toggle');
  Array.prototype.forEach.call(dropdownToggles, function (toggle) {
    const dropdown = toggle.parentNode;
    toggle.addEventListener('click', function () {
      dropdown.classList.toggle('is-open');
      console.log({toggle});
    })
  })
})();
(function setDropdownDrawerHeights() {
  // TODO: refactor - a new func combinng this func w/ registerDropdownTogglers
  const dropdowns = document.getElementsByClassName('dropdown');
  Array.prototype.forEach.call(dropdowns, function (dd) {
    const toggle = dd.querySelector('.dropdown__toggle');
    const drawer = dd.querySelector('.dropdown__drawer');
    // TODO:IDEA: consider mutation observer instead of sibling click listening
    toggle.addEventListener('click',
      function () { 
        const height = drawer.scrollHeight;
        if (dd.classList.contains('is-open')) {
          drawer.style.setProperty('height', `${height}px`);
          // console.log('after', drawer.style.getPropertyValue('height'));
        } else {
          drawer.style.setProperty('height', 0);
        }
      }
    )
  })
})();


(function() {
  const togglers = document.querySelectorAll('.dropdown__toggle');
  Array.prototype.forEach.call(togglers, function (toggler) {
    toggler.addEventListener('click', function (evt) {
      const dropdown = evt.target.parentNode;
      dropdown.classList.toggle('is-open');
    })
  })
})()

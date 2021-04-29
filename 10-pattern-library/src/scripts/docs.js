
(function() {
  const toggler = document.querySelector('.dropdown__toggle');
  toggler.addEventListener('click', function (evt) {
    // const dropdown = document.querySelector('.dropdown');
    const dropdown = evt.target.parentNode;
    dropdown.classList.toggle('is-open');
  })
})()

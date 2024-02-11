(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.forEach(element => {
    element.addEventListener('click', toggleMenu);
  });
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  //   //* Закривання по кліку на бекдроп

  //   refs.Menu.addEventListener('click', removeMenu);
  //   function removeMenu(e) {
  //     if (e.target === e.currentTarget) {
  //       refs.Menu.classList.add('is-hidden');
  //     }
  //   }

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

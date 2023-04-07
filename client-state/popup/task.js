const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');


if (document.cookie.indexOf('modalClosed=true') === -1) {
 
  modal.classList.add('modal_active');

  closeBtn.addEventListener('click', () => {

    modal.classList.remove('modal_active');

    document.cookie = 'modalClosed=true; max-age=' + 60 * 60 * 24;
  });
}

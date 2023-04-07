const signinForm = document.querySelector('#signin__form');
const signinButton = document.querySelector('#signin__btn');
const welcomeBlock = document.querySelector('#welcome');
const userBlock = welcomeBlock.querySelector('#user_id');

signinForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Отменяем стандартное поведение отправки формы

  const formData = new FormData(signinForm); // Получаем данные формы

  const response = await fetch(signinForm.action, {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    // Если авторизация успешна, сохраняем id пользователя в локальное хранилище
    localStorage.setItem('user_id', data.user_id);

    // Показываем блок приветствия пользователя
    showWelcomeBlock(data.user_id);
  } else {
    // Если авторизация не удалась, выводим сообщение об ошибке
    alert('Неверный логин/пароль');
  }
});
function showWelcomeBlock(userId) {
  userBlock.textContent = userId;
  welcomeBlock.classList.add('welcome_active');
}
const userId = localStorage.getItem('user_id');
if (userId) {
  showWelcomeBlock(userId);
}

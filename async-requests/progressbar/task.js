// Получаем элементы страницы
const form = document.getElementById('myForm');
const progress = document.getElementById('progress');

// Добавляем обработчик события отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Создаем объект XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Добавляем обработчик события изменения состояния запроса
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) { // Если запрос завершен
      if (xhr.status === 200) { // Если ответ успешный
        console.log(xhr.responseText); // Выводим ответ в консоль
      } else { // Если ответ неуспешный
        console.error('Ошибка при отправке запроса');
      }
    }
  };

  // Добавляем обработчик события прогресса загрузки
  xhr.upload.addEventListener('progress', (event) => {
    const percent = (event.loaded / event.total) * 100; // Вычисляем процент загрузки
    progress.value = percent; // Обновляем значение индикатора
  });

  // Отправляем запрос на сервер
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(new FormData(form));
});

// Получаем элементы HTML-разметки
const pollTitleEl = document.getElementById('poll__title');
const pollAnswersEl = document.getElementById('poll__answers');

// Отправляем GET-запрос и обрабатываем полученный ответ
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    // Заполняем элементы HTML-разметки данными из полученного ответа
    pollTitleEl.innerText = data.data.title;
    pollAnswersEl.innerHTML = data.data.answers.map(answer => `
      <button class="poll__answer">${answer}</button>
    `).join('');

    // Назначаем обработчики событий на кнопки ответов
    const answerBtns = pollAnswersEl.querySelectorAll('.poll__answer');
    answerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  })
  .catch(error => console.error(error));

// Получаем элементы, с которыми будем работать
var loader = document.getElementById('loader');
var items = document.getElementById('items');

// Показываем анимацию загрузки
loader.classList.add('loader_active');

// Отправляем GET-запрос по адресу https://students.netoservices.ru/nestjs-backend/slow-get-courses
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.onreadystatechange = function() {
  // Проверяем статус ответа и готовность ответа
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Преобразуем полученные данные в объект JavaScript
    var response = JSON.parse(xhr.responseText);
    
    // Обрабатываем полученные данные
    var valutes = response.response.Valute;
    for (var key in valutes) {
      var valute = valutes[key];
      
      // Создаем HTML-элементы для каждой валюты
      var code = document.createElement('div');
      code.className = 'item__code';
      code.textContent = valute.CharCode;
      
      var value = document.createElement('div');
      value.className = 'item__value';
      value.textContent = valute.Value;
      
      var currency = document.createElement('div');
      currency.className = 'item__currency';
      currency.textContent = 'руб.';
      
      var item = document.createElement('div');
      item.className = 'item';
      item.appendChild(code);
      item.appendChild(value);
      item.appendChild(currency);
      
      // Добавляем элементы на страницу
      items.appendChild(item);
    }
    
    // Скрываем анимацию загрузки
    loader.classList.remove('loader_active');
  }
};
xhr.send();

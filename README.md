Потрібно створити компонент Card.vue, який:

    Повинен повертати наступну структуру - посилання
    Компонент приймає 2 пропса - title і text.
    Необхідно прийняти їх у компоненті та рендерити в відповідних місцях.
    Якщо якогось пропса не вистачає (не був переданий у компонент), то не рендеримо HTML-код, який його обгортає.
    Підключіть компонент у App і рендерьте його 3 рази (передаючи пропси по черзі).

Під час першого рендеру передайте лише заголовок (title). Під час другого - лише текст (text). Під час третього - обидва пропси.
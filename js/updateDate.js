

//Формат: Среда, 3 неделя Декабря 2021 года*

const date = new Date(document.lastModified);

const weekDays = ['0','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

let day = date.getDay()
let week = getNumberOfWeek()
let month = date.getMonth()
const year = date.getFullYear()

let dataUpdate = `${weekDays[day]}, ${week} неделя ${monthNames[month]}, ${year} года`


function getNumberOfWeek() {
    const today = date;
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
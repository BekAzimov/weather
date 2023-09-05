function unix(dt, type) {
    let milisec = dt * 1000;
    let date = new Date(milisec);
    let result = 
    type == 'weekday' ? date.toLocaleString('ru-RU', {weekday: 'short'}) : 
    type == 'month' ? date.toLocaleString('ru-RU', {month: 'short'}) : 
    type == 'day' ? date.toLocaleString('ru-RU', {day: 'numeric'}) : '';
    return result;
}
export default unix;
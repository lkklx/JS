let DayName = () => {
    debugger
    const NumberOfDay = parseFloat(prompt('Введите день недели'))
switch(NumberOfDay){
    case 1:
        alert('Monday');
        DayName();
    
    case 2:
        alert('Tuesday');
        DayName();
    
    case 3:
        alert('Wednesday');
        DayName();
    
    case 4:
        alert('Thursday');
        DayName();
    
    case 5:
        alert('Friday');
        DayName();
    
    case 6:
        alert('Saturday');
        DayName();
    
    case 7:
        alert('Sunday');
        DayName();
    
    default:
        return alert('Всего доброго'); // Почему не работает без return?
}
}
DayName();

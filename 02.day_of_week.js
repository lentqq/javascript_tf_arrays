function dayOfWeek (num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Satureday',
        'Sunday'
    ];

    if (days[num- 1] === undefined){
        console.log('Invalid day!');
    }
    else{
        console.log(days[num - 1]);
    }
}

dayOfWeek(10)
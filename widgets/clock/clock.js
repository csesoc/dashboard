function date_time(idTime, idDate) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    h = date.getHours();
    if(h<10)
    {
            h = "0"+h;
    }
    m = date.getMinutes();
    if(m<10)
    {
            m = "0"+m;
    }
    s = date.getSeconds();
    if(s<10)
    {
            s = "0"+s;
    }
    document.getElementById(idTime).innerHTML = ''+h+':'+m+':'+s;
    document.getElementById(idDate).innerHTML = ''+days[day]+' '+months[month]+' '+d+' '+year;
    setTimeout('date_time("'+idTime+'","'+idDate+'");','1000');
    return true;
}

date_time('time','date');
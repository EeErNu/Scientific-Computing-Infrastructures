(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }
    function startTime() {
        var today = new Date();
        var dayNumber = today.getDate();
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var hour = checkTime(today.getHours());
        var minute = checkTime(today.getMinutes());
        var second = checkTime(today.getSeconds());

        document.getElementById('time-desktop').innerHTML = days[today.getDay()] + ', ' + dayNumber + ' of ' + months[today.getMonth()] + ' ' + hour + ':' + minute + ':' + second;
        document.getElementById('time-mobile').innerHTML = days[today.getDay()] + ', ' + dayNumber + ' of ' + months[today.getMonth()] + ' ' + hour + ':' + minute + ':' + second;

        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();
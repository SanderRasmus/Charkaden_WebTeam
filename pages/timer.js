const countdown = () => {
    const countDate = new Date("Feb 15, 2023 10:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".dag").innerText = textDay;
    document.querySelector(".time").innerText = textHour;
    document.querySelector(".minutt").innerText = textMinute;
    document.querySelector(".sekund").innerText = textSecond;
};

setInterval(countdown, 1000);

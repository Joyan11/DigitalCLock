

const clock = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'fri', 'sat'];
    const months = ['January', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
        'september', 'october', 'november', 'december'];
    let date, h, m, s, d, mnt, dte, year;
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    d = date.getDay();
    mnt = date.getMonth();
    dte = date.getDate();

    console.log(h, m, s, d, mnt, dte);

    //month
    document.getElementById('month').textContent = months[mnt];

    //year
    document.getElementById('year').textContent = date.getFullYear();

    //date
    if (dte < 10) {
        document.getElementById('day1').textContent = `0${dte} `;
    } else {
        document.getElementById('day1').textContent = dte;
    }



    //day
    document.getElementById('day').textContent = days[d];

    //hours
    if (h == 0) {
        h = 12;
        document.getElementById('hours').textContent = h;
    }
    if (h > 12) {
        h = h - 12;
        document.getElementById('hours').textContent = `0${h} `;
        document.getElementById('ampm').textContent = 'PM';

    }
    //month
    if (m < 10) {
        document.getElementById('minutes').textContent = '0' + m;
    } else {
        document.getElementById('minutes').textContent = m;
    }
    //seconds

    if (s < 10) {
        document.getElementById('seconds').textContent = `0${s} `;
    } else {
        document.getElementById('seconds').textContent = s;
    }
    setTimeout(clock, 1000);



}



clock();
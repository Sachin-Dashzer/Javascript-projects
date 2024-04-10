
function generateCalendar(year) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const calendarDiv = document.querySelector(".calender-box");

    for (let i = 0; i < months.length; i++) {
        const month = months[i];
        const daysInMonth = new Date(year, i + 1, 0).getDate();
        const monthTable = document.createElement('table');
        const monthHeader = document.createElement('caption');
        monthHeader.textContent = month;
        monthTable.appendChild(monthHeader);

        // Create table header for days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const headerRow = document.createElement('tr');
        for (const day of daysOfWeek) {
            const th = document.createElement('th');
            th.textContent = day;
            headerRow.appendChild(th);
        }
        monthTable.appendChild(headerRow);

        // Calculate starting day of the month
        const firstDay = new Date(year, i, 1).getDay();

        // Create table rows for each week
        let currentDay = 1;
        for (let j = 0; j < 6; j++) {
            const weekRow = document.createElement('tr');
            for (let k = 0; k < 7; k++) {
                const dayCell = document.createElement('td');
                if (j === 0 && k < firstDay) {
                    dayCell.textContent = '';
                } else if (currentDay > daysInMonth) {
                    break;
                } else {
                    dayCell.textContent = currentDay;
                    currentDay++;
                }
                weekRow.appendChild(dayCell);
            }
            monthTable.appendChild(weekRow);
        }
        calendarDiv.appendChild(monthTable);
    }
}

generateCalendar(2023);







let temp = "yellow";

const btncolor = ["red" , "green" , "white" , "pink" , "yellow"];


const btns = document.querySelectorAll(".moodbox .emoji");


btns.forEach((index , i)=>{

    index.style.cursor = "pointer";

    index.addEventListener('click' , function(){

        temp = btncolor[i];
    })

})










const markdate = document.querySelectorAll("td");

markdate.forEach((index) => {


    index.addEventListener('click' , function(){

        let colortd = temp;

        this.style.backgroundColor = colortd;
        this.style.color = "black";
    })
})
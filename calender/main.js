


let container = document.querySelector(".calender-box");

const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];



for (let i = 0; i < 12; i++) {

    container.innerHTML += ` <div class="month-box box-${i} h-[300px]">
                                <h3 class="text-3xl my-3">${month[i]}</h3>
                                <div class="week-box flex justify-between">
                                    <div class="days">
                                        <h5>Sun</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Mon</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Tue</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Wed</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Thu</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Fri</h5>
                                    </div>
                                    <div class="days">
                                        <h5>Sat</h5>
                                    </div>
                                </div>
                            </div>
                            `


}









for(let i = 0; i < 12; i++){
    let j = 0;
    const week = document.querySelectorAll(`.box-${i} .week-box .days`);

    for (let i = 1; i <= 30; i++) {


        week[j].innerHTML += `<p>_</p>`


        if (j == 6) {
            j = -1;
        }

        j++;

    }

}






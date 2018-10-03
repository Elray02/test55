// console.log('hello Parcel');
fetch("http://cdn.55labs.com/demo/api.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        // console.log(JSON.stringify(myJson));
    });

// const chart = document.querySelector('dl')
// const bar = [].slice.call(document.querySelectorAll('dd'))
// console.log(bar);

// bar.forEach(element => {
//     element.style.setProperty('--value', '10');
// });

{
    //list of skills
    var data = [
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        },
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        },
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        },
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        },
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        },
        {
            name: "SQL",
            work: 90,
            personal: 10
        },
        {
            name: "PHP",
            work: 40,
            personal: 60
        },
        {
            name: "jS",
            work: 30,
            personal: 70
        },
        {
            name: "jQuery",
            work: 40,
            personal: 60
        },
        {
            name: "WordPress",
            work: 20,
            personal: 80
        }
    ];

    displayData(data);
    // animate();

    //Functions
    //display data
    function displayData(Inputskills) {
        const bar = document.querySelector(".bars");
        const skill = document.querySelector(".skills");

        const markUpSkills = `${Inputskills.map(
            (v, i) => `<li style="--start: ${i};"> <span> ${v.name} </li> </span>`
        ).join("")}
`;
        const markUpBar = `${Inputskills.map(
            (v, i) =>
                `<li  style="--start: ${i};">
        <div class='bar'  style="--barwidth: ${v.personal}%;" >
            ${v.personal}
        </div>
        <div class='bar'  style="--barwidth: ${v.work}%;" >
            ${v.work}
        </div>
    </li>`
        ).join("")}`;

        skill.innerHTML = markUpSkills;
        bar.insertAdjacentHTML("beforeend", markUpBar);
    }
};

function percentage(a, b) {
    return Math.floor((a / b) * 100);
}

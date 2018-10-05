// console.log('hello Parcel');
fetch("http://cdn.55labs.com/demo/api.json")
  .then(function(response) {
    return response.json();
  })
  .then(myJson => {
    // console.log(myJson.data.DAILY.dataByMember.players);
    const players = myJson.data.DAILY.dataByMember.players;
    const date = myJson.data.DAILY.dates;
    // let {players: players, dates: date } =  myJson.data.DAILY.dataByMember;
    let { john: j, larry: l } = players;

    let data = j.points.map((john, i) => {
      const totalPoints = john + l.points[i] || 0;
      percJohn = percentage(john, totalPoints);
      percLarry = percentage(l.points[i], totalPoints);
      
      return {
        day: formatDate(date[i]),
        scoreJ: percJohn,
        scoreL: percLarry
      };
    });

    displayData(data.filter(i => i.day > 0));
  });

// const chart = document.querySelector('dl')
// const bar = [].slice.call(document.querySelectorAll('dd'))
// console.log(bar);

// bar.forEach(element => {
//     element.style.setProperty('--value', '10');
// });

// displayData(data);
// animate();

//Functions
//display data
function displayData(inputData) {
  const bar = document.querySelector(".bars");
  const skill = document.querySelector(".skills");

  const markUpSkills = `${inputData
    .map((v, i) => `<li style="--start: ${i};"> <span> ${v.day} </li> </span>`)
    .join("")}
        `;
  const markUpBar = `${inputData
    .map(
      (v, i) =>
        `<li  style="--start: ${i};">
        <div class='bar'  style="--barwidth: ${v.scoreJ}%;" >
            ${v.scoreJ}
        </div>
        <div class='bar'  style="--barwidth: ${v.scoreL}%;" >
            ${v.scoreL}
        </div>
    </li>`
    )
    .join("")}`;

  skill.innerHTML = markUpSkills;
  bar.insertAdjacentHTML("beforeend", markUpBar);
}
function formatDate(inputDate) {
  if (inputDate) {
    const reversed = inputDate.split("").join("");
    const addYear = insert(reversed, 4, '/');
    const addMonth = insert(addYear, 7, '/').join("");
     
    console.log(addMonth);
    
    return addMonth;
  } else {
    return 0;
  }
}

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
]

function percentage(a, b) {
  if (a && b) {
    return Math.floor((a / b) * 100);
  } else {
    return 0;
  }
}

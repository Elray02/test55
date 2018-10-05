// console.log('hello Parcel');

let data = [];
fetch("http://cdn.55labs.com/demo/api.json")
  .then(function(response) {
    return response.json();
  })
  .then(myJson => {
    const players = myJson.data.DAILY.dataByMember.players;
    const date = myJson.data.DAILY.dates;

    let { john: j, larry: l } = players;

    data = j.points.map((john, i) => {
      const totalPoints = john + l.points[i] || 0;
      percJohn = percentage(john, totalPoints);
      percLarry = percentage(l.points[i], totalPoints);
      return {
        day: formatDate(date[i]),
        percJohn: percJohn,
        percLarry: percLarry,
        scoreJ: john,
        scoreL: l.points[i]
      };
    })
    .filter(i => i.scoreJ > 0);

    displayData(data);
  });

//display data
function displayData(inputData) {


  const bar = document.querySelector(".bars");
  const skill = document.querySelector(".skills");

    bar.addEventListener('click',viewDetail);



  const markUpSkills = `${inputData
    .map((v, i) => `<li style="--start: ${i};"> <span> ${v.day} </li> </span>`)
    .join("")}
        `;
  const markUpBar = `${inputData
    .map(
      (v, i) =>
        `<li  style="--start: ${i};">
        <div class='bar'  style="--barwidth: ${v.percJohn}%;" >
            ${v.scoreJ}
        </div>
        <div class='bar'  style="--barwidth: ${v.percLarry}%;" >
            ${v.scoreL}
        </div>
    </li>`
    )
    .join("")}`;

  skill.innerHTML = markUpSkills;
  bar.insertAdjacentHTML("beforeend", markUpBar);
}

const viewDetail = (e) => {

    const position = Number(getComputedStyle(e.path[1]).getPropertyValue('--start'));
  console.log( 
    data[position].scoreJ
    );
  
}

function formatDate(inputDate) {
  if (inputDate) {
    const reversed = inputDate.split("").join("");
    const addYear = insert(reversed, 4, '/');
    const addMonth = insert(addYear, 7, '/').join("");
    
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

const percentage = (a, b) => {
  if (a && b) {
    return Math.floor((a / b) * 100);
  } else {
    return 0;
  }
}



let data = [];
let isOpen = false;
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
  const back = document.querySelector(".stats__overlay-back");
    bar.addEventListener('click',viewDetail);
    back.addEventListener('click',viewDetail );



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
    const overlay = document.querySelector(".stats__overlay").classList;
    const position = Number(getComputedStyle(e.path[1]).getPropertyValue('--start'));
const avgJ = document.querySelector('#avgJ');
const avgL = document.querySelector('#avgL');
const detailDate = document.querySelector('#day');
    // const 

    if(!isOpen) {
        overlay.add('active');
        detailDate.innerHTML = data[position].day;
        avgJ.innerHTML = data[position].percJohn + '%';
        avgL.innerHTML = data[position].percLarry + '%';
        isOpen = true;
    }else {
      isOpen = false;
       overlay.remove('active');
    }
    
  
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

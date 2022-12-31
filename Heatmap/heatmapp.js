const yearEl = document.getElementById('year')
const heatmapEl = document.getElementById('heatmap')

const timespan = {min: 2000, max: 2100};

const years = getYears(timespan);

let selectedYearNumber = new Date().getFullYear();

main()

function main () {
  update();
}

function onBackClicked () {
  selectedYearNumber--;
  update();
}

function onForwardClicked () {
  selectedYearNumber++;
  update();
}

function update(){
  updateYearElement();
  updateHeatmapElement();
}

function getSelectedYear(){
  return years.find(year => year.yearNumber === selectedYearNumber);
}

function updateYearElement () {
  yearEl.innerText = selectedYearNumber.toString()
}

function updateHeatmapElement () {
  heatmapEl.innerHTML = '';

  const selectedYear = getSelectedYear();

  for(const month of selectedYear.months){
    const monthEl = getElementForMonth(month);
    heatmapEl.append(monthEl);
  }
}

function getElementForMonth(month) {
  const monthEl = document.createElement('div');
  monthEl.className = 'month';
  monthEl.style.background = `rgba(0,0,255,${(month.amount / 100).toString()})`;

  const monthNameEl = document.createElement('span');
  monthNameEl.innerText = month.name;

  monthEl.append(monthNameEl);

  return monthEl;
}

function getYears(timespan){
  const years = [];

  const monthNames = ['Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

  let yearNumber = timespan.min;
  while(yearNumber < timespan.max){
    const months = monthNames.map(monthName => {
      return {name: monthName, amount: getRandomNumber(1, 100)}
    });

    years.push({yearNumber, months});
    yearNumber++;
  }

  return years;
}

//make into getHeat() and give every month of every year the right money spent
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
const yearEl = document.getElementById('year');
const heatmapEl = document.getElementById('heatmap');

const timespan = {min:2000, max: 2100};

const YEARS = getYears(timespan);
let selectedYear = new Date().getFullYear();

main();

function main(){
  update();
}

function onBackClicked () {
    selectedYear--;
    update();
}

function onForwardClicked () {
    selectedYear++;
    update();
}

function update(){
    updateYearElement();
    updateHeatmapElement();
}

function updateYearElement(){
    yearEl.innerText = selectedYear.toString(); 
}

function updateHeatmapElement(){
    heatmapEl.innerHTML = "";       // inner html leeren

    for(const month of MONTHS){
        const monthEl = getElementForMonth(month);
        heatmapEl.append(monthEl);

      }
}

function getElementForMonth(month) {
    const monthEl = document.createElement('div');

    monthEl.className = 'month';
    monthEl.style.background = `rgba(255,0,0,${(month.amount / 100).toString()})`;

    const monthNameEl = document.createElement('span');
    monthNameEl.innerText = month.name;
    //monthNameEl.style.color = 'black';

    monthEl.append(monthNameEl);



    return monthEl;
}

function getYears(){
    const years = [];

    let count = timespan.min;
    whilt(count< timespan.max){
        const MONTHS = monthNames.map(monthName => {
            return{name: monthName, amount: getRandomNumber(1, 100)}
        });
    }
    const MONTHS = [{name:'Januar', amount: 0}, {name: 'Februar', amount: 20}, {name: 'März', amount: 0}, {name: 'April', amount: 80}, {name: 'Mai', amount: 60}, {name: 'Juni',amount: 10}, {name: 'Juli', amount: 0}, {name: 'August', amount: 0}, {name: 'September', amount: 0}, {name: 'Oktober', amount: 0}, {name: 'November', amount:10}, {name: 'Dezember', amoutn:0}]

    return YEARS;
}

const MONTH_NAMES = ['Januar','Februar', 'Maerz', 'April', 'Mai','Juni', 'Juli','August','September', 'Oktober', 'November', 'Dezember'];


//     const MONTHS = [{name:'Januar', amount: 0}, {name: 'Februar', amount: 20}, {name: 'März', amount: 0}, {name: 'April', amount: 80}, {name: 'Mai', amount: 60}, {name: 'Juni',amount: 10}, {name: 'Juli', amount: 0}, {name: 'August', amount: 0}, {name: 'September', amount: 0}, {name: 'Oktober', amount: 0}, {name: 'November', amount:10}, {name: 'Dezember', amoutn:0}]
*/
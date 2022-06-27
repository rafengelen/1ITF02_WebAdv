// A soccer game (basic)
const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];
const tbody = document.querySelector('#soccer tbody');
let belgium = 0;
let spain = 0;
console.log('score: ', score);
console.log('tbody: ', tbody);
score.forEach(function (goal, index) {
    const newRow = document.createElement('tr');
    const tdBelgium = document.createElement('td');
    const tdSpain = document.createElement('td');

    if (goal === 'Belgium') {
        belgium++;
    } else {
        spain++;
    }

    tdBelgium.innerHTML = belgium;
    tdSpain.innerHTML = spain;

    newRow.append(tdBelgium);
    newRow.append(tdSpain);

    tbody.append(newRow);
});

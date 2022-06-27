// A soccer game (advanced)
const score = [
    { time: 14, team: 'Belgium', scorer: 'E. Hazard' },
    { time: 18, team: 'Spain', scorer: 'F. Torres' },
    { time: 32, team: 'Spain', scorer: 'D. Olmo' },
    { time: 44, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 56, team: 'Spain', scorer: 'F. Torres' },
    { time: 72, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 74, team: 'Belgium', scorer: 'D. Mertens' },
    { time: 89, team: 'Belgium', scorer: 'M. Batshuayi' },
];
let goalsBelgium = 0;
let goalsSpain = 0;

const tbody = document.querySelector('#soccer tbody');

score.forEach(function (goal, index1) {
    console.log('team: ', goal.team);
    if (goal.team == 'Belgium') {
        console.log('lmao');
        goalsBelgium++;
        belgium = `${goalsBelgium} (${goal.time}m: ${goal.scorer})`;
        spain = goalsSpain;
    } else {
        goalsSpain++;
        spain = `${goalsSpain} (${goal.time}m: ${goal.scorer})`;
        belgium = goalsBelgium;
    }
    console.log('belgium: ', belgium);
    console.log('spain: ', spain);
    const tdBelgium = document.createElement('td');
    const tdSpain = document.createElement('td');

    tdBelgium.innerHTML = belgium;
    tdSpain.innerHTML = spain;
    const row = document.createElement('tr');
    row.append(tdBelgium);
    row.append(tdSpain);
    tbody.append(row);
});

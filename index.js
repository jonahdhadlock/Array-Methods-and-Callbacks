const fifaData = require("./fifa.js");

console.log('its working');

// // ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */
const final2014 = fifaData.filter((game) => {
        return game.Stage === "Final" && game.Year === 2014;
    })
    // (a) Home Team name for 2014 world cup final
    // */
console.log(final2014[0]["Home Team Name"]);
// /*
// (b) Away Team name for 2014 world cup final
// */
console.log(final2014[0]["Away Team Name"]);
// /*
// (c) Home Team goals for 2014 world cup final
// */
console.log(final2014[0]["Home Team Goals"]);
// /*
// (d) Away Team goals for 2014 world cup final
// */
console.log(final2014[0]["Away Team Goals"]);
// /*
// (e) Winner of 2014 world cup final 
// */
console.log(final2014[0]["Win conditions"]);
/*

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
    return data.filter(data => data.Stage === "Final")
}
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array containing all of the years in the dataset */
function getYears(getFinals) {
    const years = [];
    const filteredGames = getFinals(fifaData);
    for (const game of filteredGames) {
        years.push(game.Year);
    }
    return years;
}
console.log(getYears(getFinals));
/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {
    const winners = [];
    const filteredGames = getFinals(fifaData);
    for (const game of filteredGames) {
        if (game["Home Team Goals"] > game["Away Team Goals"]) {
            winners.push(game["Home Team Name"])
        } else {
            winners.push(game["Away Team Name"])
        }
    }
    return winners;
};

console.log(getWinners(getFinals));
/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a array of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
    const winnerYears = [];
    const years = getYears(getFinals);
    const winners = getWinners(getFinals);
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        const country = winners[i];
        winnerYears.push("In " + year + ", " + country + " won the world cup!");
    }
    return winnerYears;
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

};

getAverageGoals();
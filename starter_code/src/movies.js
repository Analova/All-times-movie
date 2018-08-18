/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  turnHoursToMinutes(movies);
  console.log(movies);






// 1.Get the average of all rates with 2 decimals 
 function ratesAverage (movies){
movies.reduce(function(acc,value){
  return acc + value.Number(movies.rate)
  },0);
  
  var rates = ratesAverage  / movies.length
console.log(rates)


// 2.  Get the average of Drama Movies
function dramaMoviesRate (movies){
  // filter all drama movies
  var drama= "Drama"
 movies.filter(function(item){
return (item.gender.indexOf(drama)>=0)
  // sum up the rate of Dramma movies
}).reduce(function(acc,value){
  return acc + value.Number(movies.rate)
  },0);
}

var dramaRate= dramaMoviesRate/movies.length
console.log(dramaRate)


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
(function howManyMovies(movies){
  var count= 0;
  var director= "Steven Spielberg"
  var drama= "Drama"
 var gender= movies.filter(function(item){
return (item.gender.inculdes(drama))
 if(gender && director){
  count ++
 }
 return count
})();


// Order by title and print the first 20 titles
function OrderAlphabetically (movies){
 for(var i; i<=20; i++){
var newMovies= movies.sort(function(a,b){
  if(a.title > b.title){
    return -1
  }
  if(a.title < b.title){
    return 1
  }
})
 }
 return newMovies.title;
}

// Best yearly rate average


// Turn duration of the movies from hours to minutes 
/* function turnHoursToMinutes(array) {
  var duration = 0;
  var durationStr ='';
  array.forEach(element => {
    console.log(element.duration);
    if(element.duration.includes(' ')) {
      var durationStr = element.duration.split(' ');
      if (durationStr.lenght > 0) {
        duration = (durationStr[0].replace('h', '') * 60) + (durationStr[1].replace('min', '') * 1)
      } else {
        if(durationStr[0].includes('h')){
          duration = (durationStr[0].replace('h', '') * 60);
        } else{
          duration = durationStr[0].replace('min', '') * 1;
        }
      }
      element.duration = duration;
      console.log(element.duration + ' -> convertido');
    }
  }
  );
  return array;
}
turnHoursToMinutes(movies); */

var newMovies = movies.map(
  function turnHoursToMinutes(array) {
    var duration = 0;
    var durationStr ='';
    array.forEach(element => {
      console.log(element.duration);
      if(element.duration.includes(' ')) {
        var durationStr = element.duration.split(' ');
        if (durationStr.lenght > 0) {
          duration = (durationStr[0].replace('h', '') * 60) + (durationStr[1].replace('min', '') * 1)
        } else {
          if(durationStr[0].includes('h')){
            duration = (durationStr[0].replace('h', '') * 60);
          } else{
            duration = durationStr[0].replace('min', '') * 1;
          }
        }
        element.duration = duration;
        console.log(element.duration + ' -> convertido');
      }
    }
    );
    return array;
  })
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies

/* eslint no-restricted-globals: 'off' */

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

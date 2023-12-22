var movies = document.getElementById("movies");
var tital = document.getElementById("tital");
function nowplaying(){
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGYzYThjZDAxMmJmYzg0M2JlNzI3OWNjNTRjNDkzYSIsInN1YiI6IjY1ODJlMWYwY2E4MzU0NDEwM2Q3MDEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwsWzf34zI5viQbhELGvUgxvDpk2zKRBbpQshs7g1-0'
    }
  };
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        var resultmovies = response.results;
        console.log(resultmovies)
        movies.innerHTML = ``;
        tital.innerHTML="NOW PLAYING";
        resultmovies.forEach(function(movie){
            movies.innerHTML+= `
            <div  class="film">
                <img  src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="">
                <div class="cover">
                            <h2>${movie.title}</h2>
                            <p class="info-p">${movie.overview}</p>
                            <p class="rate">Rate: ${movie.vote_average}</p>
                            <p class="date">Date: 2023-07-19</p>
                        </div>
                </div>
            `
        })

    }
        )
}

function showTopRated(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGYzYThjZDAxMmJmYzg0M2JlNzI3OWNjNTRjNDkzYSIsInN1YiI6IjY1ODJlMWYwY2E4MzU0NDEwM2Q3MDEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwsWzf34zI5viQbhELGvUgxvDpk2zKRBbpQshs7g1-0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            var resultmovies = response.results;
            console.log(resultmovies)
            movies.innerHTML = ``;
            tital.innerHTML="TOP RATED MOVIES";
            resultmovies.forEach(function(movie){
                movies.innerHTML+= `
                <div  class="film">
                    <img  src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="">
                    <div class="cover">
                                <h2>${movie.title}</h2>
                                <p class="info-p">${movie.overview}</p>
                                <p class="rate">Rate: ${movie.vote_average}</p>
                                <p class="date">Date: 2023-07-19</p>
                            </div>
                    </div>
                `
            })
    
        }
            )

}


function upComing(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGYzYThjZDAxMmJmYzg0M2JlNzI3OWNjNTRjNDkzYSIsInN1YiI6IjY1ODJlMWYwY2E4MzU0NDEwM2Q3MDEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwsWzf34zI5viQbhELGvUgxvDpk2zKRBbpQshs7g1-0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            var resultmovies = response.results;
            console.log(resultmovies)
            movies.innerHTML = ``;
            tital.innerHTML="UPCOMING MOVIES";
            resultmovies.forEach(function(movie){
                movies.innerHTML+= `
                <div  class="film">
                    <img  src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="">
                    <div class="cover">
                                <h2>${movie.title}</h2>
                                <p class="info-p">${movie.overview}</p>
                                <p class="rate">Rate: ${movie.vote_average}</p>
                                <p class="date">Date: 2023-07-19</p>
                            </div>
                    </div>
                `
            })
    
        }
            )

}


function showPopular(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGYzYThjZDAxMmJmYzg0M2JlNzI3OWNjNTRjNDkzYSIsInN1YiI6IjY1ODJlMWYwY2E4MzU0NDEwM2Q3MDEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwsWzf34zI5viQbhELGvUgxvDpk2zKRBbpQshs7g1-0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            var resultmovies = response.results;
            console.log(resultmovies)
            movies.innerHTML = ``;
            tital.innerHTML="POPULAR MOVIES";
            resultmovies.forEach(function(movie){
                movies.innerHTML+= `
                <div  class="film">
                    <img  src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="">
                    <div class="cover">
                                <h2>${movie.title}</h2>
                                <p class="info-p">${movie.overview}</p>
                                <p class="rate">Rate: ${movie.vote_average}</p>
                                <p class="date">Date: 2023-07-19</p>
                            </div>
                    </div>
                `
            })
    
        }
            )

}
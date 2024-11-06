const movieDataDiv = document.getElementById("movie-data");

let page = 1;
let totalMovieOnDb = 0;
let totalMovieFetched = 0;

// movie declerations 



const fetchMovieData = async (page) => {
    try {
        // Send HTTP GET request to TMDB API server
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTcxOTIxNDNmMjY0MDQyMzJkZWFiOWNlNTRhZDQ5NCIsIm5iZiI6MTcyNjc1MDYzNy4wMDk2MzMsInN1YiI6IjY2ZWMxZDBiZTQzZjA3ZGU4MmViOWY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VZPKvBuD8bPRCcJ7wb3EF8NcMS5iY6hqzloe25GyGPk" // Replace with your actual token
                },
            }
        );

        const data = await response.json();

        // Render movie data to user interface
        if (data && data.results.length > 0) {
            totalMovieFetched += data.results.length;
            totalMovieOnDb = data.total_results;

            for (movie of data.results) {
                const movieCol = document.createElement("div");
                movieCol.classList.add("col-12", "col-md-6", "col-lg-3", "mb-4");
                
                movieCol.innerHTML = `
                <div class="card" style="width: 100%;">
                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="..." class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${movie.original_title}</h5>
                        <p class="card-text">${movie.overview.substring(0, 90)}...</p>
                        <a href="#" value= ${
                            movie.id
                        } class="btn btn-primary movie-btn" id="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Details...</a>
                    </div>
                </div>`;

                movieDataDiv.appendChild(movieCol);
            };

            const movieBtns = document.getElementsByClassName("movie-btn");

            for (btn of movieBtns) {
                btn.addEventListener("click", fetchMovieDetails);
            }
        }
    } catch (error) {
        document.getElementById("error-message").textContent = error.message || "Something went wrong.";
    }
};

// On scroll function handler
const onScrollPage = async () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - 1000;
    const clientHeight = document.documentElement.clientHeight;

    // Stop fetching data if all data is fetched
    if (totalMovieFetched >= totalMovieOnDb) {
        return;
    }

    if (scrollTop + clientHeight >= scrollHeight) {
        page += 1;
        await fetchMovieData(page);
    }
};

//  fetch single movie data 
const fetchMovieDetails = async (event) => {}

window.addEventListener("load", () => fetchMovieData(page));
window.addEventListener("scroll", onScrollPage);

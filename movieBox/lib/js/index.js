// const fetchMovieData = async (page) => {

//     try {
//         // send http GET request to TMBD API server
//         const response = await fetch(
//             `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
//             {
//                 method: "GET",
//                 headers: {
//                     accept: "application/json",
//                     Authorization:
//                         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTUzYzhhMThlZTI2ODJkZWFiYjE4MTI1ZDA2MzE1MSIsIm5iZiI6MTcyNjY1NjcxMC4wMzAzNTYsInN1YiI6IjY2ZWFhZGM4NWMwNTE5YTIzNGQzNTViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xJDU1IrUXtwDiCbV3hpcWx3AoSknE-A_8xzDTaEAY7M"
//                 },
//             }
//         );

//         const data = await response.json();

//         // rener movie data to user interface
//         if (data && data.results.length > 0) {
//             totalMovieFetched += data.results.length;
//             totalMovieOnDb = data.total_results;

//             for (movie of data.results) {
//                 const movieCol = document.createElement("div");
//                 movieCol.classList.add("col-12", "col-md-6", "col-lg-3", "mb-4");

//                 movieCol.innerHTML = `
//                 <div class="card" style="width: 100%;">
//                         <img src="${`https://image.tmdb.org/t/p/w300${movie.poster_path}`}" alt="..." class="card-img-top" />
//                         <div class="card-body">
//                             <h5 class="card-title">${movie.original_title}</h5>
//                             <p class="card-text">
//                                 ${movie.overview.substring(0, 90)}...
//                             </p>
//                             <button type="button" class="btn btn-primary"
//                 data-bs-toggle="modal"
//                 data-bs-target="#GFG">
//                 Click Me
//         </button>

//       <div class="modal fade" id="GFG">
//             <div class="modal-dialog  modal-md">
//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <h1 class="modal-title" id="GFGLabel">
//                             ${movie.original_title}
//                         </h>
//                         <button type="button" class="btn-close"
//                                 data-bs-dismiss="modal" aria-label="Close">
//                         </button>
//                     </div>
//                     <div class="modal-body">
//                       <h2 class="card-text">${movie.id}</h2>
//                     <img src="${`https://image.tmdb.org/t/p/w300${movie.poster_path}`}" height="100%"
//                 width = "100%" alt = "..."
//                 class="d-block w-100" >
//                         <br>
//                             <p class="card-text">${movie.overview}</p>
//                             <br>
//                                 <p class="card-text">${movie.release_date}</p>
//                             </div>
//                         </div>
//                     </div>
//         </div >
//                         </div>
//                     </div>`;

//                 movieDataDiv.appendChild(movieCol);

//                 console.log(data.results);
//             }
//         }
//     } catch (error) {
//         document.getElementById("error-message").textContent = error.message || "something went wrong";
//     }
// };

<div class="modal-body d-flex">
    <img src="download.jpeg" height="50%" width="50%" alt="..."
        class="d-block w-50">
        <div class="">
            <h2>MOVIE NAME</h2>
            <p>Movie name</p>
            <div class="d-flex">
                <div>
                    <P>popularity:</P>
                    <p>vote-average:</p>
                </div>
                <div>
                    <p>movie time</p>
                    <P>release date</P>
                </div>
            </div>
            <p>Overview: </p>
            <p>Spoken-languages: </p>
            <p>Genre: </p>
            <p>production countries: </p>
            <p>production companies: </p>
        </div>
</div>
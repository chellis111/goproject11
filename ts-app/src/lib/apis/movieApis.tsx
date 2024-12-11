
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTcxOTIxNDNmMjY0MDQyMzJkZWFiOWNlNTRhZDQ5NCIsIm5iZiI6MTcyNjc0OTk2My4xNDcsInN1YiI6IjY2ZWMxZDBiZTQzZjA3ZGU4MmViOWY1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7-uXlrncFUB6sT5CV3ROb9DM0JCISsMMBGAT_akcXeE"
    },
};

export const fetchMovieData = async (pageNum: number) => {
  try{
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}`,
         options
        );

    const data = await response.json();

    console.log(data);

    if (!response.ok){
        throw new Error("something went wrong");
    }

    return {data: data?.results};

  }catch(error:unknown){
    if (error instanceof Error){
        return { error: error.message || "something went wrong"};
   }
 }
};
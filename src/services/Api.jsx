
const url = "https://api.themoviedb.org/3";

export async function getMovies(u){
    try{const response = await fetch(url + u,{
            headers:{ 
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjA3ZTIyZjQxMjNmODI3NWNmMTI0YzM1Nzg0MjliZSIsInN1YiI6IjYzNzQwNDY2ZDcxMDdlMDA3NTU1MTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.78F-yX8dR55MsbKmuzn0iJMi2wU-2zv8Bhh0P0OqnP8",
                "Content-Type": "application/json;charset=utf-8",
            }
        })
        const data = await response.json()
        return data;
    }
    catch(error){
        console.log(error );
    }
}

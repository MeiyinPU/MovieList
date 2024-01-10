import axios from 'axios'
import { useState, useEffect} from 'react'

const MoviesList = ()=> {

const [loading, setLoading] = useState(true);
const [movieItems, setMovieItems] = useState();
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);


const url =
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;


const fetchMovies= async()=> {

try {
  const response =  await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA0ZTQzODI5NDlkNDgxMzQzODllMGMxZjBlNmMzOCIsInN1YiI6IjYwNTFmYTM2OTc2YTIzMDA1MzMwYWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97Tv686oNtvpks41yCg-Evfoe_Pg1lFEdPWWEI-R-sg",

    },
  });
   console.log(response.data.results)
   setMovieItems(response.data.results)

  } catch(error){
  console.log(error)
} finally{
  console.log("Le fetch est terminée")
  // on passe le lodaing à false
  setLoading(false);
}
}


useEffect(()=>{
fetchMovies();
},[])


useEffect(()=>{
fetchMovies();
},[page])


const filteredMovieItems = movieItems?.filter(item=> {

  return item.original_title.trim().toLowerCase().includes(search.trim().toLowerCase())
  
  });


const handleChange = (e)=> {
  setSearch(e.target.value)
};

const handleSelectChange = (e)=> {
  console.log(e.target.value)
  setPage(e.target.value)
};
  

return (
<>
{loading?(<h1>Loading...</h1>) : 
(<><h1>Notre liste de films</h1>

<input type="text" onChange={handleChange} />

<select defaultValue="1" onChange={handleSelectChange}>
<option value="1">page 1</option>
<option value="2">page 2</option>
<option value="3">page 3</option>
</select>

{movieItems.length && 
filteredMovieItems.length &&
filteredMovieItems.map((movie)=>{

  return (

<article key={movie.id}>
  <h2>{movie.original_title}</h2>
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
  </article>

  )
})}



</>)}
</>
)


}


export default MoviesList
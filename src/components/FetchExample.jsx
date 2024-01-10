
import axios from 'axios'
import { useEffect } from 'react'


const FetchExample = ()=> {

  const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";


const fetchMovies= async()=> {

try {
  const response =  await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzA0ZTQzODI5NDlkNDgxMzQzODllMGMxZjBlNmMzOCIsInN1YiI6IjYwNTFmYTM2OTc2YTIzMDA1MzMwYWQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.97Tv686oNtvpks41yCg-Evfoe_Pg1lFEdPWWEI-R-sg",

    },
  });
   console.log(response)
  } catch(error){
  console.log(error)
} finally{
  console.log("Le fetch est terminée")
}
}


// uniquement au montage du composant
useEffect(()=> {

fetchMovies()

},[])




return (
  <p>test: FetchExample</p>
  )




}   





export default FetchExample







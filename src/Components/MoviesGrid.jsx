import {useState,useEffect} from "react";
import {MoviesItem} from "./MoviesItem";
import uuid from 'react-uuid';
import styles from './moviesGrid.module.css';
import  * as  API from '../services/Api';
import Spinner from "./Spinner";
import { useQuery } from "../Hooks/useQuery";
import { Empty } from "./Empty";

export function MoviesGrid({search}) {

  const[movies,setMovies] = useState([]);
  const[page,setPage] = useState(1);
  const[isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true)
    const searchUrl = search? "/search/movie?query=" + search + "&page=" + page:"/discover/movie" + "?page=" + page;
    API.getMovies(searchUrl).then((data)=>{
      setMovies(prevData =>prevData.concat(data.results));
      setIsLoading(false);
    })
    .catch('error');
   },[search,page]);

   useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return()=>window.removeEventListener ("scroll", handleScroll)
    },[])

   const handleScroll = ()=>{
      const heightPage= document.documentElement.scrollHeight;
      const topPage = document.documentElement.scrollTop;
      const windowOfPage = window.innerHeight;
      if(windowOfPage + topPage + 1 >= heightPage){        
        setIsLoading(true);
        setPage((prevPage) =>(prevPage + 1));   
      }
   }

   if(!isLoading && movies.length === 0){
      return  <Empty/>;
   }

  return (
    <>
      <ul className={styles.moviesGrid}>
          
            {movies.map((movie)=>(
              <MoviesItem key ={uuid()} page={page} movie = {movie}/>
          ))}
          {isLoading && <Spinner/>}
      </ul>
      
    </>
  );
}

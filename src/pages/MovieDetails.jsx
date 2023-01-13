import styles from './MovieDetails.module.css';
import * as API from '../services/Api'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { getImageApi } from '../services/getImageApi';

export function MovieDetails(){

    const {movieId} = useParams();        
    const[movie,setMovie] = useState();  

    useEffect(()=>{
        API.getMovies("/movie/" + movieId).then(data=>{setMovie(data)}).catch('error');

    },[movieId])

    if(!movie){
        return <Spinner/>;
    }

    const imgUrl = getImageApi(movie.poster_path,300);

    return (
            <div className={styles.detailsContainer}> 
                <img className={`${styles.col} ${styles.img}`} src={imgUrl} alt={movie.title}/>
                <div className={`${styles.col} ${styles.description}`}>
                    <p>
                    <strong>Title: </strong> {movie.title}
                    </p>
                    <p>
                        <strong>Genres: </strong>{movie.genres.map(genre=>genre.name).join(', ')}
                    </p>     
                    <p>
                        <strong>Description: </strong>{movie.overview}
                    </p> 
                </div>
            </div>
            )
}
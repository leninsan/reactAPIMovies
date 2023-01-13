import { Link } from 'react-router-dom';
import styles from './MoviesItem.module.css';
import { getImageApi } from '../services/getImageApi';

export function MoviesItem({movie}) {
  const imageUrl = getImageApi(movie.poster_path,300);
  
  return (
    
    <li className={styles.movieCard}>
      <Link to={`/pages/MovieDetails/${movie.id}`}>
        <img className={styles.movieImage} src={imageUrl} alt={"card"}/>
      </Link>
      <div>{movie.title}</div>
      
    </li>
  );
}

import styles from './App.module.css';
import { Link, Route,Routes} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import {MovieDetails} from './pages/MovieDetails'

function App() {
  return (
   <div>
    <header>
     <Link to={'/'}> <h1 className={styles.title} >Movies</h1> </Link>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/pages/MovieDetails/:movieId' element={<MovieDetails />} />
      </Routes>
    </main>
   </div>
  )
}

export default App;

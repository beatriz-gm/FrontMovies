import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { Movie } from '../../components/movie';
import { Container } from './styles';
import { FiPlus } from 'react-icons/fi';
import { useData } from '../../components/context/DataContext.jsx';
import { useEffect, useState } from 'react';

export function Home() {
  const [movies, setMovies] = useState([]);
  const {data} = useData();
  
  useEffect(() => {
    const title = data.search
    const params = new URLSearchParams({title}).toString();
    const url = `http://localhost:3333/movies?${params}`;
    
    async function fetchMovies() {
      const data = await fetch(url,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
          }
        });
        const movies = await data.json();
        setMovies(movies);
      }
      fetchMovies();
    }, [data]);

  useEffect(() => {
    const title = data
    const params = new URLSearchParams({title}).toString();
    const url = `http://localhost:3333/movies?${params}`;

    async function showMovies() {
      const data = await fetch(url,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
          }
        });
        const movies = await data.json();
        setMovies(movies);   
    }
    showMovies();
  }, []);
    
    return(
      <Container>
      <Header/>
      <div className="moviesTitle">
        <h1>My movies</h1>
        <Button 
          to="/new"
          title="Add movie"
          icon={FiPlus} > 
        </Button>
      </div>
      <div className="movies">
        {
          movies.map(movie => (
            <Movie
            key={String(movie.id)}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            rating={movie.rating}
            tags={movie.tags}
            />
          ))
        }
      </div>
    </Container>
  )
}
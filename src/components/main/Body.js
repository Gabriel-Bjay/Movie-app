import React, { useState, useEffect } from 'react'
import MovieList from '../Movies/MovieList'
// import MovieListHeading from '../Movies/MovieListHeading';
import SearchBox from '../SearchBox';
import AddFavourites from '../Favourites/AddFavourites';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css'


const Body = () => {
    const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=73038109`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
    <div className='main-body'>
        <div className='header-item'>
            <div className='header-item-search'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
        </div>

            <div className='movies'>
                <div className='movie-app'>
                    <div className='listing'>
						<h2>Movies</h2>
                        {/* <MovieListHeading  /> */}
                    </div>

                    <div className='row-listing'>
                            <div className='scroll'>
                                <MovieList
                                        movies={movies}
                                        handleFavouritesClick={addFavouriteMovie}
                                        favouriteComponent={AddFavourites}
                                    />
                            </div> 
                    </div>
           
                </div>
            </div>
    </div>
  )
}

export default Body;

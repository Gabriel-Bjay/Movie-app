import React from 'react'
import { useState, useEffect } from 'react';
import MovieList from '../Movies/MovieList'
import MovieListHeading from '../Movies/MovieListHeading';
import RemoveFavourites from '../Favourites/RemoveFavourites';

const MainF = () => {
	const [favourites, setFavourites] = useState([]);
	

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


	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

  return (
    <div>
      <div className='row-listing'>
                        <div className='scroll'>
                            <MovieListHeading heading='Favourites' />
                        </div>
                    </div>

                    <div className='row-listing'>
                        <div className='scroll'>

                            <MovieList
                                movies={favourites}
                                handleFavouritesClick={removeFavouriteMovie}
                                favouriteComponent={RemoveFavourites}
                            />
                        </div>
                    </div>
    </div>
  )
}

export default MainF

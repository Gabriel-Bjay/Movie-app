import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/main/Body';
import { Route,Routes } from 'react-router-dom';
import MainF from './components/Favourites/MainF';


const App = () => {
	
	return (
			<div className='app-container'>
				<Header/>
				<Routes>
					<Route path='/' element={<Body/>}/>
					<Route path='/favourites' element={<MainF/>}/>
				</Routes>
			</div>
		
	);
};

export default App;

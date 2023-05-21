import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Body from './components/main/Body';
import { Route,Routes } from 'react-router-dom';
import { Login } from './components/user/Login';
import MainF from './components/Favourites/MainF';


const App = () => {
	
	return (
			<div className='app-container'>
				<Header/>
				<Routes>
					<Route path='/' element={<Body/>}/>
					<Route path='/favourites' element={<MainF/>}/>
					<Route path='/login' element={<Login/>}/>
				</Routes>
			</div>
		
	);
};

export default App;

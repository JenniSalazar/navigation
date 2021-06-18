import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Navigation} from './Navigation';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';

export const Layout:React.FC = () =>{
	return(<>
		<Navigation/>
		<Switch>
			<Route exact path='/'>
                <Home/>
			</Route>

			<Route path='/about/:sectionID'>
                <About/>
			</Route>

			<Route exact path='/contact'>
                <Contact/>
			</Route>
		</Switch>
	</>);
};
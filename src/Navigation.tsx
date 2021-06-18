import React from 'react';
import {Link} from 'react-router-dom';

const NavigationOpts = [{
	path:'/',
	label:'Home'
}, {
	path:'/about',
	label:'/about'
}, 
{
	path:'/contact',
	label:'contact me'
}];

export const Navigation: React.FC = () => {
	return(<div>
		<ul>
			{NavigationOpts.map(item => (
				<li>
					<Link to={item.path}>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
		</div>)
};
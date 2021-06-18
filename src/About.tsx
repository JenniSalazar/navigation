import React from 'react';
import { useHistory,useParams } from 'react-router';

export const About:React.FC = () =>{
	const history = useHistory();
	const route = history.location.pathname;
    const {sectionID} = useParams<{sectionID:string}>();

	console.log(route)
	return<><h1>About PAGE</h1>
		<div>
			<p> {sectionID} </p>
		</div>
	</>
};
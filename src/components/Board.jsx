import React from 'react';

function Voiture({voiture}){
	return(
		<div className="voiture">
			{voiture.title}
		</div>
	);
};

function Board(){

	return(
		<div className="voitures">
			{Voitures.map((voiture, index) => (
				<Voiture 
					key={index}
					index={index}
					voiture={voiture}
				/>
			))}
		</div>
	);
}

export default Board;
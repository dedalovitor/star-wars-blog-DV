import React from "react";
import { Link } from "react-router-dom";



export const CardCharacterBlog = ({character}) => {
    return (
				<div className="card col-2">
				<img src={character.image}></img>
					<div className="card-body">
						<h5 className="card-title">{character.name}</h5>
						<p className="card-text">Status: {character.status} </p>
						<p className="card-text">Species: {character.species}</p>
						<p className="card-text">Gender: {character.gender}</p>
						<Link to={"card-details/character/" + character.id }>
						<button className="btn btn-primary">Details</button>
						</Link>
						
					</div>
			</div>

			)


		};
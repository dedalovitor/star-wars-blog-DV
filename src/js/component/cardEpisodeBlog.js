import React from "react";

import { Link } from "react-router-dom";

export const CardEpisodeBlog = ({episode}) => {
    return (
				<div className="card col-2">
				<img src="https://episode.eu/wp-content/uploads/2020/04/logo-episode-zwart.jpg"></img>
					<div className="card-body">
						<h5 className="card-title">{episode.name}</h5>
						<p className="card-text">OnAir: {episode.air_date} </p>
						<p className="card-text">Episode: {episode.episode}</p>
						<p className="card-text">Characters: {episode.characters.length}</p>
						<Link to={"card-details/episode/" + episode.id }>
						<button className="btn btn-primary">Details</button>
						</Link>
					</div>
			</div>

			)


		};
import React from "react";
import { Link } from "react-router-dom";


export const CardLocationBlog = ({location}) => {
    return (
				<div className="card col-2">
				<img src="https://e7.pngegg.com/pngimages/363/769/png-clipart-location-icon-landmark-map-thumbnail.png"></img>
					<div className="card-body">
						<h5 className="card-title">{location.name}</h5>
						<p className="card-text">Type: {location.type} </p>
						<p className="card-text">Dimension: {location.dimension}</p>
						<p className="card-text">Residents: {location.residents.length}</p>
						<Link to={"card-details/location/" + location.id }>
						<button className="btn btn-primary">Details</button>
						</Link>
					</div>
			</div>

			)


		};
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-3 pe-5">
<div className="dropdown ms-auto">
	<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
	Read Later
	</button>
	<ul className="dropdown-menu dropdown-menu-end">
		{ store.favorites.length > 0 ? store.favorites.map((favorite, i) =>{
			return <li key={i} className="dropdown-item">{favorite} <p onClick={()=> actions.setFavorites(favorite)}>🗑</p></li>
		 } ) : <li className="dropdown-item">- EMPTY -</li>

		}
	</ul>
</div>
		</nav>
	);
};

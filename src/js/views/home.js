import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {CardCharacterBlog} from "../component/cardCharacterBlog";
import {CardLocationBlog} from "../component/cardLocationBlog";
import {CardEpisodeBlog} from "../component/cardEpisodeBlog";



export const Home = () => {
	const {store} = useContext (Context);
	return (
	<div className=" mt-5">
		
		<div className="container">
		<h1>Characters</h1>
        <div className="row"> 
		{store.characters.map((character)=> {
			return <CardCharacterBlog key={character.id} character={character}/>


		})}


		</div>


			
		</div>
		
		<div className="container">
		<h1>Locations</h1>
		<div className="row"> 
		{store.locations.map((location)=> {
			return <CardLocationBlog key={location.id} location={location}/>


		})}


		</div>
		</div>
	
		<div className="container">
		<h1>Episodes</h1>
		<div className="row"> 
		{store.episodes.map((episode)=> {
			return <CardEpisodeBlog key={episode.id} episode={episode}/>


		})}


		</div>
		</div>
	</div>
)

	}

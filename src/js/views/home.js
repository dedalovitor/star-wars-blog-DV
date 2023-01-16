import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {CardCharacterBlog} from "../component/cardCharacterBlog";
import {CardLocationBlog} from "../component/cardLocationBlog";
import {CardEpisodeBlog} from "../component/cardEpisodeBlog";



export const Home = () => {
	const {store, actions} = useContext (Context);
	return (
	<div className=" mt-5">
		
		<div className="container">
		<h1>Characters</h1>
        <div className="row"> 
		{store.characters.results ? store.characters.results.map((character)=> {
			return <CardCharacterBlog key={character.id} character={character}/>
		}) : "Cargando..." }
		<button className="btn btn-success" onClick={()=> actions.getCharacters(store.characters.info.next)}>Cargar más</button>
		</div>
		</div>
		
		<div className="container">
		<h1>Locations</h1>
		<div className="row"> 
		{store.locations.results ? store.locations.results.map((location)=> {
			return <CardLocationBlog key={location.id} location={location}/>


		}): "Cargando..." }


		</div>
		</div>
	
		<div className="container">
		<h1>Episodes</h1>
		<div className="row"> 
		{store.episodes.results ? store.episodes.results.map((episode)=> {
			return <CardEpisodeBlog key={episode.id} episode={episode}/>
		}): "Cargando..." }


		</div>
		</div>
	</div>
)

	}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		characters: [],
		locations: [],
		episodes: []
		},
		actions: {
			getCharacters: async () =>{ 
				const response = await fetch("https://rickandmortyapi.com/api/character");
				const data = await response.json();
				setStore({characters: data.results});
			},
			getLocations: async () =>{ 
				const response = await fetch("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({locations: data.results});

			},
			getEpisodes: async () =>{ 
				const response = await fetch("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({episodes: data.results});

			},
			
			}
		
	};
};

export default getState;

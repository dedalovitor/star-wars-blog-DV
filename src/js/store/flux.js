const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		characters: {},
		locations: {},
		episodes: {},
		favorites:[]
		},
		actions: {
			getCharacters: async (url) =>{ 
				const response = await fetch(url);
				const data = await response.json();
				setStore({characters: data});
			},
			getLocations: async () =>{ 
				const response = await fetch("https://rickandmortyapi.com/api/location");
				const data = await response.json();
				setStore({locations: data});

			},
			getEpisodes: async () =>{ 
				const response = await fetch("https://rickandmortyapi.com/api/episode");
				const data = await response.json();
				setStore({episodes: data});

			},
			setFavorites: (name) => {
				const store = getStore();

				if (!store.favorites.includes(name)){ 
					setStore({favorites: [...store.favorites, name]});
					
				}else{
					setStore({ favorites: store.favorites.filter((favName)=> favName != name)});
					}
				}
				
			}


			
		
	};
};

export default getState;

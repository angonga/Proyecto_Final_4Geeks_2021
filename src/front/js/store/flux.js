const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			provincias: [],
			cantones: [],
			servicios: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadServicios: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/services")
					.then(resp => resp.json())
					.then(data => setStore({ servicios: data.allservices }))
					.catch(error => console.log("Error loading message from backend", error));
			},

			loadProvincias: () => {
				const store = getStore();
				fetch("https://ubicaciones.paginasweb.cr/provincias.json")
					.then(res => res.json())
					.then(async data => {
						console.log("load provincias", data);
						let ids = Object.keys(data);
						let valores = Object.values(data);

						let arrayProvincias = [];
						for (let i = 0; i < ids.length; i++) {
							let objProvincia = {
								value: ids[i],
								name: valores[i]
							};
							arrayProvincias = [...arrayProvincias, objProvincia];
						}
						setStore({ provincias: arrayProvincias });
					});
			},
			loadCantones: id => {
				fetch(`https://ubicaciones.paginasweb.cr/provincia/${id}/cantones.json`)
					.then(res => res.json())
					.then(async data => {
						console.log("load cantones", data);
						let ids = Object.keys(data);
						let valores = Object.values(data);

						let arrayCantones = [];

						for (let i = 0; i < ids.length; i++) {
							let objCanton = {
								value: ids[i],
								name: valores[i]
							};
							arrayCantones = [...arrayCantones, objCanton];
						}
						setStore({ cantones: arrayCantones });
					});
			},
			// register: data => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/register", {
			// 		method: "POST",
			// 		body: JSON.stringify(data),
			// 		headers: { "Content-Type": "application/json" }
			// 	})
			// 		.then(res => res.json())
			// 		// .then(resp => resp.json())
			// 		.then(data => {
			// 			console.log("data->", data);
			// 		})
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			login: body => {
				const actions = getActions();
				fetch("https://3001-brown-vulture-ydybxsfp.ws-us04.gitpod.io/api/login", {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(data => {
						setStore({ token: data.token });
						actions.loadUser();
						console.log(data);
						sessionStorage.setItem("my_token", data.token);
					})
					.catch(err => console.log(err));
			},
			logout: () => {
				setStore({ token: "" });
				sessionStorage.removeItem("my_token");
			},
			loadUser: my_token => {
				fetch("https://3001-brown-vulture-ydybxsfp.ws-us04.gitpod.io/api/me", {
					headers: {
						Authorization: `Bearer ${my_token}`
					}
				})
					.then(res => res.json())
					.then(data => {
						setStore({ currentUser: data.user });
						console.log(data);
					})
					.catch(err => console.log(err));
			}
		}
	};
};

export default getState;

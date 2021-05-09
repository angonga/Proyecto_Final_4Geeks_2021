const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// message: null,
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
			provincias: [],
			cantones: [],
			distritos: []
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

			loadProvincias: () => {
				fetch("https://ubicaciones.paginasweb.cr/provincias.json")
					// .then(res => res.json())
					.then(async data => {
						console.log("load provincias", data.results);
						let arrayResultsP = data.results;
						let provinciasArray = [];

						for (let i = 1; i < arrayResultsP.length; i++) {
							const res = await fetch(arrayResultsP[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							provinciasArray.push(data);
						}

						console.log("provincias array ", provinciasArray);
						setStore({ provincias: provinciasArray });
					});
			},
			loadCantones: () => {
				fetch("https://ubicaciones.paginasweb.cr/provincia/id_provincia/cantones.json")
					// .then(res => res.json())
					.then(async data => {
						console.log("load cantones", data.results);
						let arrayResultsC = data.results;
						let cantonesArray = [];

						for (let i = 1; i < arrayResultsC.length; i++) {
							const res = await fetch(arrayResultsC[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							cantonesArray.push(data);
						}

						console.log("cantones array ", cantonesArray);
						setStore({ cantones: cantonesArray });
					});
			},
			loadDistritos: () => {
				fetch("https://ubicaciones.paginasweb.cr/provincia/id_privincia/canton/id_canton/distritos.json")
					.then(res => res.json())
					.then(async data => {
						console.log("load distritos", data.results);
						let arrayResultsD = data.results;
						let distritosArray = [];

						for (let i = 1; i < arrayResultsD.length; i++) {
							const res = await fetch(arrayResultsD[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							distritosArray.push(data);
						}

						console.log("cantones array ", distritosArray);
						setStore({ distritos: distritosArray });
					});
			},
			register: data => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/register", {
					method: "POST",
					body: JSON.stringify(data),
					headers: { "Content-Type": "application/json" }
				})
					.then(res => res.json())
					// .then(resp => resp.json())
					.then(data => {
						console.log("data->", data);
					})
					.catch(error => console.log("Error loading message from backend", error));
			}
		}
	};
};

export default getState;

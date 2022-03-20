import axios from "axios";

export default axios.create({
	baseURL: "http://rafaelfaustini.com.br/api",
	headers: {
		"Content-type": "application/json",
	},
});

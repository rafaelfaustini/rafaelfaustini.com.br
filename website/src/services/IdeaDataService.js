import http from "../http-common";

class IdeaDataService {
	getAll() {
		return http.get("/ideas");
	}

	get(id) {
		return http.get(`/ideas/${id}`);
	}

	getByCategory(id) {
		return http.get(`/ideas/category/${id}`);
	}

	create(data) {
		return http.post("/ideas", data);
	}

	update(id, data) {
		return http.put(`/ideas/${id}`, data);
	}

	delete(id) {
		return http.delete(`/ideas/${id}`);
	}
}

export default new IdeaDataService();

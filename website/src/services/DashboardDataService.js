import http from "../http-common";

class DashboardDataService {
	categories_total() {
		return http.get("/dashboard/total");
	}
}

export default new DashboardDataService();

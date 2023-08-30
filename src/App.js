import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/_Website";
import { AdminLayout } from "./pages/_Admin";
import {
	AdminHomepage,
	ProductAdministration,
	UserAdministration,
} from "./pages/_Admin/pages";

function App() {
	return (
		<Router>
			<Routes>
				{/* Website Routes */}
				<Route
					path="/React-TAG-ecommerce/"
					element={<Homepage></Homepage>}
				></Route>
				{/* Admin Routes */}
				<Route
					path="/React-TAG-ecommerce/admin"
					element={
						<AdminLayout
							childPage={<AdminHomepage></AdminHomepage>}
						></AdminLayout>
					}
				></Route>
				<Route
					path="/React-TAG-ecommerce/admin/user-admin"
					element={
						<AdminLayout
							childPage={<UserAdministration></UserAdministration>}
						></AdminLayout>
					}
				></Route>
				<Route
					path="/React-TAG-ecommerce/admin/product-admin"
					element={
						<AdminLayout
							childPage={<ProductAdministration></ProductAdministration>}
						></AdminLayout>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;

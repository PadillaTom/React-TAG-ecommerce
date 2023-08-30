import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { About, Homepage } from "./pages/_Website";
import { AdminLayout } from "./pages/_Admin";
import {
	AdminHomepage,
	ProductAdministration,
	UserAdministration,
} from "./pages/_Admin/pages";

function App() {
	return (
		<Router basename="/">
			<Routes>
				{/* Website Routes */}
				<Route path="/" element={<Homepage></Homepage>}></Route>
				<Route path="/about-us" element={<About></About>}></Route>

				{/* Admin Routes */}
				<Route
					path="/admin"
					element={
						<AdminLayout
							childPage={<AdminHomepage></AdminHomepage>}
						></AdminLayout>
					}
				></Route>
				<Route
					path="/admin/user-admin"
					element={
						<AdminLayout
							childPage={<UserAdministration></UserAdministration>}
						></AdminLayout>
					}
				></Route>
				<Route
					path="/admin/product-admin"
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

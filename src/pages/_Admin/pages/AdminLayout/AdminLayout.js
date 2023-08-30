import React from "react";
import { Navbar } from "../../components";

const AdminLayout = ({ childPage }) => {
	return (
		<div>
			<Navbar></Navbar>
			<div style={{ maringTop: "5rem" }}>{childPage}</div>
		</div>
	);
};

export default AdminLayout;

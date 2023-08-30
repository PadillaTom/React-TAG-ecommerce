import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			style={{
				width: "100%",
				height: "3.5rem",
				background: "lightgray",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0 5%",
			}}
		>
			<h2>Logo</h2>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-around",
					width: "25%",
				}}
			>
				<Link to="/admin">Admin Home</Link>
				<Link to="/admin/user-admin">Users</Link>
				<Link to="/admin/product-admin">Products</Link>
				<Link to="/">Website</Link>
			</ul>
		</nav>
	);
};

export default Navbar;

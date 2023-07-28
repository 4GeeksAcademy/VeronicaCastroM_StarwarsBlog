import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 w-0"><img className="img-fluid w-25 m-2" src="https://th.bing.com/th?id=OIP.0kf7TE4v2mas_qNT3No48AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" /></span>
			</Link>
				<div className="dropdown ml-auto">
					<button className="btn btn-warning dropdown-toggle m-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.favoriteItems.map((value, index)=>{
						return <li><a className="dropdown-item" key={index} href="#">{value} <button onClick={actions.deleteFavoriteItems(index)}><i class="fas fa-trash"></i></button></a></li>
					})}
					</ul>
				</div>

			
		</nav>
	);
};

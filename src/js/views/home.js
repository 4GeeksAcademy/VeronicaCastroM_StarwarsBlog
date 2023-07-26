import React,{useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "./Characters";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return(
	<div className="text-center mt-5">
	<Characters/>
	</div>
	)
};

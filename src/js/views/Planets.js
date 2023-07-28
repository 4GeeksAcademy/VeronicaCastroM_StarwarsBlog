import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';


const Planets = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div><h1 className='text-danger'>Planets</h1></div>
      <div className='d-flex justify-content-start container-fluid'>
        {store.planetsStarWars.map((value, index) => {
          return <div className="card w-25" key={index} style={{ height: "25%" }}>
            <img className="card-img-top" src={'https://starwars-visualguide.com/assets/img/planets/' + (index + 1) + '.jpg'} onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p className="card-text">Population: {value.population}</p>
              <p className="card-text">Terrain: {value.terrain}</p>
                <button className='btn btn-outline-primary'>Learn More</button>
              <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFavoriteItems(value.name)}}><i className="far fa-star"></i></button>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Planets
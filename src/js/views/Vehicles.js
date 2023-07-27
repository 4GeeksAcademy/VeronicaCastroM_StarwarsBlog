import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
        <div><h1>Vehicles</h1></div>
        <div className='d-flex justify-content-start container-fluid'>
        {store.vehiclesStarWars.map((value, index) => {
          return <div className="card w-25" style={{ height: "25%" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p class="card-text">Model: {value.model}</p>
              <p class="card-text">Passengers: {value.passengers}</p>
              <Link to={"/single/" + index}>
                <button className='btn btn-outline-primary'>Learn More</button>
              </Link>
            </div>
          </div>
        })}
      </div>
        </>
    )
}

export default Vehicles
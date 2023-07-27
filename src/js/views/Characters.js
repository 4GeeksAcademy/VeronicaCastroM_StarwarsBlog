import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Characters = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div><h1>Characters</h1></div>
      <div className='d-flex justify-content-start container-fluid'>
        {store.charactersStarWars.map((value, index) => {
          return <div className="card w-25" style={{ height: "25%" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{value.name}</h5>
              <p class="card-text">Hair Color: {value.hair_color}</p>
              <p class="card-text">Aye-Color: {value.eye_color}</p>
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

export default Characters
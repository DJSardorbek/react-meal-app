import React from 'react';
import {Link} from "react-router-dom";

function Meal(props) {
    const {idMeal, strMeal, strMealThumb} = props;
    return (
        <div key={idMeal} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn left'>Watch recipe</Link>
            </div>
        </div>
    );
}

export default Meal;
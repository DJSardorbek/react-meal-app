import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {getMealById} from "../api";
import Loader from "../components/Loader";

function Recipe() {
    const [isLoading, setIsLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);
    const [showRecipe, setShowRecipe] = useState(false);
    const {id} = useParams();
    const {goBack} = useHistory();
    useEffect(() => {
        getMealById(id).then((data) => {
            setRecipe(data.meals[0]);
            setIsLoading(false);
        });
    }, [])
    return (
        <>
            <button onClick={goBack} className='btn' style={{marginTop: '1.5rem'}} >Go Back</button>
            {isLoading ? <Loader/> :
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6><b>Category: </b>{recipe.strCategory}</h6>
                    {recipe.strArea ? <h6><b>Area: </b>{recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                    <button onClick={() => setShowRecipe(!showRecipe)} className='btn'>Show Recipe</button>

                    {showRecipe ? (
                        <table className='centred'>
                            <thead>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </thead>
                            <tbody>
                            {Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                            })}
                            </tbody>
                        </table>
                    ) : null}

                    {recipe.strYoutube ? (
                        <div className='row'>
                            <h5>Video Recipe</h5>
                            <iframe
                                frameBorder='0'
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen='true'
                                title={recipe.strMeal}
                            ></iframe>
                        </div>
                    ) : null}
                </div>
            }

        </>
    );
}

export default Recipe;
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getFilterCategory} from '../api';
import Loader from "../components/Loader";
import MealList from "../components/MealList";

function Category(props) {
    const category = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        getFilterCategory(category.name).then((data) => {
            setMeals(data.meals);
            setIsLoading(false);
        })
    }, [])
    return (
        <div className='category'>
            {isLoading ? <Loader/> : <MealList meals={meals}/>}
        </div>
    );
}

export default Category;
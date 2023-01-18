import React from 'react';
import {Link} from "react-router-dom";

function CategoryItem(props) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;
    return (
        <div key={idCategory} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{strCategory}</span>
                <p>{`${strCategoryDescription.slice(0,100)}...`}</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn left'>Watch category</Link>
            </div>
        </div>
    );
}

export default CategoryItem;
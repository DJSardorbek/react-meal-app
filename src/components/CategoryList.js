import React from 'react';
import CategoryItem from "./CategoryItem";

function CategoryList(props) {
    const {categories = []} = props;
    return (
        <div className='list'>
            {categories.length > 0 ? categories.map((category) => (
                <CategoryItem key={category.idCategory} {...category}/>
                )) :
                <h3>Nothing Found</h3>
            }
        </div>
    );
}

export default CategoryList;
import React, {useEffect, useState} from 'react';
import {getAllCategories, searchCategoryByName} from '../api'
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import {useHistory, useLocation} from "react-router-dom";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [catalog, setCatolog] = useState([]);
    const [filterCatalog, setFilterCatalog] = useState([]);
    const {push} = useHistory();
    const {pathname, search} = useLocation();

    const searchCategory = (str) => {
        setFilterCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())));
        push({pathname, search: `?search=${str}`});
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatolog(data.categories);
            setFilterCatalog(search ?
                data.categories.filter(item => item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase()))
                : data.categories);
            setIsLoading(false);
        })
    }, [search])
    return (
        <div className='home'>
            <Search searchCategory={searchCategory}/>
            {isLoading ? <Loader/> : <CategoryList categories={filterCatalog}/>}
        </div>
    );
}

export default Home;
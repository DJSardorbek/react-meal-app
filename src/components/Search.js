import React, {useState} from 'react';

function Search({searchCategory}) {
    const [value, setValue] = useState('');
    const handleKey = (e) => {
        if(e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        searchCategory(value);
    }
    return (
        <div className="input-field col s12 search">
            <input
                type="text"
                placeholder='Search'
                onKeyDown={handleKey}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleSubmit} className='btn'>Search</button>
        </div>
    );
}

export default Search;
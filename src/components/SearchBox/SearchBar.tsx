import * as React from 'react';

import './SearchBar.css';

interface Props {
    title: string;
    className?: string;
};

const BASE_CLASS = 'search-bar';

const SearchBar = (props: Props) => {

    const [searchText, updateSearchText] = React.useState('');

    const title = props.title;

    return (
        <div>
            <div className={`${BASE_CLASS}__title`}>{title}</div>
            <input
            className={`${BASE_CLASS}__input`}
            />
        </div>
    );
};


export default SearchBar;
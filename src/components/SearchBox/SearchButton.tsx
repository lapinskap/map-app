import * as React from 'react';

import './SearchButton.css';

interface Props {
    text: string;
    className?: string;
};

const BASE_CLASS = 'search-button';

const SearchButton = (props: Props) => {

    const text = props.text;

    return (
        <div>
            <div className={`${BASE_CLASS}__text`}>{text}</div>
        </div>
    );
};


export default SearchButton;
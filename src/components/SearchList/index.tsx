import * as React from 'react';

import './SearchList.css';

interface Props {
    text: string;
    className?: string;
};

const BASE_CLASS = 'search-list';

const SearchList = (props: Props) => {

    const text = props.text;

    return (
        <div>
            <div className={`${BASE_CLASS}__text`}>{text}</div>
        </div>
    );
};


export default SearchList;
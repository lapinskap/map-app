import * as React from 'react';

interface Props {
    text: string;
};

const SearchBox = (props: Props) => {

    return (
        <div>
            {props.text}
        </div>
    );
};


export default SearchBox;
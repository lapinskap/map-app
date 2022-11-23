import * as React from 'react';

import './Map.css';

interface Props {
    text: string;
};

const Map = (props: Props) => {

    return (
        <div>
            {props.text}
        </div>
    );
};


export default Map;
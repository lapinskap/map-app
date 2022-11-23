import * as React from 'react';

import './InfoBox.css';

interface Props {
    title: string;
    text: string;
    className?: string;
};

const BASE_CLASS = 'info-box';

const InfoBox = (props: Props) => {

    const title = props.title;
    const text = props.text;

    return (
        <div>
            <div className={`${BASE_CLASS}__title`}>{title}</div>
            <div className={`${BASE_CLASS}__text`}>{text}</div>
        </div>
    );
};


export default InfoBox;
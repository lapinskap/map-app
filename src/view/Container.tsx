import * as React from 'react';
import SearchBox from '../components/SearchBox/index';
import SearchList from '../components/SearchBox/index';
import InfoBox from '../components/InfoBox/index';
import Map from '../components/Map/index';

import './Container.css';


const Container = () => {

    return (
        <div className="root">
            <SearchList text="" />
            <div>
                <div>
                    <Map text="" />
                    <InfoBox title="" text="" />
                </div>
                <SearchBox text="" />
                <div>
                    <Map text="" />
                    <InfoBox title="" text="" />
                </div>
            </div>
        </div>
    );
};


export default Container;
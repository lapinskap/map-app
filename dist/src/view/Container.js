import * as React from 'react';
import SearchBox from '../components/SearchBox/index';
import SearchList from '../components/SearchBox/index';
import InfoBox from '../components/InfoBox/index';
import Map from '../components/Map/index';
import './Container.scss';
var Container = function () {
    return (React.createElement("div", { className: "root" },
        React.createElement(SearchList, { text: "" }),
        React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Map, { text: "" }),
                React.createElement(InfoBox, { title: "", text: "" })),
            React.createElement(SearchBox, { text: "" }),
            React.createElement("div", null,
                React.createElement(Map, { text: "" }),
                React.createElement(InfoBox, { title: "", text: "" })))));
};
export default Container;

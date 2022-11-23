import * as React from 'react';
import './SearchBar.css';
;
var BASE_CLASS = 'search-bar';
var SearchBar = function (props) {
    var _a = React.useState(''), searchText = _a[0], updateSearchText = _a[1];
    var title = props.title;
    return (React.createElement("div", null,
        React.createElement("div", { className: "".concat(BASE_CLASS, "__title") }, title),
        React.createElement("input", { className: "".concat(BASE_CLASS, "__input") })));
};
export default SearchBar;

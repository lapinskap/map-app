import * as React from 'react';
import './SearchButton.css';
;
var BASE_CLASS = 'search-button';
var SearchButton = function (props) {
    var text = props.text;
    return (React.createElement("div", null,
        React.createElement("div", { className: "".concat(BASE_CLASS, "__text") }, text)));
};
export default SearchButton;

import * as React from 'react';
import './SearchList.css';
;
var BASE_CLASS = 'search-list';
var SearchList = function (props) {
    var text = props.text;
    return (React.createElement("div", null,
        React.createElement("div", { className: "".concat(BASE_CLASS, "__text") }, text)));
};
export default SearchList;

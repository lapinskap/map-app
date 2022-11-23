import * as React from 'react';
import './InfoBox.css';
;
var BASE_CLASS = 'info-box';
var InfoBox = function (props) {
    var title = props.title;
    var text = props.text;
    return (React.createElement("div", null,
        React.createElement("div", { className: "".concat(BASE_CLASS, "__title") }, title),
        React.createElement("div", { className: "".concat(BASE_CLASS, "__text") }, text)));
};
export default InfoBox;

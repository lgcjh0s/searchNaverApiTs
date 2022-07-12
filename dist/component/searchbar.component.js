"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var recoil_1 = require("recoil");
var app_1 = require("../app");
var SearchBar = function () {
    //ADD :: Start
    var _a = (0, recoil_1.useRecoilState)(app_1.searchKeyword), keyword = _a[0], setKeyword = _a[1];
    var search = function () {
        var searchKeyword = document.querySelector('#keyword').value;
        setKeyword(searchKeyword);
    };
    //ADD :: End
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "header" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "iptSearch", id: "keyword" }, void 0), (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: "search", onClick: search }, { children: (0, jsx_runtime_1.jsx)("span", { children: "\uAC80\uC0C9" }, void 0) }), void 0)] }), void 0));
};
exports.default = SearchBar;

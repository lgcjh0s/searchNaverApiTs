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
var Tab = function (_a) {
    var tabId = _a.tabId, tabName = _a.tabName;
    var _b = (0, recoil_1.useRecoilState)(app_1.selectedTabId), setTabId = _b[0], setSelTabId = _b[1];
    var changeTab = function (id) {
        setSelTabId(id);
    };
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#", id: tabId, className: setTabId === tabId ? 'on' : '', onClick: function () { return changeTab(tabId); } }, { children: (0, jsx_runtime_1.jsx)("span", { children: tabName }, void 0) }), void 0) }, void 0));
};
var TabList = function () {
    var tabList = [
        { tabName: '뉴스', tabId: 'news' },
        { tabName: '도서', tabId: 'book' }
    ];
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "tabBox" }, { children: (0, jsx_runtime_1.jsx)("ul", __assign({ className: "tabList" }, { children: tabList.map(function (v, inx) {
                return (0, jsx_runtime_1.jsx)(Tab, __assign({}, v), inx);
            }) }), void 0) }), void 0));
};
exports.default = TabList;

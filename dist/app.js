"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchKeyword = exports.selectedTabId = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var recoil_1 = require("recoil");
var listview_component_1 = __importDefault(require("./component/listview.component"));
var searchbar_component_1 = __importDefault(require("./component/searchbar.component"));
var tablist_component_1 = __importDefault(require("./component/tablist.component"));
exports.selectedTabId = (0, recoil_1.atom)({
    key: 'tabId',
    default: 'news'
});
exports.searchKeyword = (0, recoil_1.atom)({
    key: 'keyword',
    default: '코로나'
});
var App = function () { return ((0, jsx_runtime_1.jsx)(recoil_1.RecoilRoot, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(searchbar_component_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(listview_component_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(tablist_component_1.default, {}, void 0)] }, void 0) }, void 0)); };
exports.default = App;

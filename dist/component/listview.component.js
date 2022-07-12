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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var moment_1 = __importDefault(require("moment"));
var react_1 = require("react");
var recoil_1 = require("recoil");
var app_1 = require("../app");
var NewsRow = function (_a) {
    var title = _a.title, pubDate = _a.pubDate, description = _a.description;
    return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "title" }, { children: (0, jsx_runtime_1.jsx)("a", { href: "#", dangerouslySetInnerHTML: { __html: title } }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "cont" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "date" }, { children: (0, moment_1.default)(pubDate).format('YYYY.MM.DD HH:mm') }), void 0), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: description } }, void 0)] }), void 0)] }, void 0));
};
var BookRow = function (_a) {
    var image = _a.image, title = _a.title, author = _a.author, description = _a.description;
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("a", __assign({ href: "#", className: "bookRow" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "bookImg" }, { children: (0, jsx_runtime_1.jsx)("img", { src: image }, void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "bookDesc" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "title", dangerouslySetInnerHTML: { __html: title } }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "cont" }, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "author" }, { children: author }), void 0), (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: description } }, void 0)] }), void 0)] }), void 0)] }), void 0) }, void 0));
};
var ListView = function () {
    var _a = (0, react_1.useState)(null), articles = _a[0], setArticles = _a[1];
    var _b = (0, recoil_1.useRecoilState)(app_1.selectedTabId), selTabId = _b[0], setSelTabId = _b[1];
    var _c = (0, recoil_1.useRecoilState)(app_1.searchKeyword), keyword = _c[0], setKeyword = _c[1];
    var search = function () {
        var searchKeyword = document.querySelector('#keyword').value;
        setKeyword(searchKeyword);
    };
    var apiGet = function (type, param) { return __awaiter(void 0, void 0, void 0, function () {
        var apiUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Naver-Client-Id': 'z73CVZ80v0SYgrwfwbfz',
                                'X-Naver-Client-Secret': 'dFoN8oBtKB'
                            }
                        })
                            .then(function (resp) { return resp.json(); })
                            .then(function (resp) {
                            var typedResp = __assign(__assign({}, resp), { type: type });
                            setArticles(typedResp);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        apiGet(selTabId, keyword);
    }, [selTabId, keyword]);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "listArea" }, { children: (0, jsx_runtime_1.jsx)("ul", __assign({ className: "listView" }, { children: articles &&
                articles.items &&
                ((articles.type === 'news') ?
                    articles.items.map(function (v, inx) {
                        return (0, jsx_runtime_1.jsx)(NewsRow, __assign({}, v), inx);
                    })
                    : (articles.type === 'book') ?
                        articles.items.map(function (v, inx) {
                            return (0, jsx_runtime_1.jsx)(BookRow, __assign({}, v), inx);
                        })
                        : '') }), void 0) }), void 0));
};
exports.default = ListView;

import { atom, RecoilRoot, RecoilState } from "recoil";
import ListView from "./component/listview.component";
import SearchBar from "./component/searchbar.component";
import TabList from "./component/tablist.component";

export const selectedTabId: RecoilState<string> = atom({
    key: 'tabId',
    default: 'news'
});
export const searchKeyword: RecoilState<string> = atom({
    key: 'keyword',
    default: '코로나'
});

const App = () => (
    <RecoilRoot>
        <div>
            <SearchBar />
            <ListView />
            <TabList />
        </div>
    </RecoilRoot>
)

export default App;
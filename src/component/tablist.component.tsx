import { useRecoilState } from "recoil";
import { selectedTabId } from "../app";
import { ITabInfo } from "../interface/tabinfo.interface";

const Tab = ({ tabId, tabName }: ITabInfo) => {

    const [setTabId, setSelTabId] = useRecoilState<string>(selectedTabId);

    const changeTab = (id: string) => {
        setSelTabId(id);
    };

    return (
        <li>
            <a href="#"
                id={tabId}
                className={setTabId === tabId ? 'on' : ''}
                onClick={() => changeTab(tabId)}>
                <span>{tabName}</span>
            </a>
        </li>
    )
};

const TabList = () => {
    const tabList: ITabInfo[] = [
        {tabName: '뉴스', tabId: 'news'},
        {tabName: '도서', tabId: 'book'}
    ];

    return (
        <div className="tabBox">
            <ul className="tabList">
            {
                tabList.map((v: ITabInfo, inx: number) => {
                    return <Tab key={inx} {...v} />
                })
            }
            </ul>
        </div>
    )
};

export default TabList;
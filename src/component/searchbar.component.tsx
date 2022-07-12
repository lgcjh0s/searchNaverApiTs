import { useRecoilState } from "recoil";
import { searchKeyword } from "../app";

const SearchBar = () => {
	//ADD :: Start
    const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);

    const search = () => {
        const searchKeyword: string = (document.querySelector('#keyword') as HTMLInputElement).value;
        setKeyword(searchKeyword);
    };
    //ADD :: End

    return (
        <div className="header">
            <input type="text" className="iptSearch" id="keyword" />
            {/* onClick 추가 */}
            <button type="button" className="search" onClick={search}>
                <span>검색</span>
            </button>
        </div>
    )
};

export default SearchBar;
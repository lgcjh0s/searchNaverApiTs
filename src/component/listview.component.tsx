import moment from "moment";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchKeyword, selectedTabId } from "../app";
import { IBookData, IHttpResp, INewsData } from "../interface/apidata.interface";

const NewsRow = ({ title, pubDate, description }: INewsData) => {  
    return (
        <li>
            <div className="title">
                <a href="#" dangerouslySetInnerHTML={{__html: title}} />
            </div>
            <div className="cont">
                <span className="date">{moment(pubDate).format('YYYY.MM.DD HH:mm')}</span>
                <span dangerouslySetInnerHTML={{__html: description}} />
            </div>
        </li>
    )
};

const BookRow = ({ image, title, author, description }: IBookData) => {
    return (
        <li>
            <a href="#" className="bookRow">
                <div className="bookImg">
                    <img src={image} />
                </div>
                <div className="bookDesc">
                    <div className="title" dangerouslySetInnerHTML={{__html: title}} />
                    <div className="cont">
                        <span className="author">{author}</span>
                        <span dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                </div>
            </a>
        </li>
    );
};

const ListView = () => {
    const [articles, setArticles] = useState<IHttpResp | null>(null);
    const [selTabId, setSelTabId] = useRecoilState<string>(selectedTabId);
    const [keyword, setKeyword] = useRecoilState<string>(searchKeyword);

    const search = () => {
        const searchKeyword: string = (document.querySelector('#keyword') as HTMLInputElement).value;
        setKeyword(searchKeyword);
    };

    const apiGet = async(type: string, param: string) => {
        const CLINET_ID: string = '';
        const CLIENT_SECRET: string = '';
        
        const apiUrl: string = 'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
        await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Naver-Client-Id': CLINET_ID,
                'X-Naver-Client-Secret': CLIENT_SECRET
            }
        })
        .then((resp: Response) => resp.json())
        .then((resp: IHttpResp) => {
            const typedResp: IHttpResp = {
                ...resp,
                type: type
            }
            setArticles(typedResp);
        });
    };

    useEffect(() => {
        apiGet(selTabId, keyword);
    }, [selTabId, keyword]);

    return (
        <div className="listArea">
            <ul className="listView">
            {
                articles &&
                articles.items &&
                (
                    (articles.type === 'news') ?
                        (articles.items as INewsData[]).map((v: INewsData, inx: number) => {
                            return <NewsRow key={inx} {...v} />
                        })
                    : (articles.type === 'book') ?
                        (articles.items as IBookData[]).map((v: IBookData, inx: number) => {
                            return <BookRow key={inx} {...v} />
                        })
                    : ''
                )
            }
            </ul>
        </div>
    );
};

export default ListView;
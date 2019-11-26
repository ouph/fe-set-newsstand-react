import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import MyNewsTitle from "./MyNewsTitle.jsx";
import ListUi from "./ListUi.jsx";
import CardUi from "./CardUi.jsx";

const ContentsWrap = styled.div`
  width: 970px;
  border: 1px solid #d4d4d4;
`;

const DataContext = React.createContext({});

function App() {
  const numPerListPage = 6;
  const numPerCardPage = 18;

  const [limit, setLimit] = useState(numPerListPage);
  const [offset, setOffset] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [newsContents, setNewsContents] = useState({});
  const [uiType, setUiType] = useState('LIST');

  const getNews = async () => {
    const res = await fetch("./newsstand-news-json.json");
	  return res.json();
  };

  useEffect(() => {
    getNews().then(news => {
      const paging = offset <= limit ? offset : parseInt(offset / limit);
      const data = news.slice(paging * limit, (paging + 1) * limit);
      if(data.length === 0) return;

      setNewsData(data);
      setNewsContents(data[0]);
    });
  }, [offset, limit]);

  const prevHandler = () => {
    const val = offset === 0 ? 0 : offset - 1;
    setOffset(val);
  };

  const nextHandler = () => {
    const val = offset + 1;
    setOffset(val);
  };

  const clickNewsName = (id) => {
    setNewsContents(newsData.find(v => v.id === id));
  };

  const changeUiHandler = (type) => {
    setLimit(type === 'LIST' ? numPerListPage : numPerCardPage);
    setOffset(0);
    setUiType(type);
  };

  return (
    <ContentsWrap>
    <DataContext.Provider value={{newsData, newsContents}}>
      <MyNewsTitle prevHandler={prevHandler} nextHandler={nextHandler} changeUiHandler={changeUiHandler} />
      {uiType === 'LIST' ?
        <ListUi clickHandler={clickNewsName} /> : <CardUi />
      }
    </DataContext.Provider>
    </ContentsWrap>
  )
}
export {DataContext};
ReactDom.render(<App/>, document.querySelector("#root"));
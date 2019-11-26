import React, {useState, useEffect, useReducer} from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import MyNewsTitle from "./MyNewsTitle.jsx";
import ListUi from "./ListUi.jsx";
import CardUi from "./CardUi.jsx";
import {initState, pageReducer} from './pageReducer';

const ContentsWrap = styled.div`
  width: 970px;
  border: 1px solid #d4d4d4;
`;

const DataContext = React.createContext({});

function App() {
  const [newsData, setNewsData] = useState([]);
  const [newsContents, setNewsContents] = useState({});
  const [state, dispatch] = useReducer(pageReducer, initState);

  const getNews = async () => {
    const res = await fetch("./newsstand-news-json.json");
	  return res.json();
  };

  useEffect(() => {
    getNews().then(news => {
      const {offset, limit} = {...state};
      const paging = offset <= limit ? offset : parseInt(offset / limit);
      const data = news.slice(paging * limit, (paging + 1) * limit);
      if(data.length === 0) return;

      setNewsData(data);
      setNewsContents(data[0]);
    });
  }, [state.offset, state.limit]);

  const clickNewsName = (id) => {
    setNewsContents(newsData.find(v => v.id === id));
  };

  return (
    <ContentsWrap>
    <DataContext.Provider value={{newsData, newsContents}}>
      <MyNewsTitle dispatch={dispatch} />
      {state.type === 'LIST' ? <ListUi clickHandler={clickNewsName} /> : <CardUi />}
    </DataContext.Provider>
    </ContentsWrap>
  )
}
export {DataContext};
ReactDom.render(<App/>, document.querySelector("#root"));
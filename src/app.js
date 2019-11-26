import React, {useState, useEffect, useReducer} from 'react';
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

const numPerListPage = 6;
const numPerCardPage = 18;
const initState = {
  limit: numPerListPage,
  offset: 0,
  type: 'LIST'
};
const pageReducer = (state, {type}) => {
  const state_copy = {...state};
  switch (type) {
    case 'List':
      state_copy.type = 'LIST';
      state_copy.limit = numPerListPage;
      state_copy.offset = 0;
      return state_copy;
    case 'Card':
      state_copy.type = 'CARD';
      state_copy.limit = numPerCardPage;
      state_copy.offset = 0;
      return state_copy;
    case 'goToNext':
      state_copy.offset = state_copy.offset + 1;
      return state_copy;
    case 'goToPrev':
      state_copy.offset = state_copy.offset === 0 ? 0 : state_copy.offset - 1;
      return state_copy;
    case 'init':
      return initState;
    default:
      break;
  }
};

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
      const offset = state.offset;
      const limit = state.limit;
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
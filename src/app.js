import React, {useEffect, useReducer} from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import MyNewsTitle from "./MyNewsTitle.jsx";
import ListUI from "./ListUI.jsx";
import CardUI from "./CardUI.jsx";
import {initState, pageReducer} from './pageReducer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const ContentsWrap = styled.div`
  width: 970px;
  border: 1px solid #d4d4d4;
`;

const DataContext = React.createContext({});

function App() {
  const [state, dispatch] = useReducer(pageReducer, initState);

  const getNews = async () => {
    const res = await fetch("/src/newsstand-news-json.json");
	  return res.json();
  };

  useEffect(() => {
    getNews().then(news => {
      // FIXME MY메뉴일때는 구독한 항목만 보여야할거 같은데...
      dispatch({type: 'setNews', payload: news});
    });
  }, [state.offset, state.limit]);

  const clickNewsName = (id) => {
    dispatch({type: 'getNewsContents', payload: id});
  };

  return (
    <Router>
      <ContentsWrap>
        <DataContext.Provider value={{state, dispatch}}>
          <MyNewsTitle />
          <Route exact path="/src/app.html" render={() => <ListUI clickHandler={clickNewsName} />}/>
          <Route path="/src/app.html/Card"> <CardUI /> </Route>
        </DataContext.Provider>
      </ContentsWrap>
    </Router>
  )
}
export {DataContext};
ReactDom.render(<App/>, document.querySelector("#root"));
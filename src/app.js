import React, {useEffect, useReducer} from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import MyNewsTitle from "./component/MyNewsTitle.jsx";
import ListUI from "./component/List/ListUI.jsx";
import CardUI from "./component/Card/CardUI.jsx";
import {DataContext, initState, pageReducer} from './pageReducer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EmptyPage from "./component/EmptyPage.jsx";

const ContentsWrap = styled.div`
  width: 970px;
  border: 1px solid #d4d4d4;
`;

function App() {
  const [state, dispatch] = useReducer(pageReducer, initState);

  const getNews = async () => {
    const res = await fetch("/src/newsstand-news-json.json");
	  return res.json();
  };

  useEffect(() => {
    getNews().then(news => {
      dispatch({type: 'setOriginData', payload: news});
      dispatch({type: 'setNews'});
    });
  }, []);

  return (
    <Router>
      <ContentsWrap>
        <DataContext.Provider value={{state, dispatch}}>
          <MyNewsTitle />
          {state.menuType === 'my' && state.subscribeCnt === 0 ?
            <EmptyPage />
            :
            <>
              <Route exact path="/src/app.html"><ListUI /></Route>
              <Route path="/src/app.html/Card"><CardUI /></Route>
            </>
          }
        </DataContext.Provider>
      </ContentsWrap>
    </Router>
  )
}
ReactDom.render(<App/>, document.querySelector("#root"));
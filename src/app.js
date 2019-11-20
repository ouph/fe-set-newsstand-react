import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import styled from "styled-components";
import MyNewsTitle from "./MyNewsTitle";
import ListUi from "./ListUi";
import CardUi from "./CardUi";

const ContentsWrap = styled.div`
  width: 970px;
  border: 1px solid #d4d4d4;
`;

function App() {
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [newsContents, setNewsContents] = useState({});
  const [uiType, setUiType] = useState('LIST');

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186" +
      "afcb295bbdde20077ff/newsstand-news-json.js")
      .then(res => res.json())
      .then(resJson => {
        const paging = offset <= limit ? offset : parseInt(offset / limit);
        const data = resJson.slice(paging * limit, (paging + 1) * limit);
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
    setLimit(type === 'LIST' ? 6 : 18);
    setOffset(0);
    setUiType(type);
  };

  return (
    <ContentsWrap>
      <MyNewsTitle prevHandler={prevHandler} nextHandler={nextHandler} changeUiHandler={changeUiHandler} />
      {uiType === 'LIST' ?
        <ListUi newsData={newsData}
                clickHandler={clickNewsName}
                selectedItemId={newsContents.id}
                newsContents={newsContents}
        />
        :
        <CardUi newsData={newsData} />
      }
    </ContentsWrap>
  )
}

ReactDom.render(<App/>, document.querySelector("#root"));
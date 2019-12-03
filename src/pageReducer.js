import React from "react";
import {Map} from 'immutable';

const numPerListPage = 6;
const numPerCardPage = 18;
const initState = {
  limit: numPerListPage,
  offset: 0,
  type: 'List',
  originNewsData: [],
  newsData: [],
  newsContents: {}
};

const setNewsInCurrentPage = (state) => {
  const {limit, offset, originNewsData} = {...state.toJS()};
  const paging = offset <= limit ? offset : parseInt(offset / limit);
  const data = originNewsData.slice(paging * limit, (paging + 1) * limit);
  return state.set('newsData', data).set('newsContents', data[0]);
};

const toggleSubscribe = (state) => {
  return state.set('originNewsData', state.get('originNewsData').filter(v => {
      if(v.id === payload) {
        v.subscribe = !v.subscribe;
      }
      return v;
    }));
};

const pageReducer = (state, {type, payload}) => {
  let state_copy = Map({...state});
  const offset = state_copy.get('offset');

  switch (type) {
    case 'setOriginData':
      state_copy = state_copy.set('originNewsData', payload);
      return state_copy.toJS();
    case 'setNews':
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'getNewsContents':
      state_copy = state_copy.set('newsContents', state_copy.get('newsData').find(v => v.id === payload));
      return state_copy.toJS();
    case 'List':
      state_copy = state_copy.set('type', type).set('limit', numPerListPage,).set('offset', 0);
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'Card':
      state_copy = state_copy.set('type', type).set('limit', numPerCardPage,).set('offset', 0);
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'goToNext':
      // 마지막 페이지인지 체크
      const newOffset = offset + 1;
      const limit = state_copy.get('limit');
      const dataSize = state_copy.get('originNewsData').length;
      if(dataSize / (limit * offset) < newOffset) return state_copy.toJS();

      state_copy = state_copy.set('offset', newOffset);
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'goToPrev':
      state_copy = state_copy.set('offset', offset === 0 ? 0 : offset - 1);
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'changeSubscribe':
      state_copy = toggleSubscribe(state_copy);
      state_copy = setNewsInCurrentPage(state_copy);
      return state_copy.toJS();
    case 'init':
      return initState;
    default:
      break;
  }
};

const DataContext = React.createContext({});
export {initState, pageReducer, DataContext};
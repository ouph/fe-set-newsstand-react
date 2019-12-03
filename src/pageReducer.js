import React from "react";
import {Map} from 'immutable';

const numPerListPage = 6;
const numPerCardPage = 18;
const initState = {
  limit: numPerListPage,
  offset: 0,
  type: 'list',
  originNewsData: [],
  newsData: [],
  newsContents: {},
  menuType: 'my'
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

const changeUI = (state, type) => {
  const limit = type === 'list' ? numPerListPage : numPerCardPage;
  const newState = state.set('type', type).set('limit', limit).set('offset', 0);
  return setNewsInCurrentPage(newState);
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
    case 'changeUI':
      return changeUI(state_copy, payload).toJS();
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
    case 'changeMenuType':
      state_copy = state_copy.set('menuType', payload);
      return changeUI(state_copy, payload === 'my' ? 'list' : 'card').toJS();
    case 'init':
      return initState;
    default:
      break;
  }
};

const DataContext = React.createContext({});
export {initState, pageReducer, DataContext};
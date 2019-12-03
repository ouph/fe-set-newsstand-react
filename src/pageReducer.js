import {Map} from 'immutable';

const numPerListPage = 6;
const numPerCardPage = 18;
const initState = {
  limit: numPerListPage,
  offset: 0,
  type: 'List',
  newsData: [],
  newsContents: {}
};
const pageReducer = (state, {type, payload}) => {
  const state_copy = Map({...state});
  const offset = state_copy.get('offset');
  switch (type) {
    case 'setNews':
      const limit = state_copy.get('limit');
      const paging = offset <= limit ? offset : parseInt(offset / limit);
      const data = payload.slice(paging * limit, (paging + 1) * limit);
      return state_copy.merge({
        'newsData': data,
        'newsContents': data[0]
      }).toJS();
    case 'getNewsContents':
      return state_copy.set('newsContents', state_copy.get('newsData').find(v => v.id === payload)).toJS();
    case 'List':
      return state_copy.merge({
        'type': type,
        'limit': numPerListPage,
        'offset': 0
      }).toJS();
    case 'Card':
      return state_copy.merge({
        'type': type,
        'limit': numPerCardPage,
        'offset': 0
      }).toJS();
    case 'goToNext':
      // FIXME 마지막 페이지인지 아닌지 판별
      return state_copy.set('offset', offset + 1).toJS();
    case 'goToPrev':
      return state_copy.set('offset', offset === 0 ? 0 : offset - 1).toJS();
    case 'init':
      return initState;
    default:
      break;
  }
};

export {initState, pageReducer};
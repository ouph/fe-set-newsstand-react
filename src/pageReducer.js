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

export {initState, pageReducer};
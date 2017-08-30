const feeds = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FEEDS':
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default feeds;

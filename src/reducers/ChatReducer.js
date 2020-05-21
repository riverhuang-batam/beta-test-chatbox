const initialState = {
  RecentChatContacts: [],
  DetailChatRecentContact: {},
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_CHAT_CONTACT":
      return {
        ...state,
        RecentChatContacts: [action.payload, ...state.RecentChatContacts],
      };
    case "SHOW_DETAIL_RECENT_CHAT":
      return { ...state, DetailChatRecentContact: action.payload };
    default:
      return state;
  }
};

export default ChatReducer;

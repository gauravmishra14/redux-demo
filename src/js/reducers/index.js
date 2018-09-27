import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case REMOVE_ARTICLE:
      	const newState =  state.articles.filter(article => {
      	 	if(action.payload !== article.id) {
      	 		return article;
      	 	}
      	 }) 	
      return { ...state, articles: newState };
    default:
      return state;
  }
};
export default rootReducer;
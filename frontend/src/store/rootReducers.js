import articleReducer from "./Reducers/articleReducer";
import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import dislikelikeReducer from "./Reducers/dislikelikeReducer";
import homeReducer from "./Reducers/homeReducer";
import tagReducer from "./Reducers/tagReducer";


const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    tag: tagReducer,
    article: articleReducer,
    home: homeReducer,
    dilikelike: dislikelikeReducer
}

export default rootReducer;
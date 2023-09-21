import articleReducer from "./Reducers/articleReducer";
import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import tagReducer from "./Reducers/tagReducer";


const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    tag: tagReducer,
    article: articleReducer
}

export default rootReducer;
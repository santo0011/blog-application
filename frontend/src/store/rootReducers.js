import articleReducer from "./Reducers/articleReducer";
import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import homeReducer from "./Reducers/homeReducer";
import tagReducer from "./Reducers/tagReducer";


const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    tag: tagReducer,
    article: articleReducer,
    home: homeReducer
}

export default rootReducer;
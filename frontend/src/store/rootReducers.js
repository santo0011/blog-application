import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import tagReducer from "./Reducers/tagReducer";


const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    tag: tagReducer
}

export default rootReducer;
import AuthReducer from './authReducer';
import DesignReducer from './designReducer';
import{combineReducers} from 'redux';

const MainReducer = combineReducers({
    auth:AuthReducer,
    design: DesignReducer
}) 

export default MainReducer;
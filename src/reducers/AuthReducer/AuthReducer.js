import { actionTypes } from '../../constants/actionTypes';

const initialState = {
    user: [],
    synced: false

}

const AuthReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        // case actionTypes.ADD_ITEM:
        //     return addNewItem(state, action);
        // case actionTypes.REMOVE_ITEM:
        //     return deleteNewItem(state, action);
        default:
            return state;
    }
};


export default AuthReducer;

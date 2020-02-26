import * as actionTypes from './actions';

const initialState = {
    isHome: true,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ROUTER:
            return {
                ...state,
               isHome:!status.isHome,
            };
        case "A":
            return {};
        default: 
        return state;
    }
    return state;
}

export default reducer;
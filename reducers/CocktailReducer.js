import {ACT_LOAD_COCKTAILS} from '../actions/ActionTypes';

const initialState = {
    cocktails: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case ACT_LOAD_COCKTAILS:
            return Object.assign({}, state, { cocktails: action.props })
        default:
            return state
    }

}

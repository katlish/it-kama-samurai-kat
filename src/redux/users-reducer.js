const SET_USERS = "SET_USERS";
const SET_IN_PROGRESS = "SET_IN_PROGRESS";

const initState = {
    users: [],
    inProgress: false
}

const usersReducer = (state = initState, action) => {
    switch(action.type){
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_IN_PROGRESS:
            return {
                ...state,
                inProgress: action.inProgress
            }
        default:
            return state;
    }
}

//TODO: these are action creators
export const setUsers = (users) => {
    console.log("in setUsers");
    return {type: SET_USERS, users }
}

export const setInProgress = (inProgress) => {
    console.log("in setInProgress");
    return {type: SET_IN_PROGRESS, inProgress }
}

export default usersReducer;
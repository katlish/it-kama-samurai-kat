const TEST_PROFILE_ACTION = "TEST_PROFILE_ACTION";

const initState = {
    profileTest: ""
}

const profileReducer = (state = initState, action) => {
    switch(action.type){
        case TEST_PROFILE_ACTION:
            state.profileTest = "profileTest";
            return state;
        default:
            return state;
    }
}

export default profileReducer;
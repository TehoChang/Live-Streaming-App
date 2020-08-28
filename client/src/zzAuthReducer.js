const { SIGN_IN, SIGN_OUT } = require("./actions/types");
const { reduxForm } = require("redux-form");

const INITIAL_STATE={
    isSignedIn:true
}

 (state=INITIAL_STATE, action)=>{

    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn:true}
            
        case SIGN_OUT:
            return {...state, isSignedIn:false}
            
        default:
            return state;
    }
}


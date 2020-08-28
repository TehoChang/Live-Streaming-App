import React from 'react';
import {Link} from 'react-router-dom'
import  from 'redux'

const SIGN_IN='SIGN_IN'
const SIGN_OUT='SIGN_OUT'

export const signIn=()=>{
    return{
        type:SIGN_IN,
        payloade:{}
    }
}

export const signOut=()=>{
    return{
        type:SIGN_OUT,
        payload:{}
    }
}
   
export default connect(MapStateToProps,{singIn,singOut})(googleAUth)
import axios from "axios"

export const setComment=(comments)=>{
    return {
        type:'SET_COMMENT',
        payload:comments
    }
}

export const startSetComment=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            const comments=response.data
            dispatch(setComment(comments))
        })
    }
}
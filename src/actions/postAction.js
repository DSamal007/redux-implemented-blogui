import axios from 'axios'
export const setPost=(posts)=>{
    return {
        type:'SET_POST',
        payload:posts
    }
}

export const startSetPost=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const posts=response.data
            dispatch(setPost(posts))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
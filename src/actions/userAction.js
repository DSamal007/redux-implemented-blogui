import axios from 'axios'

export const setUsers=(users)=>{
    return {
        type:'SET_USER',
        payload:users
    }
}

export const startSetUsers=()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data
            dispatch(setUsers(users))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
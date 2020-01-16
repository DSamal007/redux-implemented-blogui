const commentInitialState=[]

const commentReducer=(state=commentInitialState,action)=>{
    switch(action.type){
        case 'SET_COMMENT':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default commentReducer
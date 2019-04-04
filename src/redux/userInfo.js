

const initalState = {
    id : '',
    firstname : '',
    lastname : '',
    email : '',
    role : '',
    status : true,
    isFetching : true,
    isAuthed : true

}

const userInfo = (state=initalState , action) =>{
    switch(action) {
        case 'case_1' :
        return {
            ...state,
            prop1 : action.value1    
        }
        case 'case_2' :
        return {
            ...state ,
            prop2: action.value2
        }
        default :
        return {
            ...state
        }
    }
}

export default userInfo ;
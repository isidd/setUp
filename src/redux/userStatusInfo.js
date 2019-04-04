

const initalState = {
    id : '123',
    firstname : 'Siddhartha',
    lastname : 'Pharasi',
    email : 'pharasi.siddhartha@gmail.com',
    role : 'dev',
    status : true,

}

const userStatusInfo = (state=initalState , action) =>{
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

export default userStatusInfo ;
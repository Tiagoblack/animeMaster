const initialState = {
    name:'',
    email:'',
    favorites:[]
}

export default (state = initialState, action)=>{

    switch (action.type) {
        case 'set_name':
            return {...state, name: action.payload.name}
        break;
    
       return state
    }

}
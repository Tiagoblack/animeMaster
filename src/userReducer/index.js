const initialState = {
    name:'',
    email:'',
    password:'',
    img:null
}

export default (state = initialState, action)=>{

    switch (action.type) {
        case 'set_name':
            return {...state, name: action.payload.name}
        break;
        case  'set_email':
            return { ...state, email: action.payload.email}
        break;
        case  'set_password':
            return { ...state, password: action.payload.password}
        break;
        case  'set_image':
            return { ...state, img: action.payload.img}
        break;

    }
    return state
}
const CONNEXION_STATUS= {
    connected:false
}
function connectionReducer (state = CONNEXION_STATUS, action ){
    switch(action.type)
    {
        case'CONNECTED':
        return{
            ...state,
            connected:true
        };
        case 'DISCONNECTED':
        return{
            ...state,
            connected:false
        };

        default:
        return state;

    }
}
export default connectionReducer

import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_SUCCESS,
    FETCH_CLIENTS_ERROR,
    SHOW_CLIENT_INFO,
    SEARCH_CLIENTS
} from '../constants'

const initialState = {
    searchText:'',
    clients:[],
    isLoading:false,
    activeClient:null
};

export function clients(state = initialState, action){
    switch (action.type){
        case FETCH_CLIENTS_REQUEST:
            return {
                ...state,
                isLoading:true,
                clients:[],
                filteredClients:[],
                searchText:''
            };
        case FETCH_CLIENTS_SUCCESS:
            return {
                isLoading:false,
                clients:action.clients
            };
        case FETCH_CLIENTS_ERROR:
            return {
                isLoading:false
            };
        case SHOW_CLIENT_INFO:
            return{
                ...state,
                activeClientId:action.clientId
            };
        case SEARCH_CLIENTS:
            return {
                ...state,
                searchText:action.searchText
            };
        default: return state;
    }
}
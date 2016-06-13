
import { FETCH_CLIENTS_ERROR, FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS,SHOW_CLIENT_INFO,SEARCH_CLIENTS } from '../constants'
import clientService from '../utils/clientService'

export function fetchClients(){
    return dispatch => {
        dispatch({
            type:FETCH_CLIENTS_REQUEST
        });
        clientService.getAllClients().then(clients=>{
            dispatch({
                type:FETCH_CLIENTS_SUCCESS,
                clients
            })
        })
    }
}

export function showClientInfo(id){
    return{
        type:SHOW_CLIENT_INFO,
        clientId:id
    }
}

export function searchClients(searchText){
    return {
        type:SEARCH_CLIENTS,
        searchText
    }
}

import React from 'react';
import { connect } from 'react-redux'
import { fetchClients, showClientInfo } from '../actions'
import { SearchInput, ClientList, ClientInfo } from '../components'
import {List, ListItem} from 'material-ui/List';
import { Subheader, Avatar, CircularProgress,Divider }  from 'material-ui';

class Clients extends React.Component {
    render() {
        return (
            <div>
                <div className="client-list">
                    <SearchInput />
                    <ClientList />
                </div>
                <ClientInfo />
            </div>
        )
    }
}

export { Clients }
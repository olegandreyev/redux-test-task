
import React from 'react'
import {List, ListItem} from 'material-ui/List'
import { CircularProgress, Subheader, Avatar } from 'material-ui'
import {connect} from 'react-redux'
import { fetchClients, showClientInfo } from '../../actions'

class ClientList extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchClients());
    }

    showClientInfo = (id) => {
        const { dispatch } = this.props;
        dispatch(showClientInfo(id));
    };

    render() {
        const { clients, isLoading, searchText} = this.props;
        let filteredClients = [];
        const deepSearch = (property) => {
            return typeof property === 'object'
                ? Object.keys(property).some(prop => deepSearch(property[prop]))
                : property.toString().toLowerCase().indexOf(searchText.toLowerCase()) != -1
        };
        filteredClients = searchText ? clients.filter(cli => deepSearch(cli)) : clients;
        const progressStyle = {
            display: 'block',
            margin: '30px auto'
        };
        return (
            <List>
                <Subheader>Recent clients</Subheader>
                {isLoading ? <CircularProgress style={progressStyle} size={.5}/> : null}
                {filteredClients.map(cli =>
                    <ListItem
                        key={cli.id}
                        onTouchTap={()=> this.showClientInfo(cli.id)}
                        primaryText={`${cli.firstName} ${cli.lastName}`}
                        secondaryText={cli.job.title}
                        leftAvatar={<Avatar src={cli.avatar} />}
                    />
                )}
            </List>
        )
    }
}

ClientList = connect(({clients}) => {
    return {
        isLoading: clients.isLoading,
        clients: clients.clients,
        searchText: clients.searchText
    }
})(ClientList);

export { ClientList }
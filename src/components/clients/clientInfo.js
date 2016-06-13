
import React from 'react'
import { Divider, Avatar } from 'material-ui';
import { connect } from 'react-redux'

class ClientInfo extends React.Component {
    render(){
        const { clients, activeClientId } = this.props;
        const showedClient = activeClientId ? clients.find(cli => cli.id === activeClientId) : null;
        return (
            <div className="client-info">
                {showedClient ?
                    <div className="client-info-photo">
                        <div className="client-info-photo-img">
                            <Avatar src={showedClient.avatar} size={128}/>
                        </div>
                        <div className="client-info-photo-info">
                            <div className="main">{showedClient.firstName +" "+showedClient.lastName}</div>
                            <div className="sub">
                                {showedClient.job.title +" - "+showedClient.job.company}
                            </div>
                            <Divider style={{marginBottom:10}}/>
                            <div className="sub">
                                {`age: ${showedClient.age} years`}
                            </div>
                            <div className="sub">
                                {`email: ${showedClient.contactInfo.email}`}
                            </div>
                            <div className="sub">
                                {`address: ${showedClient.address}`}
                            </div>
                            <Divider style={{marginBottom:10}}/>
                            <div className="sub">
                                {"site: "}<a href={showedClient.contactInfo.site}>
                                {showedClient.contactInfo.site}
                            </a>
                            </div>
                            <div className="sub">
                                {`phone: ${showedClient.contactInfo.phone}`}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

ClientInfo = connect(({clients}) => {
    return {
        clients: clients.clients,
        activeClientId: clients.activeClientId
    }
})(ClientInfo);

export {ClientInfo}
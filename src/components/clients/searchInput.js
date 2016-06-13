
import React from 'react';
import { TextField } from 'material-ui'
import { connect } from 'react-redux'
import { searchClients } from '../../actions'

class SearchInput extends React.Component{
    handleChange = (e) =>{
        const { dispatch } = this.props;
        dispatch(searchClients(e.target.value))
    };
    render(){
        const { searchText } = this.props;
        return(
            <TextField
                value={searchText}
                onChange={this.handleChange}
                hintText="James Kent"
                floatingLabelText="Search by clients"
                floatingLabelFixed={true}
            />
        )
    }
}

SearchInput = connect(({clients})=>{
    return {
        searchText:clients.searchText
    }
})(SearchInput);

export { SearchInput }
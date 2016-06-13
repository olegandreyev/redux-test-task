
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends React.Component{
    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <AppBar
                        title="Redux test task"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export {App}
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

    state ={
        drawerOpen: false,
        headerShow: false

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handlerScrolel);
    }

    handlerScrolel = () => {
       if(window.scrollY > 0) {
       this.setState({
        headerShow: true
       })
       }else {
        this.setState({
            headerShow: false
           })
       }
    }

    toggelDrawer = (value) => {
     this.setState({
         drawerOpen: value
     })
    }

    render() {
        return (
            <AppBar
            position="fixed"
            style={{ 
             backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
             boxShadow:'none',
             padding: '10px 0px',
             
            }}
            >
           <Toolbar>
               <div className="header-logo">
                   <div className="font_righteous header_logo_venue">The Venue</div>
                   <div className="header_logo_title">Musical Events</div>
               </div>

                <IconButton
                aria-label="Menu"
                color="inherit"
                style={{
                    marginLeft: 'auto' 
                }}
                onClick={() => this.toggelDrawer(true)}
                >
                <MenuIcon/>
                </IconButton>

             <SideDrawer
             open={this.state.drawerOpen}
             onClose={(value) => this.toggelDrawer(value)}
             />

           </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import Auxx from '../../hoc/Auxx/Auxx';
import classes from './Navbar.css';



class Navbar extends Component {

    state = {
        navItems: ['canvas', 'gallery']
    }

    render() {

        const items = this.state.navItems.map((item, i) => {
            return (
                <li key={i}>
                    <NavItem name={item}/>
                </li>
            )
        })

        return (
            <Auxx>
                <ul className={classes.Navbar}>
                    {items}
                </ul>
            </Auxx>
        )
    }
}

export default Navbar;
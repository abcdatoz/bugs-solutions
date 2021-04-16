import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'


class Header extends Component {
    render () {
        const { isAuthenticated, username } = this.props.auth

        const authLinks = (
            <ul>
                <li><Link  to="/">Pilot</Link></li>
                <li><Link  to="/holo">Holo</Link></li>                
                <li><a href='/bugs'>Bugs</a> </li>
                <li><a href='/solutions'>Solutions</a> </li>                

                <li>
                   
                    <span><strong>{username ? `Usuario:  ${username}` : ""}</strong></span>                   
                    
                    <a href="#" onClick={this.props.logout }>Salir</a>                    
                    
                    
                </li>   

            </ul>
        )


        const guestLinks = (
            <ul>
                 
                <li><Link  to="/register">Register</Link></li>
                <li><Link  to="/login">Login</Link></li>
                <li><Link  to="/">Pilot</Link></li>
                <li><Link  to="/holo">Holo</Link></li>                
                
            </ul>
        )



        return (
            <nav>
                {isAuthenticated 
                    ? authLinks
                    : guestLinks
                }
            </nav>
        )
    }
}

const mapState = state => ({ auth: state.auth })

export default connect(mapState, {logout}) (Header)

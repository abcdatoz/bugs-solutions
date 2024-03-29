import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'



/*
                <li><Link  to="/">Home</Link></li>
<li><Link  to="/holo">Salute</Link></li>                
<li><Link  to="/bugs">Bugs</Link></li>                                
<li><Link  to="/solutions">Solutions</Link></li>

*/

class Header extends Component {
    render () {
        const { isAuthenticated, username } = this.props.auth

        const authLinks = (
            <ul className="mainnav">                
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/bugs">Bugs</Link></li>                                                
                <li><Link  to="/beneficios">Benefits</Link></li>                                                
                <li><Link  to="/catPlatillos">Categorias</Link></li>                                                
                <li><Link  to="/platillos">Platillos</Link></li>                                                

                <li>
                    <span><strong>{username ? `Usuario:  ${username}` : ""}</strong></span>                                                           
                </li>   

                <li>
                   <a href="#" onClick={this.props.logout }>Salir</a>                    
               </li>   

            </ul>
        )


        const guestLinks = (
            <ul className="mainnav">                 
                <li><Link  to="/register">Register</Link></li>
                <li><Link  to="/login">Login</Link></li>
                <li><Link  to="/">Home</Link></li>
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

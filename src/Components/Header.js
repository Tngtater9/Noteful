import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render () {
        return (
        <div className="header">
            <Link to="/" onClick={()=>this.props.reset()}>
            <h1>Noteful</h1>
            </Link>
        </div>
    )}
}

export default Header
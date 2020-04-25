import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Header extends React.Component{
    render () {
        return (
        <header className="header">
            <Link to="/" onClick={()=>this.props.reset()}>
            <h1>Noteful</h1>
            </Link>
        </header>
    )}
}

Header.propTypes = {
    reset: PropTypes.func.isRequired
  };

export default Header
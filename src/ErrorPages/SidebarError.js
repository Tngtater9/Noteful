import React from 'react'

class SidebarError extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        hasError: false
      };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {      
      return (
        <div>
            <h2 className="error">Could not display folders</h2>
            <p>Please refresh the page to try again.</p>
        </div>
      )
    }
    return this.props.children;
  }
}

export default SidebarError
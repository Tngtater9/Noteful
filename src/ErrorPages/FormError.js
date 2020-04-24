import React from 'react'

class MainError extends React.Component{
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
        <div className="error">
            <h2>Could not display form</h2>
            <p>Please refresh the page to try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default MainError
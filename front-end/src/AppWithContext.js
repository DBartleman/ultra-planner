import React from 'react';
import appContext from './appContext';
import App from './App';

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      authToken: localStorage.getItem('authToken'),
      currentUserId: localStorage.getItem('currentUserId'),
      updateContext: this.updateContext,
    };
  }

  updateContext = (authToken, currentUserId) => {
    this.setState(
      { authToken, currentUserId },
      () => {
        localStorage.setItem('authToken', authToken)
        localStorage.setItem('currentUserId', currentUserId)
      },
    );
  }

  render() {
    return (
      <appContext.Provider value={this.state}>
        <App currentUserId={this.state.currentUserId} />
      </appContext.Provider>
    );
  }
}

export default AppWithContext;

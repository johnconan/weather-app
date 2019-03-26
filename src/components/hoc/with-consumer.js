import React from 'react';
import { Consumer } from '../context-api/context-api';

const withConsumer = () => (Wrapped) => {
  return props => {
    return (
      <Consumer>
        {
          (context) => {
            return (
              <Wrapped {...props} context={context}/>
            );
          }
        }
      </Consumer>
    );
  }
}

export default withConsumer;

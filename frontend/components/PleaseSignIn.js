import React from 'react';
import { Query } from 'react-apollo';

import { CURRENT_USER_QUERY } from './User';
import Signin from '../components/Signin';

const PleaseSignIn = (props) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data: { me }, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!me) {
        return (
          <div>
            <p>Please Sign In!</p>
            <Signin />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;

import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import SkillsAreaContainer from './components/SkillsAreaContainer';

import fetchGraphQL from './helpers/fetchGraphQL';

import { SKILL_AREA_QUERY } from './constants/gql/queryStrings/skillAreaQuery';

const { Suspense } = React;

const query = graphql`query AppQuery {
    backEnd {
      id
      name
      skills(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
}`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, query, {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props) {
  const data = usePreloadedQuery(query, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <p>{console.log(data)}</p>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
              <header>Skills</header>
              <SkillsAreaContainer/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
// Two-way bound, stateful component, aka container
//
//
// The newer `create-react-app` scripts give us a React Hooks setup by default, so we need to import the `useState` function to manage our state
import React, { useState } from 'react';
import './App.css';

import UserOutput from './UserOutput';
import UserInput from './UserInput';

// Note how App is a function as opposed to a child of the
// `React.Component` class. This is React Hooks style.
function App() {
    // `useState` returns a 2-element array
    // - an object containing the state
    // - a function to use to set the state
    const [ state, setState ] = useState({
        username: 'treefiddy',
    });

    // Define an event handler function to run if the `onChange` event
    // is fired in one of the underlying components
    const usernameChangedHandler = (event) => {
        // Note `setState` doesn't automatically merge our overrides
        // with the existing state, like in old React: it replaces it
        // altogether, so we'll have to do the merging ourselves
        // Or use multiple `useState`s for different state fields
        setState({ username: event.target.value });
    }

    // This is a stateful "container" component which owns and manages the state of the application.
    // It passes this state information to the underlying "dumb" components
    return (
        <div className="App">
            <UserOutput username={state.username} />
            {
                // Inject pieces of the container state as props into the components that require them
                // One of these props is `usernameChanged`, an event callback for the `onChange` event fired by the `UserInput` component
            }
            <UserInput username={state.username} usernameChanged={usernameChangedHandler} />

        </div>
    );
}

export default App;

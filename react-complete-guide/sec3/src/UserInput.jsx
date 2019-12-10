// Stateless, two-way bound component
//
// Even though `React.createElement` is not explicitly used by us here,
// webpack (Babel) will transpile our JSX to JS that will make use of it, hence why we need it here.
import React from 'react';

// We can import CSS straight into our JSX files.
// Webpack will automagically add it to the index.html as a <style> node at the top.
// We can also import Sass files if the `node-sass` module is installed
import './UserInput.scss';

// Always prefer functional, stateless containers
// State should come from the top (container components)
// and is passed in the form of `props`
const userInput = (props) => {
    return (
        <div className="UserInput">
            <input className="UserInput__input" type="text" value={props.username} placeholder="Username" onChange={props.usernameChanged} />
        </div>
    );
};

// If we simply import this module without defining any names
// to extract from it, the default export is what we'll get.
// We can alias the default export on the caller
export default userInput;

import React from 'react';
import './App.css';

import HelloWorld from './components/hello-world/hello-world';

class App extends React.Component {
    render () {
        return (
            <div className="App">
                <HelloWorld />
            </div>
        )
    }
}

export default App;
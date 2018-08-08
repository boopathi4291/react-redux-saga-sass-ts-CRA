/*
 * @component-name: App,
 * @parent : index
 * @child  : MainComponent
 * Use      : act as a root component
*/

import * as React from 'react';
import MainComponent from './containers/main';
import './styles/App.css';

const App =()=> {
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
}

export default App;


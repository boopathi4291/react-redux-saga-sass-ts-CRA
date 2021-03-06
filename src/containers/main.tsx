/*
 * @component-name: MainComponent,
 * @parent : App
 * @child  : Cards,CreateRecord,GridComponent
 * Use      : container for child
*/
import * as React from 'react';
import CreateRecord from '../shared/createRecord';
import Cards from './cards';
import GridComponent from './grid';

const MainComponent = ()=>{
        return (
            <div className="container-wrapper">
                <h2>Records</h2>
                <Cards/>
                <CreateRecord/>
                <GridComponent />
            </div>
        );
};
  export default MainComponent;

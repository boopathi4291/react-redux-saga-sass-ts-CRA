import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';
import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { getAllRecords } from '../actions/actions';
import Buttonrenderer from '../components/buttonRenderrer';
import { I_button_props } from '../interfaces/buttonRenderrer';

class GridComponent extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = { 
            columnDefs: [
                { headerName: "Date", field: "date", width: 198 },
                { headerName: "Title", field: "title", width: 198 },
                { headerName: "Amount", field: "amount", width: 198 },
                { headerName: "Actions", field: "title", width: 198, cellRendererFramework: Buttonrenderer }
            ],
            rowData: this.props.records,
        };
    }
    public componentDidMount() {
        this.props.getAllRecords();
      }
    public componentWillReceiveProps(nextProps:any) {
        this.setState({ rowData: nextProps.records });
    }
    public shouldComponentUpdate() {
        return true
    }
    public render() {
        return (
            <div
                className="ag-theme-balham gridComponent">
                <AgGridReact enableSorting={true} enableFilter={true} columnDefs={this.state.columnDefs} rowData={this.state.rowData} />
            </div>
        );
    }

}
const mapStateToProps = (state: I_button_props) => {
    return {
      records: state.records,
    };
  };
  const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ getAllRecords }, dispatch);
  };
  export default connect(mapStateToProps, mapDispatchToProps)(GridComponent);
  

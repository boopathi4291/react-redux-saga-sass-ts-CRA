/*
 * @component-name: ClickableRenderer,
 * @parent : GridComponent
 * @child  : CreateRecordComponent
 * Use      : to render the button is the AG grid row
*/
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { deleteRecord } from '../actions/actions';
import CreateRecord from '../shared/createRecord';
// import {I_button_State} from '../interfaces/buttonRenderrer';
// import {I_button_props} from '../interfaces/buttonRenderrer';
import { Irecords } from '../interfaces/records';

class Buttonrenderer extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        const {value} = this.props.value;
        this.state = {
            cell: {

                col: this.props.colDef.headerName,
                row: value,
            },
            open: false
        };

        this.handleDelete = this.handleDelete.bind(this);
    }
    public handleClickOpen = () => {
        this.setState({ open: true });
    };

    public handleClose = () => {
        this.setState({ open: false });
    };
    public handleDelete() {
        const {rowIndex} = this.props;
        this.props.deleteRecord(rowIndex);
    }

    public render() {
        return (
            <div>
                <Button variant="contained" color="secondary" size="small" onClick={this.handleDelete} className="btn btn-info">Delete</Button>
                <Button variant="contained" color="primary" size="small" onClick={this.handleClickOpen} className="btn btn-info">Edit</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}  >
                    <DialogTitle id="edit-row-data">Edit Data</DialogTitle>
                    <DialogContent>
                        <CreateRecord editAmount={this.props.data.amount} editTitle={this.props.data.title} editDate={this.props.data.date} />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state: {records:Irecords}) => {
    return {
        records: state.records
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ deleteRecord }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttonrenderer);


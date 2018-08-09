import Button from '@material-ui/core/Button';
import * as React from 'react';
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import { editRecord, updateRecord } from '../actions/actions';

class CreateRecord extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            amount: 0, title: '', date: '',
        };
    }
    public componentDidMount() {
        if (undefined !== this.props.editAmount) {
            this.setState({
                amount: this.props.editAmount, title: this.props.editTitle, date: this.props.editDate,
            });
        }
    }
    public onChangehandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        this.setState({ [e.target.name]: e.currentTarget.value });
    }

    public onClickSubmit: React.ChangeEventHandler<HTMLInputElement> = () => {
        this.props.updateRecord({ ...this.state });
        this.setState({
            amount: 0, title: '', date: '',
        });
    }
    public onClickEdit: React.ChangeEventHandler<HTMLInputElement> = () => {
        const i = this.props.records.findIndex((data: any) => {
            return data.title === this.props.editTitle;
        });
        const recordTobeEdited: {} = { index: i, record: { ...this.state } };
        this.props.editRecord(recordTobeEdited);
    }
    public render() {
        return (
            <div className="recordComp">
                <input type="date" placeholder="date" name="date" value={this.state.date} onChange={this.onChangehandler} />
                <input type="text" placeholder="title" name="title" value={this.state.title} onChange={this.onChangehandler} />
                <input type="number" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.onChangehandler} />
                {
                    this.props.editTitle ?
                        <Button variant="contained" color="primary" size="small" onClick={this.onClickEdit.bind(this)}>Edit Record</Button>
                        :
                        <Button variant="contained" color="primary" size="small" onClick={this.onClickSubmit.bind(this)}>Create Record</Button>
                }
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        records: state.records,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({ updateRecord, editRecord }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateRecord);

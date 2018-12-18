import React, {Component} from 'react'
import ActivityForm from '../form/form';
import './add.css'

class AddActivity extends Component {

    render() {
        return (
            <div className="page-container">
                <h2 className="page-title">
                    Add activity
                </h2>
                <div className="form-container">
                    <ActivityForm/>
                </div>
            </div>
        );
    }
}
export default AddActivity;
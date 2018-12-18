import React, {Component} from 'react'

import ActivityForm from '../form/form';
import './setting.css'

class ActivitySetting extends Component {

    render() {
        return (
            <div className="page-container">
                <h2 className="page-title">
                    Activity Setting
                </h2>
                <div className="form-container">
                    <ActivityForm/>
                </div>
            </div>
        );
    }
}
export default ActivitySetting;
import React, {Component} from 'react'

import {Form, Input, Button, Checkbox} from 'antd';
import './activity-setting.css'

const FormItem = Form.Item;

class ActivitySettingForm extends Component {

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 6
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 8
                }
            }
        };
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem {...formItemLayout} label="Activity name">
                    {getFieldDecorator('activityName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input activity name!'
                            }
                        ]
                    })(<Input placeholder="Activity name"/>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Activity description">
                    {getFieldDecorator('desc', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input activity description!'
                            }
                        ]
                    })(<Input placeholder="Activity description"/>)}
                </FormItem>
            </Form>
        );
    }
}
const WrapperForm = Form.create()(ActivitySettingForm);

class ActivitySetting extends Component {

    render() {
        return (
            <div className="page-container">
                <h2 className="pate-title">
                    Activity Setting
                </h2>
                <div className="form-container">
                    <WrapperForm/>
                </div>
            </div>
        );
    }
}
export default ActivitySetting;
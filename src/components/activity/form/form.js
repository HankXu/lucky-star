import React, {Component} from 'react'

import {Form, Input, Button, Checkbox, Radio, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

function Participants(props) {
    const { list } = props
    return list.map(item => {
        return (
            <Option value={item.id}>{item.name}</Option>
        );
    });
}

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
        const participants = [
            {
                id: 'p1',
                name: 'Henri'
            },
            {
                id: 'p2',
                name: 'Eric'
            },
            {
                id: 'p3',
                name: 'Jenny'
            }
        ]
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
                <FormItem {...formItemLayout} label="Activity mode">
                    {getFieldDecorator('mode', {
                        initialValue: 'repeat',
                        rules: [
                            {
                                required: true,
                                message: 'Please choose activity mode!'
                            }
                        ]
                    })(
                        <Radio.Group>
                            <Radio value="repeat">Repeat</Radio>
                            <Radio value="single">Single</Radio>
                        </Radio.Group>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Participants">
                    {getFieldDecorator('participant', {
                        rules: [
                            {
                                required: true,
                                message: 'Please select participant for activity!',
                                type: 'array'
                            }
                        ]
                    })(
                        <Select mode="multiple" placeholder="Please select participants">
                            {participants.map(item => <Option value={item.id}>{item.name}</Option>)}
                        </Select>
                    )}
                </FormItem>
            </Form>
        );
    }
}
const ActivityForm = Form.create()(ActivitySettingForm);

export default ActivityForm;
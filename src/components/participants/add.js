import React, {Component} from 'react'
import {
    Icon,
    Drawer,
    Form,
    Button,
    Input,
    Upload,
    message
} from 'antd';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class AddParticipants extends Component {
    TITLE = {
        add: 'Add paticipants',
        edit: 'Edit profile'
    }
    state = {
        loading: false
    }

    constructor(props) {
        super(props);
        const {type, visible, onClose} = props;
        this.props = props;
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({imageUrl, loading: false}));
        }
    }

    formUploaded = (e) => {
        return e && e.file;
    }

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
                    span: 12
                }
            }
        };
        const uploadButton = (
            <div>
                <Icon
                    type={this.state.loading
                    ? 'loading'
                    : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <Drawer
                title={this.TITLE[this.props.type]}
                width={480}
                onClose={this.props.onClose}
                visible={this.props.visible}
                style={{
                overflow: 'auto',
                height: 'calc(100% - 108px)',
                paddingBottom: '108px'
            }}>
                <Form hideRequiredMark>
                    <Form.Item label="Name" {...formItemLayout}>
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: "Please enter participant's name"
                                }
                            ]
                        })(<Input placeholder="Please enter participant's name"/>)}
                    </Form.Item>

                    <Form.Item label="Avatar" {...formItemLayout}>
                        {getFieldDecorator('avatar', {
                            valuePropName: 'avatar',
                            getValueFromEvent: this.formUploaded
                        })(
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}>
                                {imageUrl
                                    ? <img src={imageUrl} alt="avatar"/>
                                    : uploadButton}
                            </Upload>
                        )}
                    </Form.Item>
                </Form>
                <div
                    style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    borderTop: '1px solid #e9e9e9',
                    padding: '10px 16px',
                    background: '#fff',
                    textAlign: 'right'
                }}>
                    <Button
                        onClick={this.props.onClose}
                        style={{
                        marginRight: 8
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={this.props.onClose} type="primary">
                        Submit
                    </Button>
                </div>
            </Drawer>
        );
    }
}

export default Form.create()(AddParticipants);

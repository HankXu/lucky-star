import React, {Component} from 'react'
import PropTypes from "prop-types";
import {
    Card,
    Icon,
    Drawer,
    Form,
    Button,
    Input,
    Upload,
    message,
    Row,
    Col
} from 'antd';

class AddParticipants extends Component {
    state = {
        visible: false
    };
    TITLE = {
        add: 'Add paticipants',
        edit: 'Edit profile'
    }
    constructor(props) {
        super(props);
        const { type, visible } = props;
        console.log(visible);
        this.props = props;
        this.state = {
            visible: visible
        }
        this.title = this.TITLE[type];
    }

    /** life circle */
    shouldComponentUpdate(nextProps, nextState) {
        this.props = nextProps;
        this.setState(this.nextState);
        console.log(nextState);
        return false;
    }

    /** methods */
    onClose = () => {
        this.setState({
          visible: false,
        });
      };    

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Drawer
              title={this.title}
              width={480}
              onClose={this.onClose}
              visible={this.state.visible}
              style={{
                overflow: 'auto',
                height: 'calc(100% - 108px)',
                paddingBottom: '108px',
              }}
            >
            <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter participant\'s name' }],
                  })(<Input placeholder="Please enter participant\'s name" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Url">
                  {getFieldDecorator('url', {
                    rules: [{ required: true, message: 'Please enter url' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="Please enter url"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
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
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
            </Drawer>
        );
    }
}

export default Form.create()(AddParticipants);

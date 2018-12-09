import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

const {Sider} = Layout;
class AppMenu extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired
      };

    state = {
        collapsed: false
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    changPage = (param) => {
        const { key } = param;
        const pathObj = {
            list: '/list',
            setting: 'setting'
        };
        this.props.history.push(pathObj[key]);
    };

    render() {
        return (
            <Sider
                style={{
                overflow: 'none',
                height: '100vh'
            }}
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}>
                <div className="logo"/>
                <Menu 
                theme="dark"
                mode="inline" 
                onClick={this.changPage}
                >
                    <Menu.Item key="list">
                        <Icon type="ordered-list"/>
                        <span>
                            Activity list
                        </span>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Icon type="setting"/>
                        <span>
                            Setting
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}
export default withRouter(AppMenu);
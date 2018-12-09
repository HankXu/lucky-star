import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import {NavLink} from 'react-router-dom';

const {Sider} = Layout;
class AppMenu extends Component {

    state = {
        collapsed: false
    };

    onCollapse = (collapsed) => {
        this.setState({collapsed});
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
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Icon type="ordered-list"/>
                        <span>
                            <NavLink activeClassName='active' to='/list'>Activity list</NavLink>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="setting"/>
                        <span>
                            <NavLink activeClassName='active' to='/setting'>Setting</NavLink>
                        </span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default AppMenu
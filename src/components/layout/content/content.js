import React, {Component} from 'react'
import {Layout} from 'antd'

import AppRoute from '../route/route';

const {Content} = Layout;
class AppContent extends Component {

    render() {
        return (
            <Layout style={{ overflow: 'auto' }}>
                <Content>
                    <AppRoute></AppRoute>
                </Content>
            </Layout>
        )
    }
}

export default AppContent

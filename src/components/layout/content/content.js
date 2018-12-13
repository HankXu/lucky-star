import React, {Component} from 'react'
import {Layout} from 'antd'

import AppRoute from '../route/route';

const {Content} = Layout;
class AppContent extends Component {

    render() {
        return (
            <Layout style={{ height: '100%', overflow: 'hidden' }}>
                <Content style={{ height: '100%'}}>
                    <AppRoute></AppRoute>
                </Content>
            </Layout>
        )
    }
}

export default AppContent

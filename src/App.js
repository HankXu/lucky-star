import React, {Component} from 'react';
import {Layout} from 'antd'
import {BrowserRouter} from 'react-router-dom';

import AppContent from './components/layout/content/content';
import AppMenu from './components/layout/menu/menu';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <AppMenu></AppMenu>
                    <AppContent></AppContent>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;

import React, {Component} from 'react'

import {Card, List, Button} from 'antd';
import './list.css'

const {Meta} = Card;

const data = [
    {
        id: 'a',
        title: 'Ant Design Title 1',
        desc: 'desc 1'
    }, {
        id: 'b',
        title: 'Ant Design Title 2',
        desc: 'desc 2'
    }, {
        id: 'c',
        title: 'Ant Design Title 3',
        desc: 'desc 3'
    }, {
        id: 'd',
        title: 'Ant Design Title 4',
        desc: 'desc 4'
    }
];
class AppList extends Component {

    state = {
        loading: false
    };

    getData = () => {
        // get data && change state
    }

    onChange = (checked) => {
        this.setState({
            loading: !checked
        });
    };

    toDetail = (id, event) => {
        // navigate to another page...

    }

    toSetting = (id, event) => {
        event.stopPropagation();
        // navigate to another page...
    }

    render() {
        const {loading} = this.state;
        return (
            <div className="list-container">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <div key={item.id} className="card-container">
                        <Card
                            style={{
                            width: '100%',
                            marginTop: 4
                        }}
                            bodyStyle={{
                            display: 'flex'
                        }}
                            loading={loading}
                            hoverable={true}
                            onClick={(e) => this.toDetail(item.id, e)}>
                            <Meta
                                style={{
                                flex: 1
                            }}
                                title={item.title}
                                description={item.desc}/>
                            <div className="btn-container">
                                <Button
                                    shape="circle"
                                    icon="setting"
                                    onClick={(e) => this.toSetting(item.id, e)}></Button>
                            </div>
                        </Card>
                    </div>
                )}/>
            </div>
        );
    }
}

export default AppList;
import React, {Component} from 'react'

import { Card,List} from 'antd';
import './list.css'

const { Meta } = Card;

const data = [
    {
        title: 'Ant Design Title 1',
        desc: 'desc 1'
    }, {
        title: 'Ant Design Title 2',
        desc: 'desc 2'
    }, {
        title: 'Ant Design Title 3',
        desc: 'desc 3'
    }, {
        title: 'Ant Design Title 4',
        desc: 'desc 4'
    }
];
class AppList extends Component {

    state = {
        loading: false,
    };

    onChange = (checked) => {
        this.setState({ loading: !checked });
    };

    render() {
        const { loading } = this.state;
        return (
            <div className="list-container">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <Card
                        style={{
                        width: '100%',
                        marginTop: 4
                    }}
                        loading={loading}
                        hoverable={true}
                        >
                        <Meta
                            title={item.title}
                            description={item.desc}/>
                    </Card>
                )}/>
            </div>
        );
    }
}

export default AppList;
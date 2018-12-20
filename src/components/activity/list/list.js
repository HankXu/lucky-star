import React, {Component} from 'react'
import PropTypes from "prop-types";
import {Card, List, Button, Input} from 'antd';
import './list.css'

const {Meta} = Card;
const { Search } = Input;

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

    static propTypes = {
        history: PropTypes.object.isRequired
    };

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
        this.props
            .history
            .push(`setting/${id}`);
    }

    render() {
        const {loading} = this.state;
        return (
            <div>
                <div className="page-header">
                    <h2>Activity list</h2>
                    <div className="page-action">
                        <Search
                        className="white-search"
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}/>
                        <Button className="add-btn" type="primary" icon="plus" onClick={(e)=>this.showDrawer('add', e)}>Add</Button>
                    </div>
                </div>
                <div className="list-container">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <div key={item.id} className="card-container">
                            <Card
                            className="activity-item-card"
                                style={{
                                width: '100%',
                                marginTop: 8
                            }}
                                bodyStyle={{
                                display: 'flex'
                            }}
                                loading={loading}
                                hoverable={true}
                                onClick={(e) => this.toDetail(item.id, e)}>
                                <div className="info-container">
                                <h3 className="activity-name">
                                    <span className="pin">&nbsp;</span>{item.title}
                                </h3>
                                <p className="activity-desc">{item.desc}</p>
                                </div>
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
            </div>
        );
    }
}

export default AppList;
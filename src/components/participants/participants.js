import React, {Component} from 'react'
import PropTypes from "prop-types";
import {
    List,
    Card,
    Icon,
    Drawer,
    Form,
    Button,
    Input,
    Upload,
    message 
} from 'antd';
import './participants.css'
import AddParticipants from './add';

const {Meta} = Card;

class Participants extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };
    state = {
        visible: false,
        type: 'add'
    };

    /** methods */
    showDrawer = (type) => {
        this.setState({
          visible: true,
          type: type
        });
    };

    closeDrawer = () => {
        this.setState({
          visible: false,
        });
    };

    toSetting = (id, event) => {
        event.stopPropagation();
        // navigate to another page...
        this
            .props
            .history
            .push(`setting`);
    }

    render() {
        const participants = [
            {
                id: 'p1',
                name: 'Henri',
                avatar: 'https://avatars3.githubusercontent.com/u/12154343?s=40&v=4'
            }, {
                id: 'p2',
                name: 'Eric',
                avatar: 'https://avatars3.githubusercontent.com/u/12154343?s=40&v=4'
            }, {
                id: 'p3',
                name: 'Jenny',
                avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }, {
                id: 'p4',
                name: 'Alice',
                avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }, {
                id: 'p5',
                name: 'Jack',
                avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }, {
                id: 'p6',
                name: 'Mike',
                avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }, {
                id: 'p7',
                name: 'Noob',
                avatar: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            }, {
                id: 'p8',
                name: 'White',
                avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20170928/909e63b5dfa64449a59d01212a8ceb1d.jpeg'
            }
        ];
        return (
            <Card
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            bodyStyle={{overflow: 'auto'}}
            title="Participant list"
            extra={<a href="#" style={{fontSize: '14px'}} onClick={(e)=>this.showDrawer('add', e)}><Icon type="plus" /> Add</a>}>
                <List
                    grid={{
                    gutter: 16,
                    // column: 4,
                    xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                }}
                    dataSource={participants}
                    renderItem={(item, index) => (
                    <List.Item>
                        <Card
                            hoverable
                            cover={<img alt = "avatar" src = {item.avatar} />}
                            actions={[<Icon type="edit" onClick={(e)=>this.showDrawer('edit', e)} />, <Icon type="minus" />]}>
                            <Meta title={item.name}/>
                        </Card>
                    </List.Item>
                )}/>
                <AddParticipants visible={this.state.visible} type={this.state.type} onClose={this.closeDrawer}/>
            </Card>
        );
    }
}

export default Participants;
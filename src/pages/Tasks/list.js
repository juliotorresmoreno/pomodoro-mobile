import React, { PureComponent } from 'react';
import {
    Text, View, List as ListNB,
    ListItem, Content, Right,
    Body, Left, Icon
} from 'native-base';
import { connect } from "react-redux";
import { StyleSheet } from 'react-native';
import { actionsCreator } from "../../store/tasks";

const mapProps = (state) => ({
    tasks: state.tasks.data
});

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20
    }
});

class List extends PureComponent {
    componentDidMount() {
        this.props.list()
            .catch((error) => {
                console.log(error);
            });
    }
    handleTo = (item) => () => {
        this.props.history.push({
            pathname: `/tasks/${item.id}`,
            state: item
        });
    }
    render() {
        const { tasks } = this.props;
        const { props } = this;
        return (
            <View style={styles.content}>
                <ListNB style={{ width: '100%' }}>
                    {tasks.map((v, i) => (
                        <ListItem onPress={this.handleTo(v)} style={{ width: '100%' }} key={i}>
                            <Body>
                                <Text>{v.name} ({v.status})</Text>
                            </Body>
                            <Right>
                                <Text style={{paddingRight: 20}}>
                                    <Icon name="arrow-forward" />
                                </Text>
                            </Right>
                        </ListItem>
                    ))}
                </ListNB>
            </View>
        );
    }
}

export default connect(mapProps, actionsCreator)(List);
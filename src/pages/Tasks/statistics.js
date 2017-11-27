import React, { PureComponent } from 'react';
import { View } from 'native-base';
import { Bar, Pie } from 'react-native-pathjs-charts';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actionsCreator } from '../../store/tasks';
import { Route, Switch } from 'react-router-native';

const mapProps = (state) => ({
    data: state.tasks.statistics
});

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
        height: '100%'
    }
});


const options = {
    width: 300,
    height: 300,
    margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
    },
    color: '#2980B9',
    gutter: 20,
    animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
    },
    axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#34495E'
        }
    },
    axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#34495E'
        }
    }
}

class Statistics extends PureComponent {
    componentDidMount() {
        this.props.statistics();
    }
    renderBar = () => {
        const { data: statistics } = this.props;
        return <Bar data={statistics} options={options} accessorKey='v' />
    };
    renderPie = () => {
        const { data: statistics } = this.props;
        return <Pie data={statistics} options={options} accessorKey='v' />
    };
    render() {
        return (
            <View style={styles.content}>
                <Switch>
                    <Route path="/statistics" component={this.renderBar} exact />
                    <Route path="/statistics/pie" component={this.renderPie} exact />
                </Switch>
            </View >
        )
    }
}


export default connect(mapProps, actionsCreator)(Statistics);
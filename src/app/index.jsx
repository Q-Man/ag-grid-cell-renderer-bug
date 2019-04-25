import React from "react";
import ReactDOM from "react-dom";
import {AgGridReact} from "ag-grid-react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {connect} from "react-redux";

const store = createStore((state = {}) => state);

class Main extends React.Component {
    render() {
        return <Provider store={store}>

            <AgGridReact
                columnDefs={[{
                    cellRendererFramework: CustomCellRenderer,
                }]}
                rowData={[{}]}
            />

        </Provider>
    }
}

class CustomCellRenderer extends React.Component {
    render() {
        return <div>
            <TestComponentConnected/>
        </div>
    }
}

class TestComponent extends React.Component {
    render() {
        return "TestComponent";
    }
}

const TestComponentConnected = connect(
    () => {return {}},
    () => {return {}},
)(TestComponent);

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);
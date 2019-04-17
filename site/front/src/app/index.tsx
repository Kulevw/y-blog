import React, {Component} from 'react';
import '../assets/styles/grid-custom/grid.scss';
import MainLayout from '../components/MainLayout';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {RootReducer} from '../store/reducers'

const store = createStore(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainLayout>
          <div style={{ height: '2000px', background: 'linear-gradient(45deg, #EECFBA, #C5DDE8)' }}>

          </div>
        </MainLayout>
      </Provider>
    );
  }
}

export default App;

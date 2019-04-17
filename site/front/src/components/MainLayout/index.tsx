import React, {Component} from 'react';
import './main-layout.scss';
import {connect} from 'react-redux';
import {AppStore} from '../../store/reducers'
import {IMainLayoutProps} from './types';

import Header from '../Header';
import Footer from '../Footer';

class MainLayout extends Component<IMainLayoutProps> {
  render() {
    return (
      <div className="main-layout">
        <Header/>
        <main className="main-layout__content">
          {this.props.children}
        </main>
        <Footer/>
        {this.props.modal}
      </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => ({
  modal: state.modal.modal
});

export default connect(mapStateToProps, {})(MainLayout);
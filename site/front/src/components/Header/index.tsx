import React, {Component} from 'react';
import './header.scss';
import {connect} from 'react-redux';
import {AppStore} from '../../store/reducers';
import {setModal} from '../../store/DialogModal/actions';
import {HeaderProps} from './types';
import SignModal from '../Modal/SignModal';
import {DialogModalActionTypes} from '../../store/DialogModal/types';

class Header extends Component<HeaderProps> {
  showAuth = () => {
    this.props.setModal((
      <SignModal setModal={this.props.setModal}/>
    ));
  };

  render() {
    return (
      <header className="header">
        <div className="header__content" onClick={this.showAuth}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col">
                <h2 className="header__title">Y-Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state: AppStore) => ({
  modal: state.modal.modal
});

const mapDispatchToProps = {
  setModal: (modal: any): DialogModalActionTypes => {
    if(modal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return setModal(modal);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
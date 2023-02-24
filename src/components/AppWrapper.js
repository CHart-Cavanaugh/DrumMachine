import App from './App';
import { StrictMode } from 'react';
import { Provider, connect } from 'react-redux';
import store from '../app/store';
import { changeDisplayText } from '../app/slices/displaySlice';
import { togglePower } from '../app/slices/powerSlice';
import { changeVolume } from '../app/slices/volumeSlice';

const mapStateToProps = (state) => {
  return { appState: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    togglePower: currentPower => {
      dispatch(togglePower(store.getState().powerStatus));
    },
    changeDisplayText: newText => {
      dispatch(changeDisplayText(newText));
    },
    changeVolume: (volType, newVolume) => {
      dispatch(changeVolume(volType, newVolume));
    },
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const AppWrapper = props => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Container />
      </Provider>
    </StrictMode>
  );
}

export default AppWrapper;
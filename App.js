import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'app/store/configureStore';
import LaunchScreen from 'app/components/LaunchScreen';
import AppHome from "app/components/AppHome";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storeCreated: false,
      storeRehydrated: false,
      store: null
    };
  }

  state: {
    store: any
  };

  async componentDidMount() {
    // rehydration callback (after async compatibility and persistStore)
    configureStore(() => this.setState({ storeRehydrated: true }))
    // creation callback (after async compatibility)
    .then(store => this.setState({ store, storeCreated: true }));
  }

  render() {
    if (!this.state.storeCreated || !this.state.storeRehydrated) {
      // Show launch screen
      return <LaunchScreen/>;
    }

    // If store is configured, we go to the app
    return (
      <Provider store={this.state.store}>
        <AppHome/>
      </Provider>
    );
  }
}

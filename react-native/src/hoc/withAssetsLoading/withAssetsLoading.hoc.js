// @flow
import React, { Component } from 'react';
import { Alert, Linking } from 'react-native';
import { AppLoading, Font, Asset } from 'expo';

import images from '../../assets/images';
import { fontMaps } from '../../assets/fonts';
import { font as iconPackFont, name as iconPackName } from '../../assets/fontello';

const cacheImages = () =>
  Object.values(images).map(image => Asset.fromModule(image).downloadAsync());
const cacheIcons = () => Font.loadAsync({ [iconPackName]: iconPackFont });
const cacheFonts = () => Object.values(fontMaps).map(font => Font.loadAsync(font));

const withAssetsLoading = WrappedComponent =>
  class extends Component {
    state = {
      isReady: Boolean,
    };

    constructor(props) {
      super(props);

      this.state = {
        isReady: false,
      };
    }

    _setReady = () => this.setState({ isReady: true });

    _handleError = () => Alert.alert('Cannot load app data');

    _cacheResources = () => Promise.all([...cacheImages(), cacheIcons(), ...cacheFonts()]);

    componentWillUnmount() {
      Linking.removeEventListener('url');
    }

    render() {
      if (!this.state.isReady) {
        return (
          <AppLoading
            startAsync={this._cacheResources}
            onFinish={this._setReady}
            onError={this._handleError}
          />
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default withAssetsLoading;

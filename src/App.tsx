import React from "react";
import { Component } from "react";
import { StatusBar } from "react-native";
import { Font, AppLoading } from "expo";
import Router from "./Router";

export default class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontsAreLoaded: false
    };
  }

  async componentWillMount() {
    StatusBar.setHidden(true);
    await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ fontsAreLoaded: true });
  }
  render = () => {
    const { fontsAreLoaded } = this.state;
    return !fontsAreLoaded ? <AppLoading /> : <Router />;
  };
}

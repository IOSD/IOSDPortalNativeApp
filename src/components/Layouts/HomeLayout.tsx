import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import { NavigationScreenProp, NavigationStateRoute } from "react-navigation";

import HeaderBar from "../HeaderBar";

const styles = StyleSheet.create({
  header: {
    color: "rgba(0,0,0,0.65)",
    backgroundColor: "#fff",
    height: 60
  },
  container: {
    backgroundColor: "#F0F2F5"
  },
  textContent: {
    color: "rgba(0,0,0,0.65)"
  }
});

interface HomeLayoutProps {
  component: React.Component<any, any>;
  navigation: NavigationScreenProp<NavigationStateRoute>;
}

class HomeLayout extends Component<HomeLayoutProps, any> {
  render() {
    const Component = this.props.component;
    return (
      <Container style={styles.container}>
        <HeaderBar navigation={this.props.navigation} />
        <Content>
          <Component />
        </Content>
      </Container>
    );
  }
}

export default function(component: React.Component) {
  return props => {
    return <HomeLayout component={component} navigation={props.navigation} />;
  };
}

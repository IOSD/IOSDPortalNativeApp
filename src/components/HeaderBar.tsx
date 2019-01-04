import React, { Component } from "react";
import { StyleSheet, Image, View } from "react-native";
import { NavigationScreenProp, NavigationStateRoute } from "react-navigation";
import { Header, Body, Right, Button, Icon, Thumbnail } from "native-base";

const IMG_URL =
  "https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/24312612_1977960125825261_7307179431224955767_n.jpg?_nc_cat=111&_nc_ht=scontent.fdel8-1.fna&oh=e7551e9f3d02c12bf933cb1b3d28ad59&oe=5CD7F6C3";

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

interface HeaderBarProps {
  navigation: NavigationScreenProp<NavigationStateRoute>;
}

export default class HeaderBar extends Component<HeaderBarProps, any> {
  render() {
    return (
      <Header noLeft style={styles.header}>
        <Body>
          <View style={{ flexDirection: "row" }}>
            <Button transparent>
              <Icon name="menu" style={styles.textContent} />
            </Button>
            <Button transparent>
              <Image
                style={{ height: 36, width: 120 }}
                source={require("../../assets/images/logo.png")}
              />
            </Button>
          </View>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("Details")}
          >
            {/* <Icon name="menu" style={styles.textContent} /> */}
            <Thumbnail small source={{ uri: IMG_URL }} />
          </Button>
        </Right>
      </Header>
    );
  }
}

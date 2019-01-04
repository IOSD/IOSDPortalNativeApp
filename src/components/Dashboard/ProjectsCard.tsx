import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Card,
  CardItem,
  Body,
  Left,
  List,
  ListItem,
  H2,
  Text,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../../styles/Card";

export default class ProjectsCard extends Component {
  render() {
    return (
      <View>
        <Card style={styles.card}>
          <CardItem bordered>
            <Grid>
              <Row style={{ height: 80 }}>
                <Col size={1}>
                  <Image
                    style={{ width: 80, height: 80 }}
                    source={{
                      uri:
                        "http://danajfrank.com/assets/img/sidewalks/project_roles_icon.png"
                    }}
                  />
                </Col>
                <Col size={3} style={{ paddingTop: 10, paddingLeft: 10 }}>
                  <H2>Projects</H2>
                  <Text style={styles.small}>
                    Learn by doing. Works on open source projects of IOSD
                  </Text>
                </Col>
              </Row>
            </Grid>
          </CardItem>
          <CardItem>
            <Body>
              <Text>PROJECT TO WORK ON</Text>
            </Body>
          </CardItem>

          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://preview.ibb.co/mYACLy/Artboard_1.png"
                  }}
                />
              </Left>
              <Body>
                <Text>beneFIT</Text>
                <Text note numberOfLines={1}>
                  A health and fitness app
                </Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://preview.ibb.co/mYACLy/Artboard_1.png"
                  }}
                />
              </Left>
              <Body>
                <Text>beneFIT</Text>
                <Text note numberOfLines={1}>
                  A health and fitness app
                </Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://preview.ibb.co/mYACLy/Artboard_1.png"
                  }}
                />
              </Left>
              <Body>
                <Text>beneFIT</Text>
                <Text note numberOfLines={1}>
                  A health and fitness app
                </Text>
              </Body>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  source={{
                    uri: "https://preview.ibb.co/mYACLy/Artboard_1.png"
                  }}
                />
              </Left>
              <Body>
                <Text>beneFIT</Text>
                <Text note numberOfLines={1}>
                  A health and fitness app
                </Text>
              </Body>
            </ListItem>
          </List>
        </Card>
      </View>
    );
  }
}

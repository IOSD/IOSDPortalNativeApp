import React, { Component } from "react";
import { Image, View } from "react-native";
import { Card, CardItem, Body, List, ListItem, H2, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "../../styles/Card";

export default class CoursesCard extends Component {
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
                        "https://www.codingninjas.in/assets/images/Courses.png"
                    }}
                  />
                </Col>
                <Col size={3} style={{ paddingTop: 10, paddingLeft: 10 }}>
                  <H2>Courses</H2>
                  <Text style={styles.small}>
                    Learning was never this easy. Checkout the courses we
                    provide
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
            <ListItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ alignSelf: "flex-start" }}>
                  Java Begineer Course
                </Text>
                <Text note>
                  Begin from Java Basics and Master Data Structures and
                  Algorithms
                </Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ alignSelf: "flex-start" }}>
                  Java Begineer Course
                </Text>
                <Text note>
                  Begin from Java Basics and Master Data Structures and
                  Algorithms
                </Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ alignSelf: "flex-start" }}>
                  Java Begineer Course
                </Text>
                <Text note>
                  Begin from Java Basics and Master Data Structures and
                  Algorithms
                </Text>
              </View>
            </ListItem>
            <ListItem>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ alignSelf: "flex-start" }}>
                  Java Begineer Course
                </Text>
                <Text note>
                  Begin from Java Basics and Master Data Structures and
                  Algorithms
                </Text>
              </View>
            </ListItem>
          </List>
        </Card>
      </View>
    );
  }
}

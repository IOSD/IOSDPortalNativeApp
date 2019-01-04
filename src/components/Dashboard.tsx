import React, { Component } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo";
import ProjectsCard from "./Dashboard/ProjectsCard";
import CoursesCard from "./Dashboard/CoursesCard";

export default class Dashboard extends Component {
  render() {
    return (
      <View>
          <View style={{ padding: 10 }}>
            <CoursesCard />
            <ProjectsCard />
          </View>
      </View>
    );
  }
}

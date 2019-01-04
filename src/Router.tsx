import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";
import Library from "./components/Library/Library";
import HomeLayout from "./components/Layouts/HomeLayout";
import Dashboard from "./components/Dashboard";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const DashboardWithLayout = HomeLayout(Dashboard);
const LibraryWithLayout = HomeLayout(Library);

const AppNavigator = createBottomTabNavigator(
  {
    Home: DashboardWithLayout,
    Library: LibraryWithLayout,
    Courses: DetailsScreen,
    Events: DetailsScreen,
    Profile: DetailsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Events") {
          iconName = "map";
        } else if (routeName === "Courses") {
          iconName = "laptop";
        } else if (routeName === "Library") {
          iconName = "book";
        } else if (routeName === "Profile") {
          iconName = "person";
        }

        return (
          <MaterialIcons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "rgba(0,0,0,0.5)"
      //   showLabel: false
    }
  }
);

export default createAppContainer(AppNavigator);

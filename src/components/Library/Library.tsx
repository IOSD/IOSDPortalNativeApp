import React, { Component } from "react";
import { View, Platform, Text, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo";
import {Card} from 'native-base'
import { Pagination } from "react-native-snap-carousel";
import styles, { colors } from "./style";
import SliderEntry from "./SliderEntry";
import { sliderWidth, itemWidth } from "./SliderEntry.style";
import CardStyles from "../../styles/Card";

export const ENTRIES1 = [
  {
    title: "Web Development",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/HhkoJ6f.jpg"
  },
  {
    title: "Machine Learning",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg"
  },
  {
    title: "Android Development",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg"
  },
  {
    title: "Data Structures and Algorithms",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg"
  },
  {
    title: "Game Development",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg"
  },
  {
    title: "Miscelleanous",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/lceHsT6l.jpg"
  }
];

// Categories : Android Dev , Machine Learning , Web Dev , DS Algo , Game Dev

export default class Library extends Component {
  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "column",
          flexGrow: 1
        }}
      >
          
          <View style={styles.exampleContainer}>
          <Card style={{...CardStyles.card , width : itemWidth , alignSelf : 'center' , padding : 10 }}> 
            <Text style={styles.title}>Library</Text>
            <Text style={styles.subtitle}>
              Choose from a collection of books to learn a new technologies or
              refresh or knolwldege.
            </Text>
            </Card>
            <Carousel
              data={ENTRIES1}
              renderItem={this._renderItemWithParallax}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              hasParallaxImages={true}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              loop={true}
              loopClonesPerSide={2}
            />
          </View>
      </View>
    );
  }
}

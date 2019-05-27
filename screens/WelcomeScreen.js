import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, Alert } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SLIDE_DATA = [
  { title: 'ステップ1', text: '旅の思い出を追加しましょう', uri: require('../assets/welcome_screen1.jpg') },
  { title: 'ステップ2', text: '使い方はリストに記載されています！', uri: require('../assets/welcome_screen2.jpg') },
  { title: 'ステップ3', text: '旅行の詳細をもっと見よう！', uri: require('../assets/welcome_screen3.jpg') },
];

class WelcomeScreen extends React.Component {
  onStartButtonPressed = () => {
    Alert.alert(
      'アラート',
      'ボタンがタップされました！',
      [
        { text: 'OK' },
        { text: 'キャンセル' }
      ],
      { cancelable: false }
    );
  }

  renderLastButton(index) {
    if(index === SLIDE_DATA.length - 1) {
      return (
        <Button
          style={{ padding: 10 }}
          buttonStyle={{ backgroundColor: 'deepskyblue' }}
          title='さぁ、はじめましょう！'
          onPress={this.onStartButtonPressed}
        />
      );
    }
  }

  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
          key={index}
          style={ styles.slideStyle }
        >
          <View
            style={ styles.containerStyle }
          >
            <Text style={ styles.textStyle }>{ slide.title }</Text>
            <Text style={ styles.textStyle }>{ slide.text }</Text>
          </View>

          <Image
            style={{ flex: 2 }}
            resizeMode="contain"
            source={slide.uri}
          />

          <View
            style={ styles.containerStyle }
          >
            { this.renderLastButton(index) }
            <Text style={ styles.textStyle }>{ index + 1 } / { SLIDE_DATA.length }</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        { this.renderSlides() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    width: SCREEN_WIDTH,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 20,
    padding: 5
  },
});

export default WelcomeScreen;
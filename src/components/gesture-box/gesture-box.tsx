import React, { useRef } from 'react';
import {
  StyleSheet,
  Animated,
  Pressable,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const COLORS = ['#b58df1', '#fa7f7c', '#ffe780', '#82cab2'];

export function GestureBox() {
  const colorIndex = useRef(new Animated.Value(0)).current;

  const gesture = Gesture.Tap().onStart(() => {
    console.log('onStart');
  });
  const currentIndex = useRef(0);

  const handlePress = () => {
    const nextIndex = (currentIndex.current + 1) % COLORS.length;
    currentIndex.current = nextIndex;

    Animated.timing(colorIndex, {
      toValue: nextIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = colorIndex.interpolate({
    inputRange: COLORS.map((_, i) => i),
    outputRange: COLORS,
  });

  return (
    <GestureDetector gesture={gesture}>
      <View style={styles.container}>
        <Pressable onPress={handlePress}>
          <Animated.View style={[styles.box, { backgroundColor }]} />
        </Pressable>
      </View>
    </GestureDetector>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    cursor: 'pointer',
  },
});

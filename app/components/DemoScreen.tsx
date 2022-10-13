import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';

export type DemoScreenProps = {};

export const DemoScreen = (): JSX.Element => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const getFibonacci = (number: number) => {
    if (number <= 1) {
      return number;
    } else {
      const result = getFibonacci(number - 1) + getFibonacci(number - 2);
      return result;
    }
  };

  const calculateFibonacci = () => {
    setStartTime(new Date().getTime());
    const result = getFibonacci(25);
    if (result) {
      setEndTime(new Date().getTime());
    }
  };

  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
      }}>
      <Text>{`The time taken to calculate: ${endTime - startTime}`}</Text>
      <Button
        onPress={calculateFibonacci}
        title="Fibonacci"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

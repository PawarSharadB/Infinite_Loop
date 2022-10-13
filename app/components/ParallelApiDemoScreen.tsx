import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/rootReducer';
import {getPosts} from '../redux/slices/getPostsSlice';

export type ParallelApiDemoScreenProps = {};

export const ParallelApiDemoScreen = (): JSX.Element => {
  const {posts, comments} = useSelector((state: RootState) => state.posts);
  const dispatch = useAppDispatch();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  console.log('comments======================== ', comments);

  useEffect(() => {
    if (posts.length !== 0) {
      const time = new Date().getTime();
      setEndTime(time);
    }
  }, [posts]);

  const calculateApiResponseTime = () => {
    const time = new Date().getTime();
    setStartTime(time);
    dispatch(getPosts());
  };

  return (
    <View
      style={{
        marginTop: 200,
        alignItems: 'center',
      }}>
      <Text>{`The time taken: ${endTime - startTime} ms`}</Text>
      <Button
        onPress={calculateApiResponseTime}
        title="Parallel API"
        color="#841584"
      />
    </View>
  );
};

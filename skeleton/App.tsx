import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, useWindowDimensions } from 'react-native';
import ContentLoader from 'react-content-loader';

import { styles } from './style';
import { Circle, Rect } from 'react-native-svg';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='transparent' translucent />

      {isLoading ? (
        <ContentLoader
          viewBox={`0 0 ${width} ${height}`}
          backgroundColor='aquamarine'
          foregroundColor='royalblue'
        >
          <Circle cx="32" cy="32" r="32" />
          <Rect x="80" y="17" rx="4" ry="4" width={30} height={12} />
          <Rect x="80" y="40" rx="4" ry="4" width={200} height={14} />
        </ContentLoader>
      ) : (

        <View style={styles.header}>
          <Image
            source={{ uri: "https://avatars.githubusercontent.com/u/32183622?v=4" }}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.username}>Liliul Github</Text>
          </View>
        </View>
      )}

    </View>
  );
}
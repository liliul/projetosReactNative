import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';

import { styles } from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
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
    </View>
  );
}
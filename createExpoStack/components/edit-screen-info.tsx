import React from 'react';
import { Text, View, Image } from 'react-native';

import githubApi from './githubApi'

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>Inicio do Projeto</Text>
        <View className={styles.codeHighlightContainer + styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>
        <Text className={styles.getStartedText}>
          Testando create expo stack no react native
            <Image  source={{uri: "https://github.com/liliul.png"}} />
            <githubApi name='Naruto Uzumaki E Sasuke Uchiha' />
        </Text>
      </View>
    </View>
  );
}

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center text-[#a4ff] h-full w-full`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};

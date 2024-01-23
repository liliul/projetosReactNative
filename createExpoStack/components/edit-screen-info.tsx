import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import GithubApi from './githubApi'

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>Inicio do Projeto</Text>
        <View className={styles.codeHighlightContainer + styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>
        <View style={estilo.git}>
           <GithubApi name='Informações do usuario do github' />
        </View>

        <Text className={styles.getStartedText}>
          Testando create expo stack no react native
        </Text>
        <View>
          <Image
            style={estilo.avatar} 
            source={{uri: "https://github.com/liliul.png"}} 
          />
        </View>
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
const estilo = StyleSheet.create({
  git: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  avatar: {
    width: 94,
    height: 94,
    marginTop: 10,  
  },
})

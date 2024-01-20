import {View ,Text, StyleSheet} from 'react-native'


export default function LoadingGithub(props) {
    return (
        <View>
            <Text>{props.loadingText}</Text>
        </View>
    )
}

// const styles = StyleSheet.create({
//     loadContainer: {
//         flex: 1,
//         textAlign: center,
//     },
// })
// style={styles.loadContainer}
// style={styles.loadText}

import {View ,Text, StyleSheet} from 'react-native'


export default function LoadingGithub(props) {
    return (
        <View style={styles.loadContainer}>
            <Text style={styles.loadText}>{props.loadingText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loadContainer: {
        flex: 1,
        textAlign: center,
    },
    loadingText: {
        color: 'purple',
        marginTop: 20,
    },
})

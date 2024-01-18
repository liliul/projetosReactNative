import React from 'react'
import {View ,Text} from 'react-native'

export default function githubInfos(props) {
    return (
        <View>
            <Text className={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = {
    name: `text-grey-500 `
}

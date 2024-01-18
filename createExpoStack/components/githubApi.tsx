import React, {useState, useEffect} from 'react'
import {View ,Text, StyleSheet} from 'react-native'

export default function githubInfos(props) {
    const [github, setGithub] = useState('')

    useEffect(() => {
        fetch('https://api.github.com/users/maykbrito')
        .then((req) => req.json())
        .then((res) => {
            setGithub(res)
        })
    },[])

    return (
        <View>
            <Text style={styles.nameProps}>{props.name}</Text>
            <View style={styles.gitContainer}>
                <Text>ID: {github.id}</Text>
                <Text>Name: {github.name}</Text>
                <Text>Company: {github.company}</Text>
                <Text>Location: {github.location}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nameProps: {
        color: "purple",
        fontSize: 23,
    },
    gitContainer: {
        marginTop: 10,
        paddingLeft: 5,
    }

})

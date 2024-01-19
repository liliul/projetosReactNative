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
        <View style={styles.containerCard}>
            <Text style={styles.nameProps}>{props.name}</Text>
            <View style={styles.gitContainer}>
                <Text>ID: {github.id}</Text>
                <Text>Name: {github.name}</Text>
                <Text>Company: {github.company}</Text>
                <Text>Location: {github.location}</Text>
            </View>

            <View style={styles.gitContainer}>
                <Text>URL: {github.html_url}</Text>
                <Text>Repos URL: {github.repos_url}</Text>
                <Text>Bio: {github.bio}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 10,
    },
    nameProps: {
        color: "purple",
        fontSize: 23,
    },
    gitContainer: {
        marginTop: 10,
        paddingLeft: 5,
    }

})

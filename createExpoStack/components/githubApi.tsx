import React, {useState, useEffect} from 'react'
import {View ,Text} from 'react-native'

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
            <Text className={styles.name}>{props.name}</Text>
            <View>
                <Text>ID: {github.id}</Text>
                <Text>Name: {github.name}</Text>
                <Text>Company: {github.company}</Text>
                <Text>Location: {github.location}</Text>
            </View>
        </View>
    )
}

const styles = {
    name: `text-grey-500 `
}

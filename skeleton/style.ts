import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        padding: 32,
    },
    header: {
        marginTop: 32,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    avatar: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    greeting: {
        color: "#FFF",
        fontSize: 14,
    },
    username: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
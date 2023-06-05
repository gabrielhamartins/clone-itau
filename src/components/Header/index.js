import React from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons";

const statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 8: 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contentLeft}>
                    <TouchableOpacity activeOpacity={0.1} style={styles.buttonUser}>
                        <Feather name="user" size={20} color="white"></Feather>
                    </TouchableOpacity>
                    <Text style={styles.username}>{name}</Text>
                    <TouchableOpacity activeOpacity={0.1} style={styles.chevronDown}>
                        <Feather name="chevron-down" size={18} color="white"></Feather>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentRight}>
                    <TouchableOpacity activeOpacity={0.1} style={styles.buttonSearch}>
                        <Feather name="search" size={22} color="white"></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.1} style={styles.buttonBell}>
                        <Feather name="bell" size={22} color="white"></Feather>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff7200",
        paddingTop: statusHeight,
        flexDirection: "row",
        paddingStart: 15,
        paddingEnd: 15,
        paddingBottom: 8,
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentLeft: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    contentRight: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    username: {
        color: "white",
        fontSize: 16,
        paddingLeft: 15,
    },
    buttonUser: {
        width: 27,
        height: 27,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 2,
        textShadowRadius: 2,
        textShadowOffset: {width: 2, height: 2},
    },
    buttonBell: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonSearch: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 20,
    },
    chevronDown: {
        width: 40,
        height: 40,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingBottom: 8,
        paddingLeft: 5,
    }
});
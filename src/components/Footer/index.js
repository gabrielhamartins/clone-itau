import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Feather} from "@expo/vector-icons";

const iconSize = 25;

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Feather name="home" size={iconSize} color="#ec7000"></Feather>
                    <Text style={styles.sectionText}>início</Text>
                </View>
                <View style={styles.section}>
                    <Feather name="list" size={iconSize} color="#ec7000"></Feather>
                    <Text style={styles.sectionText}>extrato</Text>
                </View>
                <View style={styles.section}>
                    <Feather name="dollar-sign" size={iconSize} color="#ec7000"></Feather>
                    <Text style={styles.sectionText}>transações</Text>
                </View>
                <View style={styles.section}>
                    <Feather name="credit-card" size={iconSize} color="#ec7000"></Feather>
                    <Text style={styles.sectionText}>produtos</Text>
                </View>
                <View style={styles.section}>
                    <Feather name="help-circle" size={iconSize} color="#ec7000"></Feather>
                    <Text style={styles.sectionText}>ajuda</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingTop: 15,
        flexDirection: "row",
        paddingStart: 7,
        paddingEnd: 7,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderColor: "#dbd6d3",
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    section: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
    },
    sectionText: {
        color: "black",
        fontSize: 12,
    }
});
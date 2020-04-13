import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstrom: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286F4"],
        title:"Thunderstrom",
        subtitle:"Don't go out and stay home."
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        subtitle:"Take your umbrella with you."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title:"Rain",
        subtitle:"Take your umbrella with you."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        subtitle:"Make a snowman."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Atmosphere",
        subtitle:"The air is clean."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Clear",
        subtitle:"It's a nice day to travel."
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title:"Clouds",
        subtitle:"Cloudy sky, cooler than usual."
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Mist",
        subtitle:"Slow down when you drive."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Dusty",
        subtitle:"Wear a mask when you go out."
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside."
    }
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    color="white"
                    name={weatherOptions[condition].iconName} />
                <Text style={styles.tmep}>{temp}°C</Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textContainer}}>
                <View>
                    <Text style={styles.title}>
                    {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstrom",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tmep: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        fontSize: 20,
        color: "white"
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
      onPress: () => void;
      title?: string;
      backgroundColor?: string;
      textColor?: string;
      children?: React.ReactNode;
}

const Button = (props: Props) => {

      if (props.children) {
            return (
                  <TouchableOpacity
                        style={styles.container}
                  >
                        {props.children}
                  </TouchableOpacity>
            )
      }

      return (
            <TouchableOpacity
                  style={styles.container}
                  onPress={ props.onPress }
            >
                  <Text style={[styles.buttonText, { color: props.textColor ?? "white" }]}>{ props.title }</Text>
            </TouchableOpacity>
      )
}

export default Button

const styles = StyleSheet.create({
      container: {
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: "#C0C0C0",
            borderRadius: 5,
            backgroundColor: "#5A4BAD",
            alignItems: "center",
            alignSelf: "center",
      },

      buttonText: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#ffffff",
      }
})
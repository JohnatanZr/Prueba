import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Paciente = ({ item }) => {
    const {id, paciente, propietario, numero } = item
    return (
        <View >
            <Text>{id} -- {paciente} -- {propietario}</Text>
        </View>
    )
}
export default Paciente;

const styles = StyleSheet.create({
    
  listaLetra:{   
  },
})
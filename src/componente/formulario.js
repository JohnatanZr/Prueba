import React, { useState } from "react";
import { Alert, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes}) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [sintomas, setSintomas] = useState('')

    const handleCita = () => {
        if ([paciente, propietario, email, numero, sintomas].includes('')) {
            Alert.alert('Complete todos los campos')
            return
        } else {
            Alert.alert('Cita asignada con éxito')
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            numero,
            sintomas
        }

        setPacientes([...pacientes, nuevoPaciente])
        setModalVisible(false)
        setPaciente('')
        setPropietario('')
        setEmail('')
        setNumero('')
        setSintomas('')
    };

    return (
        <SafeAreaView>
            <Modal
                animationType="slide"
                visible={modalVisible}
            >
                <ScrollView>
                    <Pressable
                        onLongPress={() => setModalVisible(false)}>
                        <Text style={styles.btnCancelarTexto}>Cancelar X</Text>
                    </Pressable>
                    <View >
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput style={styles.input}
                            placeholder="Nombre del paciente"
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}></TextInput>

                        <Text style={styles.label}>Nombre del propietario</Text>
                        <TextInput style={styles.input}
                            placeholder="Nombre del propietario"
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}></TextInput>

                        <Text style={styles.label}>Email del propietario</Text>
                        <TextInput style={styles.input}
                            placeholder="Email del propietario"
                            placeholderTextColor={'#666'}
                            value={email}
                            onChangeText={setEmail}></TextInput>

                        <Text style={styles.label}>Número de contacto</Text>
                        <TextInput style={styles.input}
                            placeholder="Número de contacto del propietario"
                            keyboardType="numeric"
                            maxLength={10}
                            value={numero}
                            onChangeText={setNumero}></TextInput>

                        <Text style={styles.label}>Síntomas del Paciente</Text>
                        <TextInput style={styles.inputPaciente}
                            placeholder="Síntomas del paciente"
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            multiline
                            onChangeText={setSintomas}></TextInput>
                    </View>
                    <Pressable
                        onPress={handleCita}>
                        <Text style={styles.asignarCita}>Asignar Cita</Text>
                    </Pressable>

                </ScrollView>
            </Modal>
        </SafeAreaView>
    );
};
export default Formulario;

const styles = StyleSheet.create({
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#227ea0',
        borderRadius: 10,
        marginTop: 70,
        marginLeft: 120,
        marginRight: 120,
        paddingBottom: 5,
        paddingTop: 5,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
    },
    input: {
        fontFamily: 'inherent',
        fontSize: 15,
        marginRight: 20,
        marginLeft: 20,
        borderBottomColor: 10,
        borderWidth: 0.5,
        borderBottomColor: 'black',
        borderRadius: 10,
    },
    inputPaciente: {
        fontFamily: 'inherent',
        fontSize: 15,
        marginRight: 20,
        marginLeft: 20,
        paddingBottom: 100,
        borderBottomColor: 10,
        borderWidth: 0.5,
        borderBottomColor: 'black',
        borderRadius: 10,
    },
    asignarCita: {
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#227ea0',
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 70,
        marginRight: 70,
        paddingBottom: 10,
        paddingTop: 10,
    }
});
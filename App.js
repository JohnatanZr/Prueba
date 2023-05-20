/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Formulario from './src/componente/formulario';
import Paciente from './src/componente/paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([])
  const [isRender, setIsRender] = useState(false)

  const onDeleteItem = (id) => {
    Alert.alert('Cita eliminada con éxito')
    const filterData = pacientes.filter(item => item.id !== id)
    setPacientes(filterData)
  }

  const onSaveEdit = () =>{
    Alert.alert('hola')
  }

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>
        Veterinaria Phin
      </Text>
      <View>
        <Image
          style={styles.logo}
          source={require('./src/img/Captura.png')} />
      </View>
      <Text style={styles.subTitulo}>
        App de administración de citas {''}
      </Text>

      <Pressable style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}> Nueva Cita</Text>
      </Pressable>

      <View style={styles.lista}>
        {pacientes.length === 0 ?
          <Text> NO HAY PACIENTES
          </Text> :

          <FlatList
            data={pacientes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    onDeleteItem(item.id)
                  }}
                >
                  <Paciente
                    item={item}
                  />
                  <Text>Eliminar</Text>
                </Pressable>
              )
            }}
          />
        }
      </View>

      <View>
        <Pressable
        onPress={onSaveEdit}
        ></Pressable>
          <Text>Editar datos</Text>
      </View>

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes={setPacientes}
        pacientes={pacientes}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    borderRadius: 400,
    marginLeft: 60,
  },
  titulo: {
    marginTop: 90,
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#227ea0',
  },
  subTitulo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: '#1483D5',
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    backgroundColor: '#41beec',
    padding: 15,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  lista: {
    borderWidth: 1,
    marginHorizontal: 20,
    padding: 5,
    marginTop: 10,
  },
});
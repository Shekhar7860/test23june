import { loadPartialConfigAsync } from "@babel/core";
import React, { useState, useEffect } from "react";
import { Image, PixelRatio, ScrollView, StyleSheet, Text, TextInput, View, SafeAreaView } from "react-native";
import axios from 'axios';
const size = 50;
const cat = {
  uri: "https://reactnative.dev/docs/assets/p_cat1.png",
  width: size,
  height: size
};

const App = () => {
  useEffect(() => {
    login()
  }, [])

  const login = async () => {
    const data = await axios.post(
      'https://empti.org/empti/public/api/user/outletDetail',
      {
        outlet_id: 86,
        //other data key value pairs
      },
      {
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ0NTM2MDUsImV4cCI6MTYyNzA0NTYwNSwidXNlcl9pZCI6MTQ1fQ.T0Te-ChalKiw7ERX14LhpOYo92Iv0xnNwfKuZ4Xt6ws',
          //other header fields
        }
      }
    );
    console.log('data', data)
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput placeholder={'Email'} style={styles.textInput} />
        <TextInput placeholder={'Password'} style={styles.textInput} secureTextEntry={true} />
      </ScrollView>
    </SafeAreaView>)
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center'

  }, textInput: {
    width: '100%',
    borderWidth: 1,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 10
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4
  }
});

export default App;
import React, {useState} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity, ToastAndroid} from 'react-native';
import Slider from '@react-native-community/slider';
import ToggleSwitch from 'toggle-switch-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clipboard from '@react-native-community/clipboard';

let maisculas = "ABCDEFGHIJKLMNOPQRSTUVWXY"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "1234567890"
let especiais = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function App() {

  const [password, setPassword] = useState('');
  const [size, setSize] = useState(8)
  const [switch1, setSwitch1] = useState(true)
  const [switch2, setSwitch2] = useState(true)
  const [switch3, setSwitch3] = useState(true)
  const [switch4, setSwitch4] = useState(false)

  let charset = (switch1 ? maisculas : '') + (switch2 ? minusculas : '') + (switch3 ? numeros : '') + (switch4 ? especiais : '')
  
  function gerarsenha(){
    let senha = '';
    for(let i = 0, n = charset.length; i < size; i++ ){
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
  setPassword(senha);
  }

  function copypass(){
    Clipboard.setString(password)
    password == '' ? toast("Clique em gerar senha") : toast("Senha copiada")
  }

  function toast(msg){
    ToastAndroid.showWithGravity(
      msg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
   
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImagem}>
        <Image source={require('./src/cadeado.png')} style={styles.imagem} />
        </View>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 5}}> {size} Caracteres</Text>
        <View style={styles.area}>
        <Slider maximumValue={20} minimumValue={4} step={1} style={{height: 50}} value={size} onValueChange={(valor) => setSize(valor)}
        minimumTrackTintColor="#00B1B9" maximumTrackTintColor="blue" val />
      </View>

        <View style={styles.switchView}>
          <Text style={styles.textSwitch}>Incluir Maiúsculas</Text>
          <ToggleSwitch
          isOn={switch1}
          onColor="#00B1B9"
          offColor="#767577"
          size="small"
          onToggle={(val) => setSwitch1(val)}
          />
        </View>

        <View style={styles.switchView}>
          <Text style={styles.textSwitch}>Incluir Minúsculas</Text>
          <ToggleSwitch
          isOn={switch2}
          onColor="#00B1B9"
          offColor="#767577"
          size="small"
          onToggle={(val) => setSwitch2(val)}
          />
        </View>

        <View style={styles.switchView}>
          <Text style={styles.textSwitch}>Incluir Números</Text>
          <ToggleSwitch
          isOn={switch3}
          onColor="#00B1B9"
          offColor="#767577"
          size="small"
          onToggle={(val) => setSwitch3(val)}
          />
        </View>

        <View style={styles.switchView2 }>
          <Text style={styles.textSwitch}>Incluir Caracteres Especiais</Text>  
          <ToggleSwitch
          isOn={switch4}
          onColor="#00B1B9"
          offColor="#767577"
          size="small"
          onToggle={(val) => setSwitch4(val)}
          />
        </View>
        
        <TouchableOpacity style={styles.bottom} onPress={gerarsenha}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Gerar Senha</Text>
        </TouchableOpacity>


          <View style={styles.areasenha}>
            <Text 
            style={{ fontSize: 21, justifyContent: 'center'}} onLongPress={copypass}> {password}
            </Text>
            <View style={{ width: 22, height: 50, alignContent: 'flex-end', justifyContent: 'center'}}>
            <TouchableOpacity onPress={copypass}>
            <Icon
            name="clipboard"
            size={20}
            color="#000"
            style={{justifyContent: 'flex-start'}}/>
            </TouchableOpacity>
            </View>
          </View>     
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3'
  },
  containerImagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  imagem: {
    width: '100%',
    height: '100%',
  },
  area: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 30,
  },
  areasenha: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#F59B2E',
    width: '40%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,  
    marginVertical: 30,
  },
  switchView: { 
    width: '80%', 
    height: '5%', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'gray'
  },
  switchView2: { 
    width: '80%', 
    height: '5%', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  textSwitch: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default App;

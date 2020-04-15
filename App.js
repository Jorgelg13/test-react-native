import React, { useState, useEffect} from 'react';
import Titulo from './componentes/Titulo'
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {
  const[isTitle, setIsTitle] = useState(false);

  const name ="Jorge Antonio Laj";
  if(isTitle === true){

  }else{
    
  }

  useEffect(() => {
    console.log("ejecutando")
  }, [isTitle]);

  return (
    <View style={styles.container}>
      {isTitle === true && <Titulo title={name} />   }
      <Text>Esta es mi primera app con REACT NATIVE.</Text>
      <Button title="Actualizar Estado" onPress={ () => setIsTitle(true)}/>
      <Button title="Ocultar Estado" onPress={ () => setIsTitle(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(

    <View>
      <View style= {styles.textContainer}>    
        <Text style={styles.text}>Julia Martinez</Text> 
      </View>

      <View>
       <Text style={styles.subtitle}></Text>
       </View>
    </View>   
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#70CAD1',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    borderRadius: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    
    
  },

  subtitle:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    borderRadius: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  }

});


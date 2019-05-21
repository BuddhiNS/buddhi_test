import React, {Component} from 'react'

import{
    View,
    Text,
    Button
} from 'react-native'

import styles from './styles'

class Home extends Component{




    goToLogin(){
        this.props.navigation.navigate('signin')

    }




 render(){

   const {parent,btn}=styles

   return (
      <View style={parent}>
      
      <Button tittle={"SignIn"} onPress={_ => this.goToLogin()} style={btn}></Button>

      </View>

 

   )

}
}
export default Home
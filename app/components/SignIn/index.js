import React, {Component} from 'react'

import {
    View,
    TextInput,
    Button,
    Alert,
    Text
} from 'react-native'

import styles from './styles'


class Home extends Component{

  state= {email:"",password:""}

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
    {
    console.log("Email is Not Correct");
    this.setState({email:text})
    return false;
      }
    else {
      this.setState({email:text})
      console.log("Email is Correct");
    }
    }

checkLogin(){

   const {email,password}=this.state

   if(email == 'nimalibuddhi@gmail.com' && password == 'admin@123'){

    Alert.alert('Success', 'Successfully LoggedIn'      ,[{
        text:'Okay'
    }])

   }
   else{
      Alert.alert('Error', 'Username/Password Missmatched'      ,[{
          text:'Okay'
      }])

   }

}




  render(){
    const {heading,input,parent} = styles

    return (
        <View style={parent}>
           <Text style={heading}>Signup</Text>
           <Text style={inputtext}>Email</Text>
           <TextInput style={input} placeholder="Email" keyboardType="email-address" onChangeText={(text)=>this.validate(text)} value={this.state.email}/>
           <Text style={inputtext}>Password</Text>
          <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text=>this.setState({password:text})}/>
        
        
          <Button style={btn} title={"Sign-in"} onPress={_ => this.checkLogin()}/>
        
        </View>






    )







  }


}

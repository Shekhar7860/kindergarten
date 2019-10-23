import React, { Component} from 'react'
import {View, Text,TextInput, Image, TouchableOpacity, Picker} from 'react-native'
import styles from "../styles/styles";
import { Dropdown } from 'react-native-material-dropdown';
export default class SelectItems extends Component {
   this.state = {
      city : "",
      Istate : "",
      country : ""
    }
    goToPage = (page) => {
       if(this.state.city && this.state.Istate && this.state.country)
      {
         this.props.navigation.navigate(page)
      }
      else
      {
        if(this.state.city == "" && this.state.Istate == "" &&  this.state.country == "" ) {
             Alert.alert("please select all fields")
        }
        if(this.state.city == "")
        {
            Alert.alert("please select city")
        }
         if(this.state.Istate == "")
        {
            Alert.alert("please select state")
        }
         if(this.state.country == "")
        {
            Alert.alert("please select country")
        }
         
      }
    }
render () { 
    let data = [{
        value: 'Australia',
      }, {
        value: 'New Zealand',
      }, {
        value: 'India',
      }];
      let data2 = [{
        value: 'Punjab',
      }, {
        value: 'West Bengal',
      }, {
        value: 'Uttar Pradesh',
      }];
      let data3 = [{
        value: 'Patiala',
      }, {
        value: 'Mohali',
      }, {
        value: 'Ludhiana',
      }];
return (<View>
      <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <View style={{marginTop:10}}>
    <Dropdown
    containerStyle={styles.dropDown}
    onChangeText(value => this.setState({ country:value})}
        label='Country'
        data={data}
      />
       <Dropdown
        onChangeText(value => this.setState({ istate:value})}
    containerStyle={styles.dropDown}
        label='State'
        data={data2}
      />
       <Dropdown
      onChangeText(value => this.setState({ city:value})}
    containerStyle={styles.dropDown}
        label='City'
        data={data3}
      />
   
   
    <TouchableOpacity style={styles.buttonBackgroundNext}>
        <Text onPress={this.goToPage.bind(this, 'Home')} style={styles.welcomeLoginText}>Next</Text>
        </TouchableOpacity>
        
        </View></View>)} 
      
}
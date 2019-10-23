import React, { Component} from 'react'
import {View, Text, Image,TextInput, dimensions,  TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import {  Card, Divider, SearchBar, List, ListItem  } from 'react-native-elements';
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
export default class Home extends Component {
<<<<<<< HEAD
=======

>>>>>>> jj23oct
  constructor (props) {
    super (props)
    this.state = {
      listView : true,
      mapView : false
    }
  }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
<<<<<<< HEAD
    setView = (val) => {
    if(val == "list" ) {
      this.setState({mapView: false, listView: true}) 
    }else{
      this.setState({mapView: true, listView: false}) 
      }
    
  }
=======

    setView = (val) => {
      if(val == "list" ) {
        this.setState({mapView: false, listView: true}) 
      }else{
        this.setState({mapView: true, listView: false}) 
        }
      }
    componentDidMount = () => {
      console.log('im working')
      Geolocation.requestAuthorization();
      // Geolocation.getCurrentPosition(info => this.sendLocation(info));
      Geolocation.getCurrentPosition(
        (position) => {
          console.log('Position -> ',position);
        },
        (error) => console.log(error, 'error')
        
    );
    }
   
    sendLocation = (info) => {
  console.log(info, 'info')
    }
>>>>>>> jj23oct
render () { 
return (<View style={styles.container}>
     <SearchBar
          placeholder="Search Products..."
          lightTheme
          round
          
          autoCorrect={false}
          
        />
<<<<<<< HEAD
      <View style={{backgroundColor:"white" ,width:'100%',height:50,marginLeft:0,flexDirection:"row",justifyContent: "center",alignItems: "center"}}>
=======
         <View style={{backgroundColor:"white" ,width:'100%',height:50,marginLeft:0,flexDirection:"row",justifyContent: "center",alignItems: "center"}}>
>>>>>>> jj23oct
<TouchableOpacity onPress={this.setView.bind(this, 'list')} style={{backgroundColor:this.state.listView == true ? "'#e84393" : "white",width:"50%",height:48,justifyContent:"center",alignItems:"center",marginTop:2}}>
<View>
<Text style={{color: this.state.listView == true ? "white" : "black" }}>ListView</Text>
</View>
</TouchableOpacity>
<TouchableOpacity  onPress={this.setView.bind(this, 'map')} style={{backgroundColor:this.state.mapView == true ? "'#e84393" : "white",width:"50%",height:48,justifyContent:"center",alignItems:"center",marginTop:2}}>
<Text style={{color: this.state.mapView == true ? "white" : "black"}}>MapView</Text>
</TouchableOpacity>

</View>
<<<<<<< HEAD
{this.state.listView ? <Text>I am ListView</Text> : <Text>I am mapView</Text>}
=======
{this.state.listView ? <Text>I am ListView</Text> : <MapView
  style={{  height: 400,
    width: 400}}
    zoomEnabled={true}
initialRegion={{
  latitude:30.7046,
  longitude:76.7179,
  latitudeDelta: 1,
  longitudeDelta: 1,
}}
/>}
    
      
>>>>>>> jj23oct
    </View>)} 
      
}
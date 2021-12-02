import { View,Text} from "react-native-animatable";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUp=({navigation})=>{
return(
    <View>
        <Text>hi</Text>
      
        <TouchableOpacity 
              onPress={()=>{navigation.navigate('login')}}
             style={{width:60,height:50,backgroundColor:'#2e64e5',marginLeft:4,outline:'none',borderRadius:20,borderWidth:1}}>
               <Text style={{color:"#ffff",textAlign:"center",fontWeight:"bold",paddingTop:10}}>back</Text>
              
             </TouchableOpacity>
        </View>
)
}

export default SignUp;
import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStyles } from '../../AppStyles';
import 'react-native-gesture-handler'
import Orientation from 'react-native-orientation-locker';
import { useNavigation, DrawerActions, useFocusEffect, NavigationContainer } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,View,TouchableOpacity,Image,ImageBackground } from 'react-native';

const Dashboard=()=>{
const {navigate}=useNavigation()

useFocusEffect(

React.useCallback(() => {

Orientation.lockToPortrait();

}, [])
);

return(

<SafeAreaView>

<View style={{backgroundColor:AppStyles.color.white}}>

<ImageBackground style={styles.picture} source={require('../../assets/background-pics/2.jpg')} resizeMode='cover'>

<View style={{alignItems:'center',marginTop:8}}>
<Image resizeMode='contain' source={require('../../assets/background-pics/sm-builders.png')} style={{width:wp('75%'),height:hp('16%')}}></Image>

</View>

<View style={{alignItems:'center',marginTop:hp('7%')}}>

<Text style={styles.title}>Main Menu</Text> 

<View style={{flexDirection:'row'}}>
<TouchableOpacity style={[styles.loginContainer]} onPress={()=>navigate('Receiving')}><Text style={styles.bttext}>Daily Receivings</Text></TouchableOpacity>
<TouchableOpacity  style={styles.loginContainer} onPress={()=>navigate('Exp')}><Text style={styles.bttext}>Daily Expenses</Text></TouchableOpacity>
</View>

<View style={{flexDirection:'row'}}>
<TouchableOpacity   style={styles.loginContainer} onPress={()=>navigate('VacantList')}><Text style={styles.bttext}>Vacant List</Text></TouchableOpacity>
<TouchableOpacity   style={styles.loginContainer} onPress={()=>navigate('Cumulative')}><Text style={styles.bttext}>Commulative Summary</Text></TouchableOpacity>
</View>

<View style={{flexDirection:'row'}}>
<TouchableOpacity   style={styles.loginContainer} onPress={()=>navigate('CancelSummary')}><Text style={styles.bttext}>Cancel Summary</Text></TouchableOpacity>
<TouchableOpacity   style={styles.loginContainer} onPress={()=>navigate('AccountLedger')}><Text style={styles.bttext}>Account Ledger</Text></TouchableOpacity>
</View>

<View style={{flexDirection:'row'}}>

<TouchableOpacity   style={styles.loginContainer} onPress={()=>navigate('SearchCommulative')}><Text style={styles.bttext}>Search Customer</Text></TouchableOpacity>
<TouchableOpacity  style={styles.loginContainer} onPress={()=>navigate('Login')}><Text style={styles.bttext}>Sign Out</Text></TouchableOpacity>

</View>


</View>

{/* <View style={{alignItems:'center',marginTop:hp('23%')}}>
<Text style={{textAlign:'center',color:"white",fontSize:20,fontFamily:'calibri'}}>
Powered By
</Text>
<Image style={{width:wp('60%'),height:hp('10%')}} resizeMode='center' source={require('../../assets/background-pics/mainlogo.jpg')}></Image>
</View> */}

</ImageBackground>

</View>
</SafeAreaView>
)

}

const styles = StyleSheet.create({
sectionContainer: {
marginTop: 32,
paddingHorizontal: 24,
},
sectionTitle: {
fontSize: 24,
fontWeight: '600',
},
sectionDescription: {
marginTop: 8,
fontSize: 18,
fontWeight: '400',
},
title: {
fontSize: 27,
color: "white",
marginBottom: 15,
fontFamily: 'calibri',
alignItems: 'center',
textAlign: 'center',
},
picture: {
height: hp('100%'),
width: wp('100%')
},
loginContainer: {
width: wp('46%'),
backgroundColor: AppStyles.color.tcgc_blue,
borderRadius: 10,
padding: 5,
marginTop: 10,
height:hp('5%'),
marginLeft:7,
marginRight:7
},
highlight: {
fontWeight: '700',
},
bttext:{
alignItems:'center',
// marginTop:hp('1%'),
color:AppStyles.color.white,
textAlign:'center',
fontFamily: 'calibri',
fontSize:18

}
});

export default Dashboard
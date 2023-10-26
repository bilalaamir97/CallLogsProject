import 'react-native-gesture-handler';
import Orientation from 'react-native-orientation-locker';
import { useNavigation, DrawerActions, useFocusEffect, NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';

import { Linking,FlatList,ToastAndroid,View, Text, StyleSheet, Image, TextInput, ImageBackground,Button, Alert ,TouchableOpacity, PermissionsAndroid } 
from 'react-native';

import PasswordIcon from '../../components/Password_icon';
import AsyncStorage from '@react-native-community/async-storage';
import { AppStyles } from '../../AppStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import InputNew from '../../components/InputNew';
import DeviceInfo from 'react-native-device-info';
import User_Icon from '../../components/user_Icon';
import CallLogs from 'react-native-call-log';


const Login = () => {
const [form, setForm] = useState({});
const [errors, setErrors] = useState({});
const [listData, setListDate] = useState([]);

useFocusEffect(

React.useCallback(() => {

Orientation.lockToPortrait();

form.name = "USMAN";
form.password = "12345";

}, [])
);

const onChange = ({ name, value }) => {

setForm({ ...form, [name]: value });

if (value !== '') {

setErrors((prev) => {
return { ...prev, [name]: null };
});

}
else {

setErrors((prev) => {
return { ...prev, [name]: 'This field is required' }
});

}

}

const OnSubmit = async () => {


let msg = "test message";
let phoneWithCountryCode = "923121045958";

let mobile =
Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
if (mobile) {
if (msg) {
let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
Linking.openURL(url)
.then(data => {
console.log("WhatsApp Opened");
})
.catch(() => {
alert("Make sure WhatsApp installed on your device");
});
} else {
alert("Please insert message to send");
}
} else {
alert("Please insert mobile no");
}

return;

try {
const granted = await PermissionsAndroid.request(
PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
{
title: 'Call Log Example',
message:
'Access your call logs',
buttonNeutral: 'Ask Me Later',
buttonNegative: 'Cancel',
buttonPositive: 'OK',
}
)
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
console.log(CallLogs);

CallLogs.loadAll().then((c) => setListDate(c));
CallLogs.load(5).then(c => console.log(c));

} else {
console.log('Call Log permission denied');
}
}
catch (e) {
console.log(e);
}


}


const OnSubmitNew = async () => {


let msg = "test message";
let phoneWithCountryCode = "923332323402";

let mobile =
Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
if (mobile) {
if (msg) {
let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
Linking.openURL(url)
.then(data => {
console.log("WhatsApp Opened");
})
.catch(() => {
alert("Make sure WhatsApp installed on your device");
});
} else {
alert("Please insert message to send");
}
} else {
alert("Please insert mobile no");
}


}


const storeData = async (userid) => {

try {

await AsyncStorage.setItem('@userid', userid)
console.log("details",userid)
} catch (e) {

}
}


const { navigate } = useNavigation();
const [isSecureEntry, setIsSecureEntry] = useState(true);

const ItemView = ({item}) => {
return (
// FlatList Item
<View>
<Text style={styles.textStyle}>
Name : {item.name ? item.name : 'NA'}
{'\n'}
DateTime : {item.dateTime}
{'\n'}
Country : {item.country}
{'\n'}
Duration : {item.duration}
{'\n'}
PhoneNumber : {item.phoneNumber}
{'\n'}
RawType : {item.rawType}
{'\n'}
Timestamp : {item.timestamp}
{'\n'}
Type : {item.type}
</Text>
</View>
);
};

const ItemSeparatorView = () => {
return (
// FlatList Item Separator
<View
style={{
height: 0.5,
width: '100%',
backgroundColor: '#C8C8C8',
}}
/>
);
};



return (

<View style={styles.setting}>

<ImageBackground style={styles.picture} source={require('../../assets/background-pics/2.jpg')} resizeMode='cover'>

<FlatList
data={listData}
//data defined in constructor
ItemSeparatorComponent={ItemSeparatorView}
//Item Separator View
renderItem={ItemView}
keyExtractor={(item, index) => index.toString()}
/>

<View style={{ alignItems: 'center' }}>


{/* <View style={{marginTop:hp('-20%')}}>
<TouchableOpacity style={styles.loginContainer} onPress={OnSubmit}>
<Text style={{color:AppStyles.color.white,textAlign:'center',fontSize:20,fontFamily:'calibri'}}>Show Call Logs</Text></TouchableOpacity>
</View> */}

<View style={{marginTop:hp('-20%')}}>
<TouchableOpacity style={styles.loginContainer} onPress={OnSubmit}>
<Text style={{color:AppStyles.color.white,textAlign:'center',fontSize:20,fontFamily:'calibri'}}>Send Message Whatsapp</Text></TouchableOpacity>
</View>

<View style={{marginTop:hp('-20%')}}>
<TouchableOpacity style={styles.loginContainer} onPress={OnSubmitNew}>
<Text style={{color:AppStyles.color.white,textAlign:'center',fontSize:20,fontFamily:'calibri'}}>Send Message Whatsapp Invite</Text></TouchableOpacity>
</View>

{/* <View style={{marginTop:hp('15%')}}>
<Text style={{textAlign:'center',color:"white",fontSize:20,fontFamily:'calibri'}}>
Powered By
</Text>
<Image style={{width:wp('60%'),height:hp('10%')}} resizeMode='center' source={require('../../assets/background-pics/mainlogo.jpg')}></Image>
</View> */}

</View>

</ImageBackground>

</View>
);

};

const styles = StyleSheet.create({


container: {
flex: 1,
alignItems: 'center',
backgroundColor: AppStyles.color.check,
width: wp('100%'),
height: hp('100%')
},
or: {
color: 'black',
marginTop: 40,
marginBottom: 10,
},
title: {
fontSize: 26,
color: "white",
marginBottom: 15,
fontFamily: 'calibri',
alignItems: 'center',
textAlign: 'center',

// fontFamily: 'calibri',

},
leftTitle: {
alignSelf: 'stretch',
textAlign: 'left',
marginLeft: 20,
// fontFamily: 'calibri'
},
content: {
paddingLeft: 50,
paddingRight: 50,
textAlign: 'center',
fontSize: AppStyles.fontSize.content,
color: AppStyles.color.text,
},
loginContainer: {
width: wp('75%'),
backgroundColor: AppStyles.color.tcgc_blue,
borderRadius: 10,
padding: 5,
marginTop: 10,
fontFamily: 'calibri',
height:hp('6%')
},
textStyle: {
color: AppStyles.color.white,
},
loginText: {
color: AppStyles.color.white,
fontFamily: 'calibri',
fontSize: 18,
},
placeholder: {
color: 'red',
},
InputContainer: {
width: AppStyles.textInputWidth.main,
marginTop: 30,
borderWidth: 1,
borderStyle: 'solid',
borderColor: "white",
borderRadius: 10,
//fontFamily: '
},
body: {
//height: 42,
paddingLeft: 20,
paddingRight: 20,
color: "white",
borderRadius: 10,
borderStyle: 'solid',
fontFamily: 'calibri',
fontSize: 16,
},
facebookContainer: {
width: 192,
backgroundColor: AppStyles.color.facebook,
borderRadius: 10,
padding: 10,
marginTop: 30,
},
facebookText: {
color: AppStyles.color.white,
},
googleContainer: {
width: 192,
height: 48,
marginTop: 30,
},
googleText: {
color: AppStyles.color.white,
},
picture: {
height: hp('100%'),
width: wp('100%')
},
picture2: {
height: hp('25%'),
width: wp('100%'),
marginTop: hp('10%')
},
setting: {
alignItems: 'center',
height:hp('100%'),
// marginTop:hp('3%'),
marginBottom:hp('5%'),
backgroundColor:AppStyles.color.white
},
LoginIn: {
//    marginTop:hp('40%')
},

Ani: {
width: wp('80%'),
height: hp('40%')
},

});


export default Login;

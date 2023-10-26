import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/colors';
import { AppStyles } from '../../AppStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

wrapper:
{
height: hp('6%'),
width: wp('75%'),
borderWidth: 1,
borderRadius: 10,
paddingHorizontal: 5,
// marginTop: 5,
fontFamily: 'calibri',
color: "white",
paddingLeft: 5,
borderColor : "white",
// marginBottom:hp('1%')
},
inputContainer: {
paddingTop: 16,
fontFamily: 'calibri',
color: "white",
borderRadius: 10
},
TextInput:
{
flex: 1,
//backgroundColor: 'red',
width: '100%',
fontFamily: 'calibri',
color: "white",
borderRadius: 10,
borderStyle: 'solid',
fontSize: 19,
},
error: {
color: "white",
paddingTop: 4,
fontSize: 17,
fontFamily: 'calibri',
},

});
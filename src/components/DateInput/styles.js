import { StyleSheet } from 'react-native';
import { AppStyles } from '../../AppStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({

wrapper:
{
height:hp('6%'),
width:wp('75%'),
borderWidth: 1,
borderRadius:AppStyles.borderRadius.main,
paddingHorizontal: 5,
marginTop: 5,
fontFamily: 'calibri',
color:AppStyles.color.grey,
backgroundColor:AppStyles.color.white,

},
inputContainer: {
paddingTop: 8,
fontFamily: 'calibri',
color:AppStyles.color.white,
borderRadius:AppStyles.borderRadius.main,
marginLeft:-12,
width:wp('96%'),

},
TextInput:
{
flex: 1,
backgroundColor: AppStyles.color.white,
//width: '100%',
fontFamily: 'calibri',
color:AppStyles.color.white,
borderRadius:25,
borderStyle:'solid',
//paddingLeft: -14,
//marginLeft: -28,

},
error:{
color: AppStyles.color.white,
// paddingTop: 4,
fontSize: 14,
fontFamily: 'calibri',
},

});
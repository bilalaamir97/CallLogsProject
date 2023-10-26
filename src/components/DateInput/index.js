import React from 'react';
import { View,Text,TextInput } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppStyles } from '../../AppStyles'
import DatePicker from 'react-native-datepicker'

const DateInput = ({onDateChange,iconPosition,icon,style,date,label,error,...props}) => {
///////////////////////////////////////////////////////////////////////////

const [focused, setFocused] = React.useState(false);

const getFlexDirection = () => {

if(icon && iconPosition)
{
////////
if(iconPosition === 'left')
{
return 'row';    
}
////////
else if(iconPosition === 'right')
{
////
return  'row-reverse';
////
}
}

};

///////////////////////////////////////////////

const getBorderColor = () =>
{

if(focused)
{
return AppStyles.color.pimain;   
}
if(error)
{
return AppStyles.color.white;
}
else
{
return AppStyles.color.white;
}

};

///////////////////////////////////////////////////////////////////////////
return (    

<TouchableOpacity style={styles.inputContainer}>

{label  && <Text style={{color:AppStyles.color.white,fontSize: 17.5, }}>{label}</Text>}

<View style={[styles.wrapper, {alignItems: icon ? 'right' : 'baseline'},
{borderColor:getBorderColor(), flexDirection: getFlexDirection()}]}>

<View>{icon && icon}</View>

<DatePicker style={[styles.TextInput,style]} onDateChange={onDateChange} date={date} 
onFocus={() => {setFocused(true); }} onBlur={()=>{setFocused(false);}} {...props} />

{/* <DatePicker
style={{width: 200}}
date={selectDate.date_of_birth}
mode="date"
placeholder="Select Date"
format="DD-MM-YYYY"
minDate="01-05-2016"
maxDate="01-06-2016"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
onDateChange={(date) => {setDate({date_of_birth: date})}} />
 */}

</View>

{error && <Text style={styles.error}>{error}</Text>}

</TouchableOpacity>

);

};

export default DateInput;

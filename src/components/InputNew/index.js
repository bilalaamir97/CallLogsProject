import React from 'react';
import { View, Text, TextInput, ImageBackground, Image } from 'react-native';
import styles from './styles';
import colors from '../../assets/theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppStyles } from '../../AppStyles';

const InputNew = ({ onChangeText, iconPosition, icon,image ,style, value, label, error, ...props }) => {
///////////////////////////////////////////////////////////////////////////

const [focused, setFocused] = React.useState(false);

const getFlexDirection = () => {

if (icon && iconPosition) {
////////
if (iconPosition === 'left') {
return 'row';
}
////////
else if (iconPosition === 'right') {
////
return 'row-reverse';
////
}
}

};

///////////////////////////////////////////////

const getBorderColor = () => {

if (focused) {
return AppStyles.color.tcgc_blue;
}
if (error) {
return AppStyles.color.double;
}
else {
return AppStyles.color.tcgc_blue;
}

};

///////////////////////////////////////////////////////////////////////////
return (

<TouchableOpacity style={styles.inputContainer}>

{label && <Text style={{ color: AppStyles.color.white, fontSize: 18,  }}>{label}</Text>}

<View style={[styles.wrapper, { alignItems: icon ? 'center' : 'baseline' },
{ borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
           
<TextInput style={[styles.TextInput, style]} onChangeText={onChangeText} value={value}
placeholderTextColor="#0e8ef0"
onFocus={() => { setFocused(true); }} onBlur={() => { setFocused(false); }} {...props} />
            <View>{image && image}</View>
           </View>

{error && <Text style={styles.error}>{error}</Text>}

</TouchableOpacity>

);

};

export default InputNew;

import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, setState, Component, Props } from 'react';
import { View, Text, TextInput, Image, Picker,ImageBackground,ScrollView } from 'react-native';

import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';


const ChangePassword = () => {

const { navigate } = useNavigation();
const [form, setForm] = useState({});
const [errors, setErrors] = useState({});
const [selectdata, setData] = useState(0);
const [isSecureEntry, setIsSecureEntry] = useState(true);
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

const onRegistration = async () => {

if (!selectdata.cnicno) {
setErrors((prev) => {
return { ...prev, cnicno: 'No Cnic Found' }
});
return;
}
else {
setErrors((prev) => {
return { ...prev, cnicno: null }
});
}

if (!form.new_password) {
setErrors((prev) => {
return { ...prev, new_password: 'Please Enter New Password' }
});
return;
}
else {
setErrors((prev) => {
return { ...prev, new_password: null }
});
}

if (!form.old_password) {
setErrors((prev) => {
return { ...prev, old_password: 'Please Enter Old Password' }
});
return;
}
else {
setErrors((prev) => {
return { ...prev, old_password: null }
});
}

if (!form.confirm_new_password) {
setErrors((prev) => {
return { ...prev, confirm_new_password: 'Please Confirm Your New Password' }
});
return;
}
else {
setErrors((prev) => {
return { ...prev, confirm_new_password: null }
});
}

var RegistrationApiUrl = "http://portal.remscloudonline.com/php/react_rems_shams_services/change_password";

var headers = {
'Accept': 'application/json',
'Content-Type': 'application.json'
};

var data = {

cnic: selectdata.cnicno,
oldpassword: form.old_password,
newpassword: form.new_password,
confirmpassword: form.confirm_new_password,

};

fetch(RegistrationApiUrl,
{
method: 'POST',
headers: headers,
body: JSON.stringify(data)
}
)
.then((response) => response.json())
.then((response) => {
//console.log(response);
alert(response[0].ErrorMessage);

if (response[0].ErrorMessage === 'Password Changed') {

navigate(HOME_NAVIGATOR);

}

})
.catch((error) => {
alert("Error" + error);
})

}
return(

    <View><Text>
        ok
    </Text></View>
)
}
export default ChangePassword;

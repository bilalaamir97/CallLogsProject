import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStyles } from '../../AppStyles';
import 'react-native-gesture-handler'
import RNDateTimePicker, { DateTimePickerAndroid, } from '@react-native-community/datetimepicker';
import { DataTable } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker';
//import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import AnimatedLoader from "react-native-animated-loader";

import {
SafeAreaView,
ScrollView,
StyleSheet,
Text,
View,
ImageBackground, 
TouchableOpacity,Image,NetI
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
const Receivings=()=>{
const [selectedLanguage, setSelectedLanguage] = useState('')
const [project, setProject] = useState([]);

const [visible, setVisible] = useState(false);

//useEffect(() => {
//setInterval(() => {
//}, 9000);
//}, []);

useEffect(() => {

//setVisible(visible);
Orientation.lockToPortrait(); 

getData();

} ,[0])

const getData = async () => {

try {

fetch('http://demo.remscloudonline.com/sm_builders/rems_app_baj_services/select_project')
.then(resp => resp.json())
.then(resp => setProject(resp))

} catch (e) {

}
}

const [date, setDate] = useState(new Date());
const [show, setShow] = useState(false);
const [dateF,SetDateF]=useState(new Date())
const [showF,setShowF]=useState(false)

const onChange = (event, selectedDate) => {
const currentDate = selectedDate;
setDate(currentDate);
console.log("DATE",selectedDate);
setShow(false);

};

const onChangeF = (event, selectedDate) => {
const currentDate = selectedDate;
SetDateF(currentDate);
setShowF(false);
console.log("DATE",dateF)
};


const showMode = (currentMode) => {
DateTimePickerAndroid.open({
value: date,
onChange,
mode: currentMode,
is24Hour: false,

});
};

const showDatepicker = () => {
showMode('date');

};

const showDatepickerF = () => {

setShowF(true)

};

const [data,SetData]=useState([]) 

function AccountD1() {

setVisible(!visible);
    
//alert(reg_num);
var url='http://demo.remscloudonline.com/sm_builders/rems_app_baj_services/view_receivings?project='+selectedLanguage+'&from_date='+
date+'&to_date='+dateF

console.log(url)
fetch(url)
.then(resp => resp.json())

.then(resp => { 
    
setVisible(visible);
SetData(resp);     
//console.log(data);
console.log("Data Loaded");

}
)

//setVisible(!visible);
// .then(resp => setCustomerData(resp))

}

function Populate() {
return data.map((element => {
return (

<DataTable.Row key={element.SNO}>

{element.SNO == 'TOTAL'? <DataTable.Cell style={styles.cell} >
<Text style={styles.textspecial_total}>{element.SNO}</Text>
</DataTable.Cell>
: <DataTable.Cell style={styles.cell} >
<Text style={styles.textspecial1}>{element.SNO}</Text>
</DataTable.Cell>
}

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.SALE_ID}</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell_customer}>
<Text style={styles.textspecial1}>{element.CUSTOMER}</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.ITEM_DESC}</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.REC_DATE}</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.RECEIPT_NO}</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.CHEAQUE_NO}</Text>

</DataTable.Cell>

<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.CHEAQUE_DATE}</Text>
</DataTable.Cell>

{element.SNO == 'TOTAL'? 
<DataTable.Cell  style={styles.cell}>
<Text style={styles.textspecial_total}>{element.AMOUNT}</Text>
</DataTable.Cell>

: 
<DataTable.Cell style={styles.cell}>
<Text style={styles.textspecial1}>{element.AMOUNT}</Text>
</DataTable.Cell>

}

{/* <DataTable.Cell  style={styles.cell}>
<Text style={styles.textspecial1}>{element.PROJECT_ID}</Text>
</DataTable.Cell> */}

</DataTable.Row>

)
}))
}

return(


<SafeAreaView>

<View style={{backgroundColor:AppStyles.color.white}}>

<ImageBackground style={styles.picture} source={require('../../assets/background-pics/2.jpg')} resizeMode='cover'>

<View style={{alignItems:'center',marginTop:8}}>

<AnimatedLoader
visible={visible}
overlayColor="rgba(255,255,255,0.75)"
animationStyle={styles.lottie}
speed={1}>
<Text>Loading</Text>
</AnimatedLoader>

{/* <Bubbles size={10} color="#FFF" style="" />
<Bars size={20} color="#FDAAFF" />
<Pulse size={20} color="#52AB42" />
<DoubleBounce size={20} color="#1CAFF6" /> */}

<Image resizeMode='contain' source={require('../../assets/background-pics/sm-builders.png')} style={{width:wp('55%'),height:hp('13%')}}></Image>
</View>


<View style={{marginTop:hp('1%')}}>
{show && (
<RNDateTimePicker
testID="dateTimePicker"
value={date}
mode='date'
themeVariant='light'
is24Hour={false}
onChange={onChange}

/>)}
{showF && (
<RNDateTimePicker
testID="dateTimePicker"
value={dateF}
mode='date'
themeVariant='light'

is24Hour={false}
onChange={onChangeF}

/>)}
<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row'}}>

<TouchableOpacity onPress={showDatepicker} style={styles.button}>
<Text style={styles.bttext}>From Date: {date.toLocaleDateString()}</Text>
{/* <Text style={styles.bttext}></Text> */}
</TouchableOpacity>
<TouchableOpacity onPress={showDatepickerF} style={styles.button}>
<Text style={styles.bttext}>To Date: {dateF.toLocaleDateString()}</Text>
</TouchableOpacity>
</View>
<View style={{alignItems:'center'}}>
<View style={{alignItems:'center',backgroundColor:AppStyles.color.tcgc_blue,borderRadius:10,width:('85%'),marginBottom:hp('2%')}}>

<Picker
style={{width:wp('85%'),color:AppStyles.color.white,height:hp('6.8%'),marginTop:hp('-2%')}}
mode='dropdown'
selectedValue={selectedLanguage}
dropdownIconColor={AppStyles.color.white}
onValueChange={(value)=>setSelectedLanguage(value) }>
<Picker.Item style={{fontFamily:'Calibri'}} label="Select Project" value="0" />

{
project.map((prj) => {
return (<Picker.Item  key={prj.PROJECT_ID} label={prj.PROJECT} value={prj.PROJECT_ID} />)
})
}

{/* <Picker.Item label="JavaScript" value="js" /> */}
{/* </SmartPicker> */}
</Picker>
</View>
</View>
<TouchableOpacity onPress={()=>AccountD1()} style={styles.button}>
<Text style={styles.bttext}>View Report</Text>
</TouchableOpacity>
</View>
</View>
<View>
<View style={{alignItems:'center'}}>
<Text style={{fontFamily:'calibri',fontSize:25,color:"white"}}> Daily Receivings</Text>
</View>

</View>

<ScrollView horizontal={true}>

<DataTable>

<DataTable.Row>

<DataTable.Cell style={styles.cell}  >
<Text style={styles.textspecial1}>SNo</Text>
</DataTable.Cell>

<DataTable.Cell style={styles.cell}  >
<Text style={styles.textspecial1}>SALE ID</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>CUSTOMER</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>UNIT</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>RECEIVE DATE</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>RECEIPT NO</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>CHEQUE NO</Text>

</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>CHEQUE DATE</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>AMOUNT</Text>
</DataTable.Cell>
</DataTable.Row>

<ScrollView style={{marginBottom:hp('5%')}} vertical={true}>

{Populate()}

</ScrollView>
</DataTable>

</ScrollView>


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

loginContainer: {
width: wp('65%'),
backgroundColor: AppStyles.color.tcgc_blue,
borderRadius: 25,
padding: 5,
marginTop: 10,
height:hp('7%')
},
button:{
width:wp('40%'),
height:hp('5%'),
backgroundColor:AppStyles.color.tcgc_blue,
borderRadius:10,
margin:hp('1%')
},
bttext:{    
alignItems:'center',
marginTop:hp('.8%'),
color:AppStyles.color.white,
textAlign:'center',
fontSize:16,
fontFamily:'calibri'
}, 
highlight: {
fontWeight: '700',
},
bodyDatePicker: {
height: 22,
color: AppStyles.color.categoryTitle,
// borderRadius: AppStyles.borderRadius.main,
borderStyle: 'solid',
//fontFamily: 'calibri',
fontSize:16,
},

cell:
{
//borderWidth: 0.2,
//borderRadius: 4,
borderBottomWidth: 2,
//borderRadius: 4,
borderColor: "white", 
width: 140,
height:50,
fontFamily:'calibri',
alignItems:'center',
color:"white",
textAlign:'right',
justifyContent:'center'

},

cell_customer:
{
borderBottomWidth: 2,    
//borderWidth: 0.2,
//borderRadius: 4,
borderColor: "white", 
width: 300,
height:50,
fontFamily:'calibri',
alignItems:'center',
color:"white",
textAlign:'right',
justifyContent:'center'

},
cellnumber:
{
//borderWidth: 0.2,
//borderRadius: 4,
borderBottomWidth: 2,
fontFamily:'calibri',
borderColor: "white", 
width: 140,
height:50

},

picture: {
height: hp('100%'),
width: wp('100%')
},
overlay:
{
backgroundColor: `#f5f5dc`,
flex: 1

},
textspecial:{

fontSize: 16,
fontFamily: 'calibri',
width: 130,
color: "white",

},
textspecial1: {

fontSize: 16,
fontFamily: 'calibri',
width: 130,
color: "white",
textAlign:'center',
justifyContent:'center',
alignItems:'center',
alignContent:'center'

},
textspecial_total: {

fontSize: 22,
fontFamily: 'calibri',
width: 130,
color: "white",
textAlign:'center',
justifyContent:'center',
alignItems:'center',
alignContent:'center'

},
lottie: {
width: 100,
height: 100,
}

});

export default Receivings
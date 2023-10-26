import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AppStyles } from '../../AppStyles';
import 'react-native-gesture-handler'
import InputNew from '../../components/InputNew';
import AnimatedLoader from "react-native-animated-loader";


import {
SafeAreaView,
ScrollView,
StyleSheet,
Text,
View,
ImageBackground,
TouchableOpacity,Image} from 'react-native';
import { DataTable } from "react-native-paper";
import {Picker} from '@react-native-picker/picker';

const SearchCommulative=()=>{

const [selectedLanguage, setSelectedLanguage] = useState('')
const [project, setProject] = useState([]);
const [errors, setErrors] = useState({});
const [visible, setVisible] = useState(false);

const [form, setForm] = useState({});

useEffect(() => {

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

const onChange=({name,value}) => {

setForm({...form, [name]: value });

if(value !== '')
{
setErrors((prev) => {
return {...prev,[name]:null};    
});        

}
else
{
setErrors((prev) => {
return {...prev,[name]: 'This field is required' }
});

}

}  
const [data,SetData]=useState([]) 

function AccountD1() {

//alert(form.search_field);

setVisible(!visible);


var url ='http://demo.remscloudonline.com/sm_builders/rems_app_baj_services/search_commulative_summary?search_field='+form.search_field
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

}

function Populate() {
return data.map((element => {
return (

<DataTable.Row key={element.UNIT}>

<DataTable.Cell style={styles.cell} >
<Text style={styles.textspecial1}>{element.SNO}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>{element.PROJECT_DESC}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>{element.BLOCK_DESC}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>{element.UNIT}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>{element.CUSTOMER}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>{element.BOOKING_DATE}</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>{element.LAST_PAYMENT}</Text>
</DataTable.Cell>
 
<DataTable.Cell  style={styles.cell}>
<Text style={styles.textspecial1}>{element.RECEIVABLE}</Text>
</DataTable.Cell>

<DataTable.Cell  style={styles.cell}>
<Text style={styles.textspecial1}>{element.RECEIVED}</Text>
</DataTable.Cell>

<DataTable.Cell  style={styles.cell}>
<Text style={styles.textspecial1}>{element.BALANCE}</Text>
</DataTable.Cell>

</DataTable.Row>

)
}))
}


return(

<SafeAreaView>

<View style={{backgroundColor:AppStyles.color.white,height:hp('100%')}}>

<ImageBackground style={styles.picture} source={require('../../assets/background-pics/2.jpg')} resizeMode='cover'>

<View style={{alignItems:'center',marginTop:8}}>

<AnimatedLoader
visible={visible}
overlayColor="rgba(255,255,255,0.75)"
animationStyle={styles.lottie}
speed={1}>
<Text>Loading</Text>
</AnimatedLoader>

<Image resizeMode='contain' source={require('../../assets/background-pics/sm-builders.png')} style={{width:wp('55%'),height:hp('13%')}}></Image>

</View>

<View style={{alignItems:'center',marginTop:hp('1%')}}>

<InputNew
style={styles.body}
placeholder="Search Customer, Unit, Cnic-No, Contact No"
//defaultValue="ADMIN"
onChangeText={(value) => {
onChange({ name: "search_field", value })
}}
placeholderTextColor={"white"}
underlineColorAndroid="transparent"
/>


<View style={{alignItems:'center',backgroundColor:AppStyles.color.tcgc_blue,borderRadius:10,width:('85%'),marginBottom:hp('1%')}}>


</View>

<TouchableOpacity onPress={()=>AccountD1()} style={styles.button}>
<Text style={styles.bttext}>Search </Text>
</TouchableOpacity>
</View>

<ScrollView horizontal={true}>

<DataTable>

<DataTable.Row>

<DataTable.Cell style={styles.cell}  >
<Text style={styles.textspecial1}>SNO</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>PROJECT</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>BLOCK</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>UNIT</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>CUSTOMER</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>BOOKING DATE</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell_customer}>
<Text style={styles.textspecial1}>LAST PAYMENT</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>RECEIVABLE</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>RECEIVED</Text>
</DataTable.Cell>

<DataTable.Cell centered style={styles.cell}>
<Text style={styles.textspecial1}>BALANCE</Text>
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

body: {
paddingLeft: 20,
paddingRight: 20,
color: "white",
borderRadius: 10,
borderStyle: 'solid',
fontFamily: 'calibri',
fontSize: 14.2,
},

bodyDatePicker: {
height: 22,
color: AppStyles.color.categoryTitle,
// borderRadius: AppStyles.borderRadius.main,
borderStyle: 'solid',
//fontFamily: 'calibri',
fontSize:16,
},

cell_account:
{
//borderWidth: 0.2,
//borderRadius: 4,
borderBottomWidth: 2,
borderColor: "white", 
width: 320,
height:50,
fontFamily:'calibri',
alignItems:'center',
color:"white",
textAlign:'right',
justifyContent:'center'

},

cell:
{
//borderWidth: 0.2,
//borderRadius: 4,
borderBottomWidth: 2,
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
//borderWidth: 0.2,
//borderRadius: 4,
borderBottomWidth: 2,
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

export default SearchCommulative
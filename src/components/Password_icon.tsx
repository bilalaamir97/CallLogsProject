import React from "react";
import {View,Text} from 'react-native'
import Svg,{Path} from 'react-native-svg'
import { AppStyles } from "../AppStyles";

const PasswordIcon =()=>{
    return(
        <Svg  width="12.447" height="17.785" viewBox="0 0 12.447 17.785">
            <Path id="Path_391" data-name="Path 391" d="M-60.613,80.812H-67.99a2.54,2.54,0,0,1-2.533-2.537V72.136A2.539,2.539,0,0,1-67.99,69.6h7.377a2.54,2.54,0,0,1,2.537,2.533v6.139A2.54,2.54,0,0,1-60.613,80.812Zm-7.377-9.044a.368.368,0,0,0-.368.368v6.139a.371.371,0,0,0,.368.372h7.377a.372.372,0,0,0,.372-.372V72.136a.369.369,0,0,0-.372-.368Z" transform="translate(70.523 -63.027)" fill={AppStyles.color.tcgc_blue} />
            <Path id="Path_392" data-name="Path 392" d="M-68.15,75.742h-2.165V73.409a5.331,5.331,0,0,1,5.321-5.325,5.329,5.329,0,0,1,5.321,5.325h-2.165a3.16,3.16,0,0,0-3.156-3.16,3.163,3.163,0,0,0-3.156,3.16Z" transform="translate(71.215 -68.084)" fill={AppStyles.color.tcgc_blue} />
        </Svg>
    )
}

export default PasswordIcon
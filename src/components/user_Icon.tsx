import React from "react";
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { AppStyles } from "../AppStyles";


const User_Icon = () => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="15.581" height="19.157" viewBox="0 0 15.581 19.157">
            {/* <g transform="translate(0)"> */}
                <Path id="Path_389" data-name="Path 389" d="M-64.3,69.381a6.231,6.231,0,0,1-6.221-6.225A6.23,6.23,0,0,1-64.3,56.934a6.231,6.231,0,0,1,6.225,6.221A6.232,6.232,0,0,1-64.3,69.381Zm0-10.282a4.059,4.059,0,0,0-4.057,4.057A4.06,4.06,0,0,0-64.3,67.216a4.064,4.064,0,0,0,4.061-4.061A4.063,4.063,0,0,0-64.3,59.1Z" transform="translate(72.09 -56.934)" fill={AppStyles.color.tcgc_blue} />
                <Path id="Path_390" data-name="Path 390" d="M-55.3,68.184H-70.885V67.1A7.8,7.8,0,0,1-63.1,59.309,7.8,7.8,0,0,1-55.3,67.1Zm-13.313-2.165h11.044A5.639,5.639,0,0,0-63.1,61.474,5.638,5.638,0,0,0-68.616,66.019Z" transform="translate(70.885 -49.027)" fill={AppStyles.color.tcgc_blue} />
            {/* </g> */}
        </Svg>

    )
}

export default User_Icon
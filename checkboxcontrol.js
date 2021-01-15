import React from 'react'
import CheckboxGroup from './CheckboxGroup'

function CheckboxControl(props){
const {conrol, ...rest }=props
return<CheckboxGroup {...rest}/>
}
export default CheckboxControl;
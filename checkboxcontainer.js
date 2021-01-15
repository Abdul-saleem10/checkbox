import React from 'react';
import{Formik,Form} from 'formik';
import * as Yup from 'yup';
import CheckboxControl from './checkboxcontrol';


function Checkboxcontainer(){
  const checkboxOptions =[
    {key:'1',value:'java'},
    {key:'2',value:'python'},
    {key:'3',value:'javascript'}
  ]


const initialValues={
  checkboxOption:[]
}

const validation= Yup.object({
  checkboxOption: Yup.array().required('Required')
})
 const onSubmit= values=>console.log('Form data',values)
return(
<Formik
initialValues = {initialValues}
validation={validation}
onSubmit = {onSubmit}
>
{Formik=>(
<Form>
  <CheckboxControl
   control = 'checkbox'
   label ='checkbox topics'
   name='checkboxOption'
   options = {checkboxOptions}/>
 

<button type='submit'onSubmit={onSubmit}>Submit</button>
</Form>
)}

</Formik>

)
}
export default Checkboxcontainer;
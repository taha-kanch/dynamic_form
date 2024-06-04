import React from 'react';
import { Textbox } from 'oolib';

const getFormAPI = () => {
return new Promise((resolve, reject) => {
fetch('/getForm').then(res => {
if(!res.ok) {
throw Error('Unable to fetch form fields, please try after sometime');
}
return res.json();
})
.then(formField => resolve(formField))
.catch(err => reject(err.message));
})
}

function App() {

const [formFields, setFormFields] = React.useState([]);
const [loading, setLoading] = React.useState(true);

React.useEffect(() => {
getFormAPI().then(
(data) => {
setFormFields(data.data || []);
setLoading(false);
},
(err) => {
alert(err);
}
);
},[]);

return (
<React.Fragment>

{
!loading ? (
formFields.length > 0 ? (

<Formik 
initialValues={{}}
onSubmit={handleSubmit}
>

{({ isSubmitting, resetForm, handleChange, values, setValues }) => (
<FormikForm>

{

formFields.map(fields => (

<FieldWrapper {...fields}/>

))

}

<Button
size="small"
type="secondary"
text="Submit"
iconBefore={undefined}
disabled={isSubmitting}
/>

</FormikForm>
)}

</Formik>

) : (
<p>Fields Not Found</p>
)
) : (
<h4>Loading....</h4>
)
}

</React.Fragment>
);

}

const FieldWrapper = (props) => {

if(props.comp == "TextInput") {
return (
<TextInputWrapper {...props}/>
)
}

if(props.comp == "ImageInput") {
return (
<ImageInputWrapper {...props}/>
)
}

if(props.comp == "DropdownSingle") {
return (
<DropdownSingleWrapper {...props}/>
)
}

if(props.comp == "CheckboxList") {
return (
<CheckboxListWrapper {...props}/>
)
}

if(props.comp == "RadioList") {
return (
<RadioListWrapper {...props}/>
)
}

if(props.comp == "VideoInput") {
return (
<VideoInputWrapper {...props}/>
)
}

if(props.comp == "DatePicker") {
return (
<DatePickerWrapper {...props}/>
)
}

if(props.comp == "PDFInput") {
return (
<PDFInputWrapper {...props}/>
)
}

}

const TextInputWrapper = (props) => {

return (
<GenInputStories
  Comp={function noRefCheck(){}}
  args={{
    id: {props.props.id}
    isRequired: {props.isRequired},
    label: {props.props.label},
    sublabel: {props.props.sublabel},
    readOnly: false,
    size: 'M',
    valuePath: {props.valuePath}
  }}
/>
);

}

const ImageInputWrapper = (props) => {

return (
<ImageInput_
  id={props.props.id}
  isRequired={props.isRequired}
  aspectRatio="5:2"
  containerShape="Rectangle"
  defaultImageSpread="Cover"
  dropzoneLabel="Add Image"
  dropzoneSublabel="Supports: <allowed formats>"
  enableCaptions
  size="Small"
  invert={props.props.invert}
  value: {props.valuePath}
/>
);

}

const DropDownSingleWrapper = (props) => {

return (
 <DropdownSingle
   id={props.props.id}
   isRequired={props.isRequired}
   value: {props.valuePath}
   label={props.props.label}
   options={props.props.options}
 />
)

}

const CheckboxListWrapper = (props) => {

return (
  <CheckboxList
    id={props.props.id}
    isRequired={props.isRequired}
    inputStyle="checkbox"
    listType="horizontal"
    onChange={function noRefCheck(){}}
    options={props.props.options}
    value={props.valuePath}
  />
)

}

const RadioListWrapper = (props) = {

return (

  <RadioList
    id={props.props.id}
    isRequired={props.isRequired}
    listType="horizontal"
    onChange={function noRefCheck(){}}
    options={props.props.options}
    value={props.valuePath}
  />

);

}

const DatePickerWrapper = (props) => {

return (
  <DatePicker
    id={props.props.id}
    isRequired={props.isRequired}
    label={props.props.label}
    onChange={function noRefCheck(){}}
    sublabel={props.props.sublabel}
    value={props.valuePath}
  />
)

}

const VideoInputWrapper = (props) => {

return (
    <VideoInput
      id={props.props.id}
      isRequired={props.isRequired}
      enableVideoUpload
      label={props.props.label}
      onChange={function noRefCheck(){}}
      sublabel={props.props.sublabel}
      value={props.valuePath}
    />
);

}


const PDFInputWrapper = (props) => {

return (
   <PDFInput
      id={props.props.id}
      isRequired={props.isRequired}
      label={props.props.label}
      onChange={function noRefCheck(){}}
      sublabel={props.props.sublabel}
      value={props.valuePath}
   />
);

}

export default App;

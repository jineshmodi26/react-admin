import React from "react";
import {
  Create,
  TextInput,
  NumberInput,
  SimpleForm,
  RadioButtonGroupInput,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
} from "react-admin";

const validateEmail = [required(), email()];
const validateName = [required(), minLength(2), maxLength(15)];
const validateNumber = [required(), regex(/^[789]\d{9}$/, 'Must be a valid Mobile Number')];
//onst validateAge = [required(), regex(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/, 'Must be a valid age')];

const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          source="id"
          disabled
          initialValue={Math.floor(Math.random() * 1000000000)}
        />
        <TextInput source="name" validate={validateName}/>
        <TextInput source="email" validate={validateEmail}/>
        <TextInput source="mobile" validate={validateNumber}/>
        <NumberInput source="age"/>
        <RadioButtonGroupInput
          source="gender"
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" }
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;

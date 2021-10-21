import React from "react";
import {
  Edit,
  TextInput,
  NumberInput,
  SimpleForm,
  RadioButtonGroupInput,
} from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          source="id"
          disabled
        />
        <TextInput source="name" />
        <TextInput source="email" />
        <TextInput source="mobile" />
        <NumberInput source="age" />
        <RadioButtonGroupInput
          source="gender"
          choices={[
            { id: "male", name: "Male" },
            { id: "female", name: "Female" }
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;

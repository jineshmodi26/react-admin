import React from 'react';
import {
    Edit,
    TextInput,
    NumberInput,
    SimpleForm,
    DateTimeInput
} from 'react-admin';

const ProductEdit = (props) => {
    return <Edit {...props}>
        <SimpleForm>
            <TextInput source='id' disabled/>
            <TextInput source='name'/>
            <NumberInput source='price'/>
            <TextInput multiline source='description'/>
            <DateTimeInput disabled source='created at'/>
            <DateTimeInput source='modified at' initialValue={Date.now()}/>
        </SimpleForm>
    </Edit>
}

export default ProductEdit;
import React from 'react';
import {
    Create,
    TextInput,
    NumberInput,
    SimpleForm,
    DateTimeInput
} from 'react-admin';

const ProductCreate = (props) => {
    return <Create {...props}>
        <SimpleForm>
            <TextInput source='id' disabled initialValue={Math.floor(Math.random() * 1000000000)}/>
            <TextInput source='name'/>
            <NumberInput source='price'/>
            <TextInput multiline source='description'/>
            <DateTimeInput disabled source='created at' initialValue={Date.now()}/>
            <DateTimeInput disabled source='modified at' initialValue={Date.now()}/>
        </SimpleForm>
    </Create>
}

export default ProductCreate;
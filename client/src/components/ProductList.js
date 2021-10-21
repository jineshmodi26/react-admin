import React from 'react';
import {
List,
Datagrid,
TextField,
DateField,
EditButton,
DeleteButton,
SearchInput,
Filter,
TextInput
} from 'react-admin';

const ProductList = (props) => {
    return <>
        <List {...props}>
            <Datagrid>
                <TextField source='name'/>
                <TextField source='price'/>
                <TextField source='description'/>
                <DateField source='created at'/>
                <DateField source='modified at'/>
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/products'/>
            </Datagrid>
        </List>
    </>;
}

export default ProductList;
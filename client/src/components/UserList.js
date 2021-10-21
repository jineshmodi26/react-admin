import React from 'react';
import {
List,
Datagrid,
TextField,
EditButton,
DeleteButton,
EmailField
} from 'react-admin';


const UserList = (props) => {
    return <>
        <List {...props}>
            <Datagrid>
                <TextField source='name'/>
                <EmailField source='email'/>
                <TextField source='mobile'/>
                <TextField source='age' />
                <TextField source='gender' />
                <EditButton basePath='/users'/>
                <DeleteButton basePath='/users'/>
            </Datagrid>
        </List>
    </>;
}

export default UserList;
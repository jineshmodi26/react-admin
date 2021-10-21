import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
import ProductCreate from './components/ProductCreate';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import UserCreate from './components/UserCreate';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={simpleRestProvider('http://localhost:3000/')}>
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate}/>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
      </Admin>
    </div>
  );
}

export default App;

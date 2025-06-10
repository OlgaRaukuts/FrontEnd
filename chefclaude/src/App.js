import styles from './App.module.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import React, {useState} from 'react';

function App() {

 return (
    <div className={styles.container}>
      <header>
    <Header />
      </header>
    <Form />
    </div>
  );
}


export default App;

/*  */
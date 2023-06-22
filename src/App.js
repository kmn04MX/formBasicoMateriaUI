import { Fragment } from 'react';
import './App.css';
import FormSingUp from './componentes/FormSignUp';
import Container  from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function App() {

  const handleSubmit = (valores) =>{
    console.log('APPJS: ' , valores)
  }


  return (
    <>
    <Container component="section" maxWidth ="sm">
      <Typography variant="h3" align="center" component="h1">Formulario registrarse</Typography>
      <FormSingUp handleSubmit= {handleSubmit}/>
    </Container>
    </>
  );
}

export default App;

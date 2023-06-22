import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react';


function FormSingUp({handleSubmit}){
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);
    //const {handleSubmit} = props;

    /*useEffect (()=>{
        console.log("Name cambio", name);
    },[name]);*/

    const [errors, setErrors] = useState({ 
        name: {
            error: false,
            message: "Deben ser al menos 3 caracteres"
        },
    })

    function validarNombre (nombre){
        if(nombre.lenght > 3){
            return {name: {error: false, message: ''}}
        }else{
            return {name: {error: true, message: 'Deben ser al menos 3 caracteres'}}
        }
    }
    return <form onSubmit={ (e) =>{
                            e.preventDefault(); 
                            handleSubmit({name,
                                        lastName, 
                                        email, 
                                        prom, 
                                        nov})}
                        }>
        <TextField 
            id="nombre"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin = "normal"
            onChange={(e)=>{
                //console.log(e.target.value);
                //console.log("Name 1:", name);
                setName(e.target.value);
                //console.log("Name 2:", name);
            }}
            value={name}
            error = {errors.name.error} //Es un parametro que rcibe un true o un false, si es false se pone rojo y si es true no se pone en rojo
            helperText= {errors.name.error ? errors.name.message : ''} // Sirve para poner una leyenda cuando salga algun error
            onBlur={(e)=>{setErrors(validarNombre(e.target.value))}}
        /> 
        <TextField 
            id="lastName" 
            label="Apellidos" 
            variant="outlined" 
            fullWidth 
            margin = "normal"
            value = {lastName}
            onChange={(e)=> setLastName(e.target.value)}
        />
        <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
        />

        <FormGroup>
            <FormControlLabel 
                label="Promociones"
                control = {
                            <Switch 
                                label="Promociones" 
                                checked={prom} 
                                onChange={(e) => {setProm(e.target.checked)}}

                            />
                        }

            />
            <FormControlLabel 
                label="Novedades"
                control={
                            <Switch checked={nov}
                                    label="Novedades"
                                    onChange={(e)=>{setNov(e.target.checked)}}

                            />
                        }
            />
        </FormGroup>
        <Button variant="contained" type='submit'>Registrarse</Button>
    </form>
}

export default FormSingUp;
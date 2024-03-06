import { Box, Button, TextField, Typography } from "@mui/material";
import React,{useState} from "react";

const Auth = ()=>{

    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        nombres: "",apellidos:"",correo: "", password: ""
    });

    const handleChannel = (e)=>{
        setInputs( (prev)=>({
            ...prev,
            [e.target.name]: e.target.value
        
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
    }

    const restState = ()=>{
        setIsLogin(!isLogin);
        setInputs({
            nombres: "",apellidos:"",correo: "", password: ""
        });
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={"column"} maxWidth={400} 
        alignItems={"center"} justifyContent={"center"} margin="auto"
        marginTop={5} padding={3} borderRadius={5}
        boxShadow={'5px 5px 10px #ccc'}
        sx={{
            ":hover":{
                boxShadow: '10px 10px 20px #ccc'
            }
        }}>
            <Typography variant="h2" padding={3} textAlign={"center"}>{isLogin ? "Iniciar sesión": "Registrate"}</Typography>
            
        
            {!isLogin && <TextField onChange={handleChannel} name="nombres" value={inputs.nombres} margin="normal" type="text" variant="outlined" placeholder="Nombres"/>}

            {!isLogin && <TextField onChange={handleChannel} name="apellidos" value={inputs.apellidos} margin="normal" type="text" variant="outlined" placeholder="Apellidos"/>}

            <TextField onChange={handleChannel}  name="correo" value={inputs.correo} margin="normal" type="text" variant="outlined" placeholder="Correo"/>
            
            <TextField onChange={handleChannel} name="password" value={inputs.password} margin="normal"  type="password" variant="outlined" placeholder="Contraseña"/>
            
            <Button type="submit" sx={{marginTop:3, borderRadius: 3}} variant="contained" color="primary"
            >{isLogin ? "Login" : "Register"}</Button>
            
            <Button sx={{marginTop:3, borderRadius: 3}} 
            onClick={restState} >{isLogin? "change to sign":"Return to Login"}</Button>

        </Box>
     </form>
    </div>
  );
}


export default Auth;
import { useForm } from 'react-hook-form';
import { Box, Typography, TextField, Button, Grid,Link } from "@mui/material";

function RegisterPage() {
    const { register, handleSubmit } = useForm();

    return (
    

        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <form action="">
                <input type="text" placeholder="Nombres" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password" />
            </form>
        </Box>


    );
}
export default RegisterPage;
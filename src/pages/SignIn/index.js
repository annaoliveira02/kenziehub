import { makeStyles } from "@material-ui/core"
import { Button, TextField } from "@material-ui/core"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router";
import { useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api"

const useStyles = makeStyles({
    root: {
        display:"flex", justifyContent:"center", alignItems:"center", 
        padding:"15px", backgroundColor:"rgb(202, 201, 186)", color:"black", 
        fontFamily:"Poppins", height:"100vh", width:"80vw", marginInline:"20px"
    },
    form: {
        display:"flex", flexDirection: "column", marginInline: "10px", alignItems: "center", justifyContent: "center",
    },
    error: {
        fontSize: "10px", textAlign: "center", marginBlockStart: "2px", fontWeight: "bolder"
    },
    buttons: {
        display: "flex", margin: "10px", alignItems: "center", justifyContent: "center",
    },
    button: {
        backgroundColor:"salmon", marginBlock:"5px", border: "none", marginInline: "10px"
    },

})

const SignIn = () => {

    const classes = useStyles();
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState(false)

    const formSchema = yup.object().shape({
        email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
        password: yup.string().required("Senha obrigatória")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
      });

    const onSubmitFunction = (user) => {
        api
            .post("/sessions", user)
            .then((response) => {
                const token = response.data.token
                const user = response.data.user
                console.log(user)
                window.localStorage.clear()
                window.localStorage.setItem("KenzieHub@token", token)
                window.localStorage.setItem("KenzieHub@user", JSON.stringify(user))
                setErrorMessage(false)
                return history.push("/student")                   
            })
            .catch((err) => {
                window.localStorage.clear()
                setErrorMessage(true)
                console.log(err)
            })
    }

    const backToHome = () => {
        history.push("/")
    }

    return (
        <div className={classes.root}>
            <Header/>
            <form className={classes.form} onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField
                    className={classes.input}
                    placeholder="E-mail"
                    variant="outlined"
                    size="small"
                    inputProps={register("email")}
                    type="text"
                />
                <h3 className={classes.error}>{errors.email?.message}</h3>
               
                <TextField
                    className={classes.input}
                    placeholder="Senha"
                    variant="outlined"
                    size="small"
                    inputProps={register("password")}
                    type="password"
                />
                <h3 className={classes.error}>{errors.password?.message}</h3>
                { errorMessage &&
                        <span className={classes.error}>Usuário/senha inválidos</span>}
                <div>                    
                    <Button
                        className={classes.button} 
                        type="submit"
                        variant="outlined"            
                    >
                    Login
                    </Button>
                    <Button 
                        onClick={backToHome}
                        className={classes.button}
                        variant="outlined"
                    >Voltar</Button> 
                </div>                
            </form>
        </div>
    )
}

export default SignIn;
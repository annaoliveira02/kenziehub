import { useState } from "react";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import api from "../../services/api";

const useStyles = makeStyles({
    techCard: {
        display:"flex", justifyContent:"center", alignItems:"center", 
        padding:"10px", backgroundColor:"rgb(114, 114, 218)", color:"black", borderRadius:"5px",
        fontFamily:"Poppins", margin:"20px", width:"200px", height:"155px"
    },
    form: {
        display:"flex", flexDirection: "column", marginInline: "5px", alignItems: "center", justifyContent: "center",
    },
    input: {
        fontSize:"18px",backgroundColor:"rgb(202, 201, 186, 0.4)", borderRadius:"5px"
    },
    error: {
        fontSize: "10px", textAlign: "center", marginBlockStart: "2px",
    },
    button: {
        backgroundColor:"rgb(0, 0, 65)", color:"white", marginBlock:"10px", border: "none", marginInline: "10px"
    },

})


const Form = ({addTodo}) => {

    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState(false);
    const token = window.localStorage.getItem("KenzieHub@token")

    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
      });

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const onSubmitFunction = (tech) => {
        console.log(tech)
        api
            .post("/users/techs", tech, config)
            .then((setErrorMessage(false)))
            .catch((err) => {
                setErrorMessage(true)
                console.log(err)})
    } 

    return (
        <div className={classes.techCard}>
             <form className={classes.form} onSubmit={handleSubmit(onSubmitFunction)}>
                <TextField
                    className={classes.input}
                    placeholder="Nome da tecnologia"
                    size="small"
                    variant="outlined"
                    inputProps={register("title")}
                    type="text"
                    helperText={errors.title?.message}
                />
                <TextField
                    className={classes.input}
                    placeholder="Status"
                    size="small"
                    variant="outlined"
                    inputProps={register("status")}
                    type="text"
                    helperText={errors.status?.message}
                />
                { errorMessage &&
                    <span className={classes.error}>Entrada inválida. Tente novamente.</span>}
                 <Button className={classes.button} type="submit">Adicionar</Button>
            </form>
        </div>
    )
}

export default Form;
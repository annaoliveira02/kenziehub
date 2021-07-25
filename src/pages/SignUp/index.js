import { makeStyles } from "@material-ui/core"
import { Button, TextField } from "@material-ui/core"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router";
import Header from "../../components/Header";
import api from "../../services/api";
import { toast } from "react-toastify";

    const useStyles = makeStyles({
        root: {
            display:"flex", justifyContent:"center", alignItems:"center", 
            padding:"15px", backgroundColor:"rgb(202, 201, 186)", color:"black", 
            fontFamily:"Poppins", height:"100vh", width:"80vw", marginInline:"20px"
        },
        container: {
            display: "flex", width:"70vw"
        },
        form: {
            display:"flex", flexDirection:"column", marginInline: "10px", 
            alignItems: "center", justifyContent: "center", height: "50vh", width:"50vw"
        },
        error: {
            fontSize: "10px", textAlign: "center", marginBlockStart: "1px",
        },
        info: {
            display:"flex",justifyContent:"center", alignItems:"center"
        },
        buttons: {
            display: "flex", margin: "10px", alignItems: "center", justifyContent: "center",
        },
        button: {
            backgroundColor:"salmon", marginBlock:"5px", border: "none", marginInline: "10px"
        },
        modules: {
            fontSize:"14px"
        }
    })

const SignUp = () => {

    const classes = useStyles();
    const history = useHistory();
    
    const formSchema = yup.object().shape({
        email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
        password: yup.string().min(6, "Mínimo de 6 dígitos").required("Campo obrigatório"),
        name: yup.string().required("Campo obrigatório"),
        bio: yup.string().required("Campo obrigatório"),
        contact: yup.string().required("Campo obrigatório"),
        course_module: yup.string().required("Campo obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(formSchema)
      });

    const onSubmitFunction = (user) => {
        console.log(user)
        api
            .post("/users", user)
            .then(() => {
                toast.success("Cadastro feito com sucesso!")
                return history.push("/signin")
            })
            .catch((err) => {
                toast.error("Cadastro inválido! Tente outro e-mail.")
                console.log(err)})
    } 

    const backToHome = () => {
        history.push("/")
    }

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.container}>
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
                    <TextField
                        className={classes.input}
                        placeholder="Nome"
                        variant="outlined"
                        size="small"
                        inputProps={register("name")}
                        type="text"
                    />
                    <h3 className={classes.error}>{errors.name?.message}</h3>
                    <TextField
                        className={classes.input}
                        placeholder="Bio"
                        variant="outlined"
                        size="medium"
                        inputProps={register("bio")}
                        type="text"
                    />
                    <h3 className={classes.error}>{errors.bio?.message}</h3>
                    <TextField
                        className={classes.input}
                        placeholder="Contato"
                        variant="outlined"
                        size="small"
                        inputProps={register("contact")}
                        type="text"
                    />
                    <h3 className={classes.error}>{errors.contact?.message}</h3>
                    <TextField
                        className={classes.input}
                        placeholder="Módulo atual"
                        variant="outlined"
                        size="small"
                        inputProps={register("course_module")}
                        type="text"
                    />
                    <h3 className={classes.error}>{errors.course_module?.message}</h3>
                    <div className={classes.buttons}>
                        <Button className={classes.button} type="submit">Cadastrar</Button>
                        <Button className={classes.button} onClick={backToHome}>Voltar</Button>   
                    </div>
                </form>
                <div className={classes.info}>
                <ul className={classes.modules}>Identifique o seu módulo baseado nas seguintes opções:
                        <li>Primeiro módulo (Introdução ao Frontend)</li>
                        <li>Segundo módulo (Frontend Avançado)</li>
                        <li>Terceiro módulo (Introdução ao Backend)</li>
                        <li>Quarto módulo (Backend Avançado)</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}  

export default SignUp;
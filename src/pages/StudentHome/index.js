import Header from "../../components/Header"
import Card from "../../components/Card"
import TechForm from "../../components/TechForm"
import TechList from "../../components/TechList"
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", 
        padding:"15px", backgroundColor:"rgb(202, 201, 186)", color:"black", 
        fontFamily:"Poppins", width:"80vw", marginInline:"20px"
    },
    main: {
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBlockStart:"50px"
    },
    techsTitle: {
        marginBlock:"2px"
    },
    techs: {
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"
    },
    button: {
        backgroundColor:"salmon", marginBlock:"5px", border: "none", marginInline: "10px", marginBlockEnd:"20px"
    },
})

const StudentArea = () => {

    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        window.localStorage.clear()
        history.push("/")
    }
    
    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.main}>
                <div>
                    <Card/>
                </div>
                <h2 className={classes.techsTitle}>Tecnologias</h2>
                <div className={classes.techs}>
                    <TechForm/>
                    <TechList/>
                </div>
            </div>
            <Button className={classes.button} onClick={logout}>Logout</Button>
        </div>
    )
}

export default StudentArea


// div root
    // header home (ainda logado)
    // div main (flex, wrap)
        // card infos aluno
        // card tecnologias
    // botão logout ===> apaga token e volta pra home
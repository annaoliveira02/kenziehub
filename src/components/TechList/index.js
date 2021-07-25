import { makeStyles } from "@material-ui/core";
import { AiFillDelete } from "react-icons/ai"
import api from "../../services/api"
import { useEffect, useState } from "react"

const useStyles = makeStyles({
    container: {
        display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center",
    },
    techCard: {
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", 
        padding:"15px", backgroundColor:"rgb(114, 114, 218)", color:"black", borderRadius:"5px",
        fontFamily:"Poppins", marginInline:"10px", marginBlockEnd:"20px", width:"135px", height:"110px"
    },
    techTitle: {
        marginBlock:"0", fontSize:"22px", marginBlockStart:"5px"
    },
    techStatus: {
        marginBlock:"0", fontSize:"14px", marginBlockEnd:"5px"
    },
    button: {
        backgroundColor:"transparent", marginBlockStart:"5px", marginBlockEnd:"2px",
        marginInline:"10px", fontSize:"20px", border:"none",cursor:"pointer"
    }

})

const TechList = () => {

    const classes = useStyles()
    const user = JSON.parse(window.localStorage.getItem("KenzieHub@user"))
    const token = window.localStorage.getItem("KenzieHub@token")
    const [techs, setTechs] = useState(user.techs)

    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api
            .get(`/users/${user.id}`)
            .then((response) => {
                setTechs(response.data.techs)
                })
    }, [user, techs]) 

    const removeTech = (tech) => {
        api
            .delete(`/users/techs/${tech.id}`, config)
    }

    return (
        <div className={classes.container}>
            {techs.map((tech, index) => (
        <div className={classes.techCard} key={index}>
            <h3 className={classes.techTitle} key={tech.title}>{tech.title}</h3>
            <h4 className={classes.techStatus} key={index +100}>{tech.status}</h4>
            <button className={classes.button} key={index +1000} onClick={() => removeTech(tech)}><AiFillDelete/></button>
        </div>        
      ))}        
        </div>
    )
}

export default TechList
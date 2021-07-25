import { IoPersonCircleSharp } from 'react-icons/io5'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", 
        padding:"10px", backgroundColor:"rgb(0, 0, 65)", color:"white", borderRadius:"5px",
        fontFamily:"Poppins", margin:"20px", width:"500px", height:"160px"
    },
    icon: {
        fontSize:"150px", display:"flex", justifyContent:"center",alignItems:"flex-end", width:"150px"
    },
    userInfo: {
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-end", marginInlineEnd:"10px"
    },
    cardTitle: {
        fontSize:"24px", marginBlockEnd:"0"
    },
    cardInfo: {
        fontSize: "16px", marginBlock:"4px"
    },

})


const Card = () => {

    const user = JSON.parse(window.localStorage.getItem("KenzieHub@user"))
    const classes = useStyles();

    return (
            <div className={classes.container}>
                <div className={classes.icon}>
                    <IoPersonCircleSharp/>
                </div>
                <div className={classes.userInfo}>
                    <h3 className={classes.cardTitle}>{user.name}</h3>
                    <p className={classes.cardInfo}>{user.course_module}</p>
                    <p className={classes.cardInfo}>{user.email}</p>  
                </div>                     
            </div>
    )
}

export default Card;
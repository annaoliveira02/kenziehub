import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
import logo from "../../logo.png"

const useStyles = makeStyles({
    head: {
        width:"80vw", display:"flex", flexWrap:"wrap", justifyContent:"space-between", 
        alignItems:"center", position:"absolute", top:"5px", borderBottom: "2px solid rgb(0, 0, 65)",
        margin: "5px",
    },
    logo: {
        width:"40px", height:"40px", justifySelf:"flex-start"
    },
    title: {
        fontSize: "24px", textTransform:"uppercase"
    },
    button: {
        backgroundColor:"salmon", marginBlock:"5px", border: "none", marginInline: "10px", padding:"5px",
        borderRadius:"5px", fontWeight:"400"
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.head}>
                <img className={classes.logo} src={logo} alt="kenzie-logo"></img>
                <h1 className={classes.title}>KenzieHub</h1>
                <Link className={classes.button} to="/">HOME</Link>
            </header>
    )
}

export default Header;
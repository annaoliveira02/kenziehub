import { makeStyles } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom'
import homeImg from "../../homeImg.png"
import Header from "../../components/Header"

const useStyles = makeStyles({
    root: {
        display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", 
        padding:"15px", backgroundColor:"rgb(202, 201, 186)", color:"black", 
        fontFamily:"Poppins", height:"95vh", width:"80vw", marginInline:"20px"
    },
    main: {
        display:"flex", justifyContent:"center", width:"70vw", alignItems:"center", flexWrap: "wrap"
    },
    image: {
        width: "80vh", margin: "10px", objectFit: "contain"
    },
    buttons: {
        display: "flex", flexDirection: "column", margin: "10px"
    },
    button: {
        backgroundColor:"salmon", marginBlock:"5px", border: "none"
    },
    footer: {
        position:"absolute", bottom: "10px", fontSize:"10px", textDecoration: "none"
    }
})

const Home = () => {

    const history = useHistory();
    const classes = useStyles();

    const handleSignUp = () => {
        history.push("/signup")
    }

    const handleLogin = () => {
        history.push("/signin")
    }

    return (
        <div className={classes.root}>
            <Header/>
            <main className={classes.main}>
                <img className={classes.image} src={homeImg} alt="students"></img>
                <div className={classes.buttons}>
                    <Button 
                        className={classes.button}
                        variant="outlined"
                        onClick={handleLogin}>Entre com sua conta</Button>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        onClick={handleSignUp}>Crie seu cadastro</Button>
                </div>
            </main>
            <footer className={classes.footer}>
                <a href='https://pngtree.com/freepng/e-learning-graphic-with-student-goal-winner-books-online-study_6543191.html?sol=downref&id=bef'>png from pngtree.com</a>
            </footer>
        </div>
    )
}

export default Home
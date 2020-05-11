import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Link from "next/link"
export default function Connection() {
    const dispatch = useDispatch()
    const {connected} = useSelector(state=> ({...state.connectionReducer , ...state.profilReducer}))
    const goToConnect=(e)=> {
        e.preventDefault()
        const verification = true
        if(verification){
            dispatch({
                type:'CONNECTED'
            })

        }
        else{
            dispatch({
                type:'DISCONNECTED'
            })
        }
    }
    if(!connected){
    return (
        <div>
            <h1>Connexion</h1>
            <p>Status : {connected ? "Connecté" : "Déconnecté"}</p>
            <form onSubmit={goToConnect}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" placeholder="Votre e-mail"/><br/>
                <label htmlFor="mdp">Mot de Passe: </label>
                <input type="password" name="mdp" id="mdp" placeholder="Votre Mot de passe"/><br/>
                <button type="submit">Connexion</button><br/>
                <a href="/">S'inscrire?</a><br/>
                <a href="/">Mot de passe oublié?</a>
            </form>
        </div>
    )
    }

    else{
        /* Faire un redirect correct*/
        return(
        <div>
            <Link href='/Example'><a> Vous êtes connecté continuer.</a></Link>
        </div>)
    }
}

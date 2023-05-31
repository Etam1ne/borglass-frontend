import { useState } from "react";
import axios from "axios";
//import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";

interface AuthProps {
    isAdmin: boolean,
    isLogin: boolean,
}

export function Auth({ isAdmin, isLogin }: AuthProps): JSX.Element {

    // const user = useAppSelector(state => state.user);
    // const dispatch = useAppDispatch();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signUp() {
        axios.post("http://localhost:5000/signup", {
            username: username,
            email: email,
            password: password
        }).then(response => {
            console.log(response)
        })
    }

    function signIn() {
        axios.post("http://localhost:5000/signin", {
            username: username,
            email: email,
            password: password
        }).then(response => {
            console.log(response)
        })
    }

    return (
        <form
        onSubmit={e => {
            e.preventDefault()
            isLogin ? signIn() : signUp()
        }}
        >
            {!isLogin && <input type="text" onChange={e => setUsername(e.target.value)}/>}
            <input type="email" 
            onChange={e => setEmail(e.target.value)}/>
            <input type="password" 
            onChange={e => setPassword(e.target.value)}/>
            <input type="submit" value={isLogin ? "Sign In" : "Sign Up"} />
        </form>
    )
}
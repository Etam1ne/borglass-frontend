import { useState } from "react";
import axios from "axios";
import { AuthForm, AuthMain } from "../components/Auth/Auth.style";
import { TextInput, ButtonInput } from "../components/Inputs.style";
import { useAppDispatch } from "../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";

interface AuthProps {
    isAdmin: boolean,
    isLogin: boolean,
}

export function Auth({ isAdmin, isLogin }: AuthProps): JSX.Element {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function signUp() {
        axios.post("http://localhost:5000/signup", {
            username: username,
            email: email,
            password: password
        }).then(() => {
            dispatch(setUser({
                username: username,
                email: email,
            }))
        })
    }

    function signIn() {
        axios.post("http://localhost:5000/signin", {
            username: username,
            email: email,
            password: password,
        }).then(() => {
            dispatch(setUser({
                email: email,
                username: username,
            }))
        })
    }

    function adminAuth() {
        axios.post("http://localhost:5000/adminauth", {
            email: email,
            password: password,
        }).then(() => {
            dispatch(setUser({
                email: email,
                username: "admin",
                isAdmin: true
            }));
            navigate("../admin");
        });
    }

    return (
        <AuthMain>
            <AuthForm
            onSubmit={e => {
                e.preventDefault()
                isLogin 
                ? 
                isAdmin ? adminAuth() : signIn() 
                : 
                signUp()
            }}
            >
                {!isLogin && 
                <>
                    <label htmlFor="username">Имя:</label>
                    <TextInput 
                    type="text" 
                    id="username" 
                    onChange={e => setUsername(e.target.value)}
                    />
                </>}

                <label htmlFor="email">Почта:</label>
                <TextInput 
                type="email" 
                id="email"
                onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Пароль:</label>
                <TextInput 
                type="password" 
                id="password" 
                onChange={e => setPassword(e.target.value)}/>
                <ButtonInput type="submit" value={isLogin ? "Войти" : "Зарегистрироваться"} />
            </AuthForm>
        </AuthMain>
    )
}
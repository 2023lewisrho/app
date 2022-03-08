import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


const BackGround = styled.div`
    background-color: #28bec6;
    background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F992%2F992848.jpg&f=1&nofb=1");
    height: 92vh;
`;

const WelcomeTitle = styled.h1`
    font-size: 6vh;
    height: 8vh;
    color: blue;
    background-color: beige;
    text-align: center;
`;

const LoginElementContainer = styled.div`
    position: relative;
    width: 40%;
    float: left;
    height: 100%;
    background-color: wheat;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const InputContainer = styled.div`
    width: 80%;
    margin: 0.5em;
`;

const InputBox = styled.input`
    width: 100%;    
    height: 3em;
    border-radius: 5px;
`;

const InputButton = styled.input`
    width: 30%;
    height: 6%;
    border-radius: 1em;
    border: none;
`;

const InputText = styled.p`
    width: 100%;
    text-align: left;
    font-size: 0.75em;
    margin-bottom: 0.1em;
`;

const ErrorText = styled.p`
    width: 100%;
    text-align: left;
    font-size: 0.75em;
    margin-bottom: 0.1em;
    color: red;
`;


function LoginPage() {
    const history = useNavigate();
    const [user, setUser] = useState({
        id:"",
        passwd:""
    });

    const errMsg = useState({ err_msg: "" });

    const navigateToMainPage = () => {
        if (user.id !== "" && user.passwd !== "") {
            history("/");
        } else {
            alert("Invalid Username and/or Password!");
        }
    }

    return (
        <div>
        <WelcomeTitle>Log In</WelcomeTitle>

        <BackGround>
            <LoginElementContainer>
                <h2>Welcome to GenericService!</h2>
                <InputContainer>
                    <InputText>Username</InputText>
                    <InputBox type="usename" onChange={e => {setUser(user.id=e)}}></InputBox>
                </InputContainer> 
                <InputContainer>
                    <InputText>Password</InputText>
                    <InputBox type="password" onChange={e => {setUser(user.passwd=e)}}></InputBox>
                </InputContainer>
                <ErrorText>{errMsg.err_msg}</ErrorText>
                <InputButton type="button" value="Log In" onClick={navigateToMainPage}></InputButton>
            </LoginElementContainer>
        </BackGround>
        </div>
    );
}

export default LoginPage;
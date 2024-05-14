import styled from 'styled-components'

import BackgroundLogin from '../../assets/login-bg.svg'
import Background from '../../assets/sheet-login-bg.svg'


export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
`

export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');

width: 100%;
max-width:50%;
height: 100%;

background-repeat: no-repeat;
background-size: cover;
background-position:center;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 80%;
}
`

export const RightContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

width: 100%;
max-width:50%;
height: 100%;

background: url('${Background}');
background-color: #1E1E1E;

p{
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a{
        text-decoration: underline;
        cursor: pointer;
    }
}
`

export const Title = styled.h2`
color: #fff;
font-family: "Road Rage", sans-serif;
font-size: 40px;
font-weight: 400;
line-height: 40px;
text-align: center;

span{
    color: #9758A6;
    font-family: "Road Rage", sans-serif;
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
grid-template-columns: 5px;
width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
}

label{
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin-left: 5px;
}

p{
    font-size:14px;
    line-height: 150%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
}
`
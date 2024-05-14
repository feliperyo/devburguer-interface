import styled from 'styled-components'

export const ContainerButton = styled.button`
width: 100%;
height: 52px;
border-radius: 5px;
border: none;
background-color: #9758A6;
font-family: "Road Rage", sans-serif;
color: #fff;
font-size: 30px;
cursor: pointer;

&:hover {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
    background-color:  #6F357C;
}
`
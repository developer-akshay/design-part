import React from 'react';
import styled from 'styled-components';

const Card = props => (
    <Container>
        <Cover>
            <Image source={props.image} />

            <Title>
                {props.title}
            </Title>
        </Cover>
        <Content>
            <Logo source={props.logo} />

            <Wrapper>
                <Caption>{props.caption}</Caption>

                <Sutitle>{props.subtitle}</Sutitle>

            </Wrapper>
        </Content>
    </Container>
)

export default Card;

const Container = styled.View`
    background:white;
    width:320px;
    height:280px;
    border-radius:14px;
    margin-left:20px;
    margin-top:20px;
    box-shadow:0 5px 15px rgba(0,0,0,0.15);
`;

const Cover = styled.View`
    width:100%;
    height:200px;
    border-top-left-radius:14px;
    border-top-right-radius:14px;
    overflow:hidden;
    
`;

const Image = styled.Image`
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    `;
const Title = styled.Text`
    color:white;
    margin-left:20px;
    font-size:24px;
    font-weight:bold;
    margin-top:20px
`;

const Content = styled.View`
    height: 80px;
    margin-left:20px;
    margin-top:10px;
    border-bottom-left-radius:14px;
    border-bottom-right-radius:14px;
    overflow:hidden;
    flex-direction:row;
`;
const Logo = styled.Image`
height:44px;
width:44px;
margin-left:20px;
margin-top:5px;
`;
const Caption = styled.Text`
height: 20px;
font-weight:bold;
font-size:18px;
`;
const Sutitle = styled.Text`
height: 20px;
font-weight:600;
font-size:15px;
text-transform:uppercase;
margin-top:4px;
`;
const Wrapper = styled.View`
margin-left:10px;
`;
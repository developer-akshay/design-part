import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components';
import Card from './Components/Card';

export default class App extends React.Component {
  render() {
    return (
      <Container >
        <TitleBar>
          <Avatar source={require("./assets/avatar.jpg")} />
          <Title>Welcome back</Title>
          <Name>Akshay</Name>
        </TitleBar>
        <Subtitle>Yo ! Continue Learning </Subtitle>
        <ScrollView
        // horizontal={true}
        >
          <Card
            title='Hello cards !'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='1 Of 12 Sections'
          />
          <Card
            title='Hello cards !!'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='2 Of 12 Sections'
          />
          <Card
            title='Hello cards !'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='3 Of 12 Sections'
          />
          <Card
            title='Hello cards !'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='5 Of 12 Sections'
          />
          <Card
            title='Hello cards !'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='5 Of 12 Sections'
          />
          <Card
            title='Hello cards !'
            image={require(`./assets/background2.jpg`)}
            logo={require(`./assets/logo-react.png`)}
            caption='React native '
            subtitle='5 Of 12 Sections'
          />

        </ScrollView>
      </Container>
    );
  }
}

//Our styling part 
const Container = styled.View`
  flex:1;
  background-color:#f0f3f5;
  
`;
const Title = styled.Text`
  font-size:16px;
  font-weight:500;
  color:#b8bece;
  padding-left:100px;
`;
const Name = styled.Text`
  font-size:20px;
  font-weight:bold;
  color:#3c4560;
  padding-left:100px;
`;
const TitleBar = styled.View`
  width:100%;
  margin-top:30px;
  margin-left:20px;
  
`;
const Avatar = styled.Image`
  width:50px;
  height:50px;
  margin-left:20px;
  background:black;
  border-radius:22px;
  position:absolute;
  top:0;
  left:0;
`;

const Subtitle = styled.Text`
  font-size:15px;
  font-weight:bold;
  margin-top:30px;
  margin-left:20px;
  color:#b8bece
`;
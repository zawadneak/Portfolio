import React from 'react';

import Button from '~/components/Button';

import {
  Container,
  ScreenHolder,
  Intro,
  BoxHolder,
  CourseWrapper,
  CoursesHolder,
} from './styles';

export default function Home() {
  return (
    <Container>
      <ScreenHolder>
        <Intro>
          <h1>Hello there!</h1>
          <h3>I'm Lucas, a fullstack and mobile developer.</h3>
        </Intro>
        <div>
          <BoxHolder>
            <div>
              <h1>About me</h1>
              <p>
                I’m 18 years old and live in
                <span> Curitiba, Brazil. </span>I develop
                <span> web,mobile and backend applications </span>
                in Javascript and occasionally Python. I’ve been programming
                since I was 16 and fell in love with fullstack development,
                where I can develop things that I love, and that can
                <span> make a difference! </span>
                My main goal as a developer is to build applications that can
                <span> help people the best way possible. </span>
                That's why I hope in the future to be a part of
                <span> great projects!</span>
              </p>
            </div>
            <img src={require('~/assets/img/profile.png')} alt="profile" />
          </BoxHolder>
          <BoxHolder flip>
            <img src={require('~/assets/img/techs.png')} alt="techs" />
            <div>
              <h1>Techs</h1>
              <p>
                I have experience in
                <span> React, React Native and NodeJS </span>
- you can see more
                of what I have built, in My work section. Currently studying
                Tensorflow (Python - AI), I always look into improving myself
                not only as a developer but as someone that can build excellent
                applications, with a great value!
</p>
              <div className="align">
                <Button title="See more" />
              </div>
            </div>
          </BoxHolder>
          <CourseWrapper>
            <h1>Courses</h1>
            <div>
              <CoursesHolder>
                <div>
                  <img
                    src={require('~/assets/img/gostack.png')}
                    alt="GoStack"
                  />
                </div>
              </CoursesHolder>
              <CoursesHolder>
                <div>
                  <h2>UX & Design Thinking</h2>
                </div>
              </CoursesHolder>
              <CoursesHolder>
                <div>
                  <h2>HTML5 & CSS3:Advanced features</h2>
                </div>
              </CoursesHolder>
            </div>
          </CourseWrapper>
          <BoxHolder>
            <div>
              <h1>Education</h1>
              <p>
                I am currently in the first year of my
                <span> Systems Analyst degree </span>
                at Universidade Federal do Paraná. I also have an
                <span> engineering background, </span>
                since I started at Biotechnology Engineering at the same
                institution. Although I had the best semester grade in my class
                (90/100), I fell in love with programming and decided to switch
                to the computer science field!
              </p>
            </div>
            <img
              alt="UFPR"
              src="https://www.ufpr.br/portalufpr/wp-content/uploads/2017/03/manual-de-marca_vetores-10.png"
            />
          </BoxHolder>
        </div>
      </ScreenHolder>
    </Container>
  );
}

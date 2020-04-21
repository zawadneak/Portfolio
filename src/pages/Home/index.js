import React, { useState } from 'react';

import Button from '~/components/Button';

import {
  Container,
  ScreenHolder,
  Intro,
  BoxHolder,
  CourseWrapper,
  CoursesHolder,
  AbsoluteBox,
} from './styles';

export default function Home() {
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <ScreenHolder>
        <Intro>
          <h1>Hello there!</h1>
          <p>General Kenobi!</p>
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
                <Button title="See all" onClick={() => setHidden(!hidden)} />
                <AbsoluteBox hidden={hidden} onClick={() => setHidden(true)}>
                  <h1>Techs</h1>
                  <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node JS</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Docker</li>
                    <li>Redis</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>NoSQL</li>
                    <li>Firebase</li>
                    <li>Figma</li>
                    <li>Python</li>
                    <li>Git</li>
                  </ul>
                </AbsoluteBox>
              </div>
            </div>
          </BoxHolder>
          <CourseWrapper>
            <h1>Courses</h1>
            <div>
              <CoursesHolder>
                <a
                  href="https://rocketseat.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={require('~/assets/img/gostack.png')}
                      alt="GoStack"
                    />
                  </div>
                </a>
              </CoursesHolder>
              <CoursesHolder>
                <a
                  href="https://www.udemy.com/course/html5-e-css3-tecnicas-avancadas-com-flexbox-e-3-projetos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={require('~/assets/img/html.png')}
                      alt="html & css"
                      id="html"
                    />
                    <h2>Advanced features</h2>
                  </div>
                </a>
              </CoursesHolder>
              <CoursesHolder>
                <a
                  href="https://www.udemy.com/course/ux-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img src={require('~/assets/img/ux.png')} alt="UX" />
                  </div>
                </a>
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
            <a
              href="https://www.ufpr.br/portalufpr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="UFPR"
                src="https://www.ufpr.br/portalufpr/wp-content/uploads/2017/03/manual-de-marca_vetores-10.png"
              />
            </a>
          </BoxHolder>
        </div>
      </ScreenHolder>
    </Container>
  );
}

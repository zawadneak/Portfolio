/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import intl from 'react-intl-universal';

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
          <h1>{intl.get('helloThere')}</h1>
          <h3>{intl.get('ImLucas')}</h3>
          <p>{intl.get('kenobi')}</p>
        </Intro>
        <div>
          <BoxHolder>
            <div>
              <h1>{intl.get('aboutMe')}</h1>
              {intl.getHTML('aboutMeDescription')}
            </div>
            <img src={require('~/assets/img/profile.png')} alt="profile" />
          </BoxHolder>
          <BoxHolder flip>
            <img src={require('~/assets/img/techs.png')} alt="techs" />
            <div>
              <h1>{intl.get('techs')}</h1>
              <p>{intl.getHTML('techsDescription')}</p>
              <div className="align">
                <Button
                  title={intl.get('seAll')}
                  onClick={() => setHidden(!hidden)}
                />
                <AbsoluteBox hidden={hidden} onClick={() => setHidden(true)}>
                  <h1>{intl.get('techs')}</h1>
                  <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node JS</li>
                    <li>Vue JS</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
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
            <h1>{intl.get('courses')}</h1>
            <div>
              <CoursesHolder>
                <a
                  href="https://drive.google.com/file/d/1ibrr5lQrw3eTmm11aZTaCGwHdAZSMnmz/view"
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
                  href="https://www.udemy.com/certificate/UC-OCKIO4IH/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={require('~/assets/img/html.png')}
                      alt="html & css"
                      id="html"
                    />
                    <h2>{intl.get('advancedFeatures')}</h2>
                  </div>
                </a>
              </CoursesHolder>
              <CoursesHolder>
                <a
                  href="https://www.udemy.com/certificate/UC-92cb1974-e2e7-43ff-bbc3-2f5c25b030c7/"
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
              <h1>{intl.get('education')}</h1>
              <p>{intl.getHTML('educationDescription')}</p>
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

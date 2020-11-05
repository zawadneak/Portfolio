/* eslint-disable global-require */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import intl from 'react-intl-universal';
import Modal from '@material-ui/core/Modal';

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
  const [techModalOpen, setModalOpen] = useState(false);

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
            <img
              src={require('~/assets/img/profile.png')}
              alt="profile"
              style={{ height: 250, width: 250 }}
            />
            <div>
              <h1>{intl.get('aboutMe')}</h1>
              {intl.getHTML('aboutMeDescription')}
            </div>
          </BoxHolder>
          <BoxHolder>
            <div>
              <h1>{intl.get('techs')}</h1>
              <p>{intl.getHTML('techsDescription')}</p>

              <Button
                title={intl.get('seAll')}
                onClick={() => setModalOpen(!techModalOpen)}
              />
            </div>
            <img src={require('~/assets/img/techs.png')} alt="techs" />
          </BoxHolder>

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
                style={{ borderRadius: 20 }}
                alt="UFPR"
                src="https://www.ufpr.br/portalufpr/wp-content/uploads/2017/03/manual-de-marca_vetores-10.png"
              />
            </a>
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
                  href="https://www.udemy.com/certificate/UC-8aab4dbd-bd00-457c-a34d-a9f3b08b419a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src="https://miro.medium.com/max/1050/1*zyNSb0UXhP8TfxYbj-GNWg.png"
                      alt="vue"
                    />
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
                    <img src={require('~/assets/img/ux.svg')} alt="UX" />
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
                    <img src={require('~/assets/img/html.svg')} alt="HTML" />
                  </div>
                </a>
              </CoursesHolder>
            </div>
          </CourseWrapper>
        </div>
        <Modal
          open={techModalOpen}
          onClose={() => setModalOpen(!techModalOpen)}
          aria-labelledby="title"
          aria-describedby="description"
        >
          <AbsoluteBox>
            <h1 id="title">{intl.get('techs')}</h1>
            <ul id="description">
              <li>React</li>
              <li>React Native</li>
              <li>Node JS</li>
              <li>Vue JS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Dart</li>
              <li>Flutter</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Docker</li>
              <li>Redis</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>NoSQL</li>
              <li>Mongoose</li>
              <li>Sequelize</li>
              <li>Firebase</li>
              <li>Figma</li>
              <li>Python</li>
              <li>Git</li>
            </ul>
          </AbsoluteBox>
        </Modal>
      </ScreenHolder>
    </Container>
  );
}

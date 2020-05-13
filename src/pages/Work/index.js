/* eslint-disable global-require */
import React from 'react';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import intl from 'react-intl-universal';
import Button from '~/components/Button';

import { Container, ScreenHolder, Intro, BoxHolder } from './styles';

export default function Work() {
  return (
    <Container>
      <ScreenHolder>
        <Intro id="top">
          <h1>{`${intl.get('myWork')}!`}</h1>
          <h3>{intl.get('projects')}</h3>
        </Intro>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/Maruska.png')}
              alt="Maruska"
              id="title"
            />
            <p>{intl.get('maruska')}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.lcdev.maruska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: 80, marginLeft: -15 }}
                src={require('~/assets/img/play.png')}
                alt="Maruska"
              />
            </a>
            <a
              href="https://github.com/lucascassilha/maruska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/AppMaruska.png')}
              alt="Prints"
              id="maruska"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/covid.svg')}
              alt="Maruska"
              id="title"
            />
            <p>{intl.get('covid')}</p>
            <a
              href="https://github.com/lucascassilha/COVIDComparative/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
            <a
              href="https://covidcomparative.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('webPage')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/covid.png')}
              alt="Prints"
              id="covid"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/fastfeet.png')}
              alt="Fastfeet"
              id="title"
            />
            <p>{intl.get('fastfeet')}</p>
            <a
              href="https://github.com/lucascassilha/react-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('frontend')} />
            </a>
            <a
              href="https://github.com/lucascassilha/node-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('backend')} />
            </a>
            <a
              href="https://github.com/lucascassilha/react-native-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('mobile')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/fastprints.png')}
              alt="Prints"
              id="print"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <FaGithub size={150} color="#fff" />
            <p>{intl.get('github')}</p>
            <a
              href="https://github.com/lucascassilha/gostack-react-native/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/github.png')}
              alt="Prints"
              id="print"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <FaFacebookSquare size={150} color="#fff" />
            <p>{intl.get('facebook')}</p>
            <a
              href="https://github.com/lucascassilha/gostack-basic-react/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/facebook.png')}
              alt="Prints"
              id="face"
            />
          </div>
        </BoxHolder>
      </ScreenHolder>
    </Container>
  );
}

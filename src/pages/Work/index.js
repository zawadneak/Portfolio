/* eslint-disable global-require */
import React from 'react';
import { FaChartLine, FaSkull } from 'react-icons/fa';
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
          </div>
          <div>
            <img
              src={require('~/assets/img/AppMaruska.png')}
              alt="Prints"
              id="maruska"
            />
            <a
              href="https://github.com/lucaszawadneak/maruska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/PWORD.svg')}
              alt="PWORD"
              id="title"
            />
            <p>{intl.get('pword')}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.lcdev.pword"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ height: 80, marginLeft: -15 }}
                src={require('~/assets/img/play.png')}
                alt="PWORD"
              />
            </a>
            <a
              href="https://github.com/lucaszawadneak/pword"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/AppPWORD.jpg')}
              alt="Prints"
              id="maruska"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/covid.svg')}
              alt="Covid"
              id="title"
            />
            <p>{intl.get('covid')}</p>
            <a
              href="https://github.com/lucaszawadneak/COVIDComparative/tree/master"
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
              src={require('~/assets/img/covid.jpg')}
              alt="Prints"
              id="covid"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/ghlogo.png')}
              alt="Github"
              id="title"
            />
            <p>{intl.get('github')}</p>
            <a
              href="https://github.com/lucaszawadneak/github-vue3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
            <a
              href="https://lucaszawadneak.github.io/github-vue3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('webPage')} />
            </a>
          </div>
          <div>
            <img
              src={require('~/assets/img/github.png')}
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
              href="https://github.com/lucaszawadneak/react-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('frontend')} />
            </a>
            <a
              href="https://github.com/lucaszawadneak/node-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('backend')} />
            </a>
            <a
              href="https://github.com/lucaszawadneak/react-native-fastfeet/blob/master/README.md"
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
            <FaChartLine size={150} color="#fff" />
            <p>{intl.get('stock')}</p>
            <a
              href="https://github.com/lucaszawadneak/stock-trader"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
            <a
              href="https://lucaszawadneak.github.io/stock-trader/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('webPage')} />
            </a>
          </div>
          <div>
            <img
              src="https://nimbus-screenshots.s3.amazonaws.com/s/0223367b0f74c7fe87cdcbc6bf938c4b.png"
              alt="Prints"
              id="print"
            />
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <FaSkull size={150} color="#fff" />
            <p>{intl.get('monster-hunt')}</p>
            <a
              href="https://github.com/lucaszawadneak/monster-hunt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('seeCode')} />
            </a>
            <a
              href="https://lucaszawadneak.github.io/monster-hunt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title={intl.get('webPage')} />
            </a>
          </div>
          <div>
            <img
              src="https://nimbus-screenshots.s3.amazonaws.com/s/1b17c3ee1528d585b1726dfb1f77f10e.png"
              alt="Prints"
              id="face"
            />
          </div>
        </BoxHolder>
      </ScreenHolder>
    </Container>
  );
}

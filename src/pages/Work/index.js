import React from 'react';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import Button from '~/components/Button';

import { Container, ScreenHolder, Intro, BoxHolder } from './styles';

export default function Work() {
  return (
    <Container>
      <ScreenHolder>
        <Intro id="top">
          <h1>My Work!</h1>
          <h3>
            Here you can see some of the projects that I have already developed,
            or that I am still working in!
          </h3>
        </Intro>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/Maruska.png')}
              alt="Maruska"
              id="title"
            />
            <p>
              A pet management app that helps the user to accommodate a pet in
              his life. Maruska was built in React Native and it's currently
              available on Android at Google Play Store. This is a project that
              I intend to keep moving forward, and to which, I have a lot of
              ideas yet to bet developed!
            </p>
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
          </div>
        </BoxHolder>
        <BoxHolder>
          <div>
            <img
              src={require('~/assets/img/covid.svg')}
              alt="Maruska"
              id="title"
            />
            <p>
              A webpage built in ReactJS and Typescript to compare COVID-19 with
              other diseases. The objective here is to spread the idea that the
              coronavirus isn't just another simple flu. People need to stay at
              home, wear a mask, and wash their hands regularly.
            </p>
            <a
              href="https://github.com/lucascassilha/COVIDComparative/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Code" />
            </a>
            <a
              href="https://covidcomparative.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Web page" />
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
            <p>
              A project developed at GoStack Bootcamp built in React, React
              Native and NodeJS. This is an application for an imaginary
              delivery company. The web version is for the administrator of the
              company to schedule deliveries, register recipients, delivery
              providers and manage the problems that can happen during the
              delivery period. The mobile version is meant to be used by the
              providers. There, they can access the delivery information and
              register problems. Those two applications are connected to a
              NodeJS backend, that processes and distributes the data!
            </p>
            <a
              href="https://github.com/lucascassilha/react-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Frontend code" />
            </a>
            <a
              href="https://github.com/lucascassilha/node-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Backend code" />
            </a>
            <a
              href="https://github.com/lucascassilha/react-native-fastfeet/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="Mobile code" />
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
            <p>
              This app is a GitHub user collector, that shows the libraries that
              the user gave a star!
            </p>
            <a
              href="https://github.com/lucascassilha/gostack-react-native/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="See the code" />
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
            <p>
              This is a basic facebook page built in ReactJS.It was project was
              made from scratch, without the use of create-react-app
            </p>
            <a
              href="https://github.com/lucascassilha/gostack-basic-react/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button title="See the code" />
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

import React from 'react';
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';

function Socials() {
  return (
    <ul className={'flex justify-center text-3xl mt-5 sm:justify-start'}>
      <li className={'mr-3'}>
        <a
          href={'https://www.instagram.com/thawebwelost/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <SiInstagram color={'#E4405F'} />
        </a>
      </li>
      <li className={'mr-3'}>
        <a
          href={'https://www.linkedin.com/in/dmitry-krasnov-816a92112/'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <SiLinkedin color={'#0A66C2'} />
        </a>
      </li>
      <li className={'mr-3'}>
        <a
          href={'https://twitter.com/thewebwelost'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <SiTwitter color={'#1DA1F2'} />
        </a>
      </li>
      <li className={'mr-3'}>
        <a
          href={'mailto:thawebwelost@gmail.com'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <SiGmail color={'#EA4335'} />
        </a>
      </li>
      <li>
        <a
          href={'https://github.com/thewebwelost'}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <SiGithub color={'#181717'} />
        </a>
      </li>
    </ul>
  );
}

export default Socials;

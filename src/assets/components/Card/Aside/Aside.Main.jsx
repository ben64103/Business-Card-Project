import React from 'react';

import Aside from './Aside';
import Socials from './Socials';
import Link from '../common/Link';
import Divider from '../common/Divider';
import ContactInfo from '../common/ContactInfo';
import { profileData } from '../../../../data/profileData';

import { EmailIcon } from '../../common/Icons/EmailIcon';
import { PhoneIcon } from '../../common/Icons/PhoneIcon';
import { GithubIcon } from '../../common/Icons/GithubIcon';
import { TwitterIcon } from '../../common/Icons/TwitterIcon';
import { LinkedinIcon } from '../../common/Icons/LinkedinIcon';


const AsideMain = () => {
  return (
    <>
      <Aside>
        <ContactInfo
          id='email'
          type='Email'
          icon={<EmailIcon />}
          contactMethod={profileData.profileLinks.Gmail}
        />
        <ContactInfo
          id='phone'
          type='Phone'
          icon={<PhoneIcon />}
          contactMethod={profileData.phone.Number}
        />
        <Divider />
        <Socials>
          <h4 className='font-semibold'>Find me on</h4>
          <div className='icons flex items-center gap-5'>
            <Link to={profileData.profileLinks.Github} icon={<GithubIcon />} />
            <Link to={profileData.profileLinks.Linkedin} icon={<LinkedinIcon />} />
            <Link to={profileData.profileLinks.Twitter} icon={<TwitterIcon />} />
          </div>
        </Socials>
      </Aside>
    </>
  );
};

export default AsideMain;
import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai';

interface ContactItem {
  id: number;
  name: string;
  link: string;
  icon: React.ComponentType; // Use React element type for icons
}

const contactsData: ContactItem[] = [
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bryan-mendoza-717357278',
    icon: AiOutlineLinkedin,
  },
  {
    id: 2,
    name: 'Github',
    link: 'https://github.com/Cozy-Benchmark',
    icon: AiOutlineGithub,

  },
  // {
  //   id: 3,
  //   name: '09998017946',
  //   link: '',
  //   icon: AiOutlinePhone,
  // },
  // {
  //   id: 4,
  //   name: 'bryanbenchmarkmendoza@gmail.com',
  //   link: '',
  //   icon: AiOutlineMail,
  // }
];

export default contactsData;

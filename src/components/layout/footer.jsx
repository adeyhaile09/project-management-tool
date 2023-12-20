import { Divider, Text } from '@mantine/core';
import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
const Footer = () => {
  const items = [
    { type: 'icon', icon: FaFacebookSquare },
    { type: 'icon', icon: FaInstagram },
    { type: 'icon', icon: FaTwitterSquare },
    { type: 'icon', icon: FaGithubSquare },
    { type: 'icon', icon: FaDribbbleSquare },
    {
      type: 'section',
      title: 'About',
      items: ['What’s behind the boards.'],
    },
    {
      type: 'section',
      title: 'Projects ',
      items: ['Need anything? Get in touch and we can help.'],
    },

    {
      type: 'section',
      title: 'Contact us',
      items: ['Need anything? Get in touch and we can help.'],
    },
  ];
  return (
    <div className="bg-[#5b5e6a] mt-20">
      <footer className=" mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 ml-32 mr-20 text-white">
        <div>
          <h1 className="w-full text-xl lg:text-4xl xl:text-3xl font-bold ">
            Project Managment T.
          </h1>
          <p className="py-4">
            Empower your team, enhance collaboration, and drive project success
            with our Project Management Tool. Start managing your projects with
            precision and efficiency today!
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 gap-8 ">
          {items.map((item, index) =>
            item.type === 'section' ? (
              <div key={index}>
                <h6 className="font-medium  text-xl">{item.title}</h6>

                {item.items.map((subItem, subIndex) => (
                  <Text key={subIndex} className="py-2 text-sm">
                    {subItem}
                  </Text>
                ))}
              </div>
            ) : null
          )}
        </div>
      </footer>
      <Divider color="gray" />
      <div className="flex justify-center gap-8 mx-auto py-5 px-96  ">
        {items.map((item, index) =>
          item.type === 'icon' ? (
            <SocialIcon key={index} icon={item.icon} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Footer;

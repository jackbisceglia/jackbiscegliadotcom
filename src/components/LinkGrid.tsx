import { useEffect, useState } from 'react';

import { LinkType } from '../data/sharedTypes/data';

const LinkGrid: React.FC<{ links: LinkType[] }> = ({ links }) => {
  return (
    <div className={`w-full flex flex-wrap py-1`}>
      {links.map(({ title, link }, idx) => (
        <a
          href={link}
          key={idx}
          className={` pr-2 text-base font-light leading-5 text-left text-white transition-all duration-100 ease-in-out sm:leading-snug sm:text-lg hover:text-purple-200`}
        >
          {title}
        </a>
      ))}
    </div>
  );
};

export default LinkGrid;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from '../Card';

const MobileFeaturesSection: React.FC = () => {
  return (
    <div className="p-4 ml-2 max-w-sm">
      <div className='mb-28'>
        <h2 className="text-2xl font-bold text-left">
          All the cool{" "}
          <span> features </span>
        </h2>
        <p className="text-gray-700 mt-2 font-normal leading-[22.4px]">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullgiat cras ullgiat cras ullgiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <Link href="#" className="text-blue-600 font-semibold mt-6 inline-block">
          View all the features →
        </Link>
      </div>

      <div className="mt-8 mx-auto">
        <div className='p-4 pr-10 -ml-6 px-10 w-5/6'>
          <Card
            tag="Popular"
            tagColor="bg-blue-200 text-blue-700"
            title="Design for how people think"
            description="Agestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            link="#"
          />
        </div>
        <div className="-mt-[315px] -mr-52 flex justify-center ">
          <Image
            src="/images/BgImg.png"
            width={900}
            height={100}
            alt="Image 1"
            className=""
          />
          
        </div>
      </div>
    </div>
  );
};

export default MobileFeaturesSection;

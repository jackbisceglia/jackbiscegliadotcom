import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

import { HelperInfo, HelperSection } from '../components/HelperText';
import LinkGrid from '../components/LinkGrid';
import SectionTitle from '../components/SectionTitle';
import TextBlock from '../components/TextBlock';
import { LeftSection, RightSection } from '../components/layout/ColumnSection';
import { LeftColumn, RightColumn } from '../components/layout/Columns';
import * as Content from '../data/content/home';

export const pTypography =
  'text-white text-base leading-5 sm:leading-snug sm:text-lg font-light';
export const pTypography_purple = 'text-purple-400 font-semibold';

export type BulletType = {
  color: 'white' | 'purple';
  text: string;
};

export type ProfilePictureType = {
  src: string;
  caption: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome - Jack B</title>
        <meta
          name="description"
          content="Senior CS Student @ UMass Amherst with an interest in Fullstack Engineering. Lots of Web stuff."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☘️</text></svg>"
        />
      </Head>
      <LeftColumn>
        <LeftSection>
          <SectionTitle
            white={Content.IntroGreeting.title!.white}
            purple={Content.IntroGreeting.title!.purple}
          />
          <TextBlock textSections={Content.IntroGreeting.body} />
        </LeftSection>
        <LeftSection>
          <SectionTitle
            white={Content.TechInterests.title!.white}
            purple={Content.TechInterests.title!.purple}
          />
          <TextBlock textSections={Content.TechInterests.body} />
          <HelperSection helpers={Content.Helpers} />
        </LeftSection>
      </LeftColumn>
      <RightColumn>
        <RightSection>
          <SectionTitle purple="More" white="Stuff" />
          <LinkGrid links={Content.Links} />
          <BulletList bullets={Content.Education} />
          <BulletList bullets={Content.Experience} />
          <Picture
            src={Content.Picture.src}
            caption={Content.Picture.caption}
          />
        </RightSection>
      </RightColumn>
    </>
  );
};

const Bullet: React.FC<{ bullet: BulletType[] }> = ({ bullet }) => {
  return (
    <p className={`${pTypography} py-0.5`}>
      {bullet.map(({ color, text }, idx) => {
        return color === 'purple' ? (
          <span className={pTypography_purple} key={idx}>
            {text}
          </span>
        ) : (
          text
        );
      })}
    </p>
  );
};

const BulletList: React.FC<{ bullets: BulletType[][] }> = ({ bullets }) => {
  return (
    <div className="py-4">
      {bullets.map((bullet, idx) => (
        <Bullet key={idx} bullet={bullet} />
      ))}
    </div>
  );
};

const Picture: React.FC<ProfilePictureType> = ({ src, caption }) => {
  const [showCaption, setShowCaption] = useState(false);
  const reverseShowState = () => setShowCaption(!showCaption);
  return (
    <div
      // className="w-5/6 my-2 mr-auto"
      className="w-8/12 my-3 mr-auto sm:w-5/12 lg:w-9/12 "
      onMouseEnter={reverseShowState}
      onMouseLeave={reverseShowState}
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-300 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="w-auto h-auto border-4 border-purple-400 rounded-md">
          <Image
            src={src}
            alt={caption}
            layout="responsive"
            width={1200}
            height={1200}
            objectFit="cover"
            className="scale-100 border-purple-400 rounded-sm"
          />
        </div>
      </div>
      <HelperInfo paddingOptions="py-3" show={showCaption}>
        {caption}
      </HelperInfo>
    </div>
  );
};

export default Home;

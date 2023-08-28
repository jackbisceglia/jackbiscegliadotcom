import {
  BookmarkFilledIcon,
  BookmarkIcon,
  CrumpledPaperIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
  ScissorsIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';

export const SocialLink = ({
  href,
  goToNewPage,
  children,
}: {
  href: string;
  goToNewPage?: boolean;
  children: React.ReactNode;
}) => {
  const LinkStyle =
    'flex justify-start items-center gap-2 text-neutral-200 hover:text-coolmint-500 hover:underline';
  return (
    <li className="mr-auto">
      <Link
        target={goToNewPage ? '_blank' : ''}
        className={LinkStyle}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

function Footer() {
  return (
    <footer className="flex flex-col w-full gap-8 px-6 py-12 mt-auto text-sm break-words border-t bg-coolmint-700 border-coolmint-300/20">
      <nav className="flex flex-col gap-4 mx-auto text-neutral-200">
        <div className="flex flex-col">
          <p className="py-1 font-extrabold">links 🔗</p>
          <ul className="grid grid-cols-2 gap-x-[7vw] lg:flex lg:justify-start lg:gap-[2.5vw]">
            <SocialLink href="/blog">
              <CrumpledPaperIcon />
              blog
            </SocialLink>
            <SocialLink href="/bookshelf">
              <BookmarkIcon />
              bookshelf
            </SocialLink>
            <SocialLink href="/projects">
              <ScissorsIcon />
              projects
            </SocialLink>
            <SocialLink href="/contact">
              <PersonIcon />
              contact
            </SocialLink>
          </ul>
        </div>
        {/* <p className="py-1 font-extrabold">connect 📍</p> */}
        <div className="flex flex-col">
          <p className="py-1 font-extrabold">connect 📍</p>
          <ul className="grid grid-cols-2 gap-x-[4vw] lg:flex lg:justify-start lg:gap-[2.5vw]">
            <SocialLink
              goToNewPage={true}
              href="/JackBiscegliaResumeWebsite.pdf"
            >
              <FileTextIcon />
              resume
            </SocialLink>
            <SocialLink
              goToNewPage={true}
              href="https://github.com/jackbisceglia/"
            >
              <GitHubLogoIcon />
              github
            </SocialLink>
            <SocialLink
              goToNewPage={true}
              href="https://www.linkedin.com/in/jackbisceglia/"
            >
              <LinkedInLogoIcon />
              linkedin
            </SocialLink>
            <SocialLink
              goToNewPage={true}
              href="https://www.goodreads.com/user/show/133940656-jack-bisceglia"
            >
              <BookmarkFilledIcon />
              goodreads
            </SocialLink>
          </ul>
        </div>
      </nav>
      <h3 className="py-1 mx-auto text-coolmint-200 font-extralight">
        jack bisceglia • {new Date().getFullYear()} 🙏
      </h3>
    </footer>
  );
}

export default Footer;

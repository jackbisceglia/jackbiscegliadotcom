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
    'flex justify-center items-center gap-2 lg:gap-2 hover:text-coolmint-500 hover:underline py-1 transition-all duration-200 ease-in-out ';
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
    <footer className="flex flex-col gap-8 justify-center items-center py-8  w-full text-md font-extralight text-center  mt-auto border-t border-coolmint-300/20 bg-coolmint-700">
      {/* <nav className="flex justify-between my-0 mx-auto max-w-[900px] gap-12"> */}
      <nav className="flex flex-col my-0 mx-auto max-w-[900px]">
        <div className="flex flex-col text-left p-3">
          <p className="text-neutral-100 font-extrabold py-1">links 🔗</p>
          <ul className="grid grid-cols-2 grid-rows-2 gap-x-6 lg:flex lg:gap-8 lg:flex-wrap text-neutral-200 text-left w-full mx-auto">
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
        <div className="flex flex-col text-left p-3">
          <p className="text-neutral-100 font-extrabold py-1">find me 📍</p>
          <ul className="grid grid-cols-2 grid-rows-2 gap-x-6 lg:flex lg:gap-8 lg:flex-wrap text-neutral-200 text-left w-full mx-auto">
            <SocialLink href="/2022JackBiscegliaResume.pdf" goToNewPage={true}>
              <FileTextIcon />
              resume
            </SocialLink>
            <SocialLink
              href="https://github.com/jackbisceglia/"
              goToNewPage={true}
            >
              <GitHubLogoIcon />
              github
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/jackbisceglia/"
              goToNewPage={true}
            >
              <LinkedInLogoIcon />
              linkedin
            </SocialLink>
            <SocialLink
              href="https://www.goodreads.com/user/show/133940656-jack-bisceglia"
              goToNewPage={true}
            >
              <BookmarkFilledIcon />
              goodreads
            </SocialLink>
          </ul>
        </div>
      </nav>
      <h3 className="text-coolmint-200 font-extralight">
        jack bisceglia • {new Date().getFullYear()} 🙏
      </h3>
    </footer>
  );
}

export default Footer;

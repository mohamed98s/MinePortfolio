//links
import Link from "next/link";

//icons
import {
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-2xl">
    <Link href={'https://github.com/mohamed98s'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubFill/>
    </Link>
    <Link href={'https://www.linkedin.com/in/mohsayed0098/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxFill/>
    </Link>
  </div>;
};

export default Socials;

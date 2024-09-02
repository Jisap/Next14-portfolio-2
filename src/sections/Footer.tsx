import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'YouTube',
    href: '#',
  },
  {
    title: 'Twitter',
    href: '#',
  },
  {
    title: 'Instagram',
    href: '#',
  },
  {
    title: 'Linkedin',
    href: '#',
  },
]

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center'>
          <div className='text-white/40'>&copy; 2024. All right reserved.</div>
          <nav className='flex flex-col items-center'>
            {footerLinks.map((link) => (
              <a href={link.href} key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>
                  {link.title}
                </span>
                <ArrowUpRightIcon  className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>)
};

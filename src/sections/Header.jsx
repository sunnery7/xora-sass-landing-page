import clsx from "clsx"
import { useEffect, useState } from "react"
import { Link as LinkScroll } from "react-scroll"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled( window.scrollY > 32 )
            // console.log(window.scrollY);
            
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const NavLink = ({ title }) => (
        <LinkScroll
            onClick={() => setIsOpen(false)}
            className="base-bold text-p4 uppercase transition-colors duration-500 hover:text-p1 cursor-pointer max-lg:my-4 max-lg:h-5"
            activeClass="nav-active"
            to={title}
            spy={true}
            smooth={true}
            offset={-100}
        >
            {title}
        </LinkScroll>
    )

  return (
    <header className={clsx(`fixed top-0 left-0 z-50 py-10 w-full transition-all duration-500 max-lg:py-4`, hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]' )}>
        <div className="container flex h-14 item-center maax-lg:px-5 max-lg:justify-between">
            <a className="lg:hidden flex1 cursor-pointer z-2">
                <img src="/images/xora.svg" alt="logo" width={115} height={55} />
            </a>

            <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none' )}>
                <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-4 max-lg:overflow-hidden sidebar-before max-md:px-4">
                    <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                        <ul className="flex max-lg:block max-lg:px-12">
                            <li className="nav-li">
                                <NavLink title="features" />
                                <div className="dot" />
                                <NavLink title="pricing" />
                            </li>

                            <li className="nav-logo">
                                <LinkScroll
                                    to="hero"
                                    offset={-250}
                                    spy
                                    smooth
                                    className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                                >
                                    <img src="/images/xora.svg" alt="logo" width={160} height={55} />
                                </LinkScroll>
                            </li>

                            <li className="nav-li">
                                <NavLink title="faq" />
                                <div className="dot" />
                                <NavLink title="download" />
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                        <img src="/images/bg-outlines.svg" alt="outline" width={960} height={300} className="relative z-2" />
                        <img src="/images/bg-outlines-fill.png" alt="outline" width={960} height={300} className="absolute inset-0 mix-blend-soft-light opacity-5" />
                    </div>
                </div>
            </div>

            <button className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center" onClick={() => setIsOpen((prevState) => !prevState)}>
                <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} alt="magic" className="size-1/2 object-contain" />    
            </button>
        </div>
    </header>
  )
}

export default Header
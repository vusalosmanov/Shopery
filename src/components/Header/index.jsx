import React, { useState, useEffect, useRef } from 'react';
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";



const Header = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Eng');
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false);
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const languageMenuRef = useRef(null);
  const currencyMenuRef = useRef(null);
  const homeDropdownRef = useRef(null);
  const shopMenuRef = useRef(null);
  const pageMenuRef = useRef(null);
  const blogMenuRef = useRef(null);




  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(prev => !prev);
  };
  const toggleMenu = () => setIsMenuOpen(prev => !prev);


  const toggleCurrencyMenu = () => {
    setIsCurrencyMenuOpen(prev => !prev);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(prev => !prev);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen(prev => !prev);
  };

  const togglePageMenu = () => {
    setIsPageMenuOpen(prev => !prev);
  };

  const toggleBlogMenu = () => {
    setIsBlogMenuOpen(prev => !prev);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
      setIsLanguageMenuOpen(false);
    }
    if (currencyMenuRef.current && !currencyMenuRef.current.contains(event.target)) {
      setIsCurrencyMenuOpen(false);
    }
    if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
      setIsHomeDropdownOpen(false);
    }
    if (shopMenuRef.current && !shopMenuRef.current.contains(event.target)) {
      setIsShopMenuOpen(false);
    }
    if (pageMenuRef.current && !pageMenuRef.current.contains(event.target)) {
      setIsPageMenuOpen(false);
    }
    if (blogMenuRef.current && !blogMenuRef.current.contains(event.target)) {
      setIsBlogMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className='header-one w-full'>
        <div className="header-top w-full flex items-center justify-between bg-neutral-800 text-slate-300 p-[15px]">
          <div className="container flex items-center justify-between text-xs">
          <div className="headerTopLeft flex items-center  hidden lg:flex">
              <CiLocationOn className="mr-2 text-2xl" />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="headerTopRight flex items-center gap-4">
              <div className="eng flex items-center gap-2 cursor-pointer relative" onClick={toggleLanguageMenu}>
                <p>{selectedLanguage}</p> <span><RiArrowDownSLine /></span>
                {isLanguageMenuOpen && (
                  <div
                    className="absolute bg-white text-black border border-gray-300 rounded shadow-lg"
                    style={{ top: '100%', left: '0' }}
                    ref={languageMenuRef}
                  >
                    <ul className="flex flex-col p-2">
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedLanguage === 'Eng' ? 'bg-green-600' : ''}`}
                        onClick={() => handleLanguageChange('Eng')}
                      >
                        Eng
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedLanguage === 'BNG' ? 'bg-green-600' : ''}`}
                        onClick={() => handleLanguageChange('BNG')}
                      >
                        BNG
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedLanguage === 'CN' ? 'bg-green-600' : ''}`}
                        onClick={() => handleLanguageChange('CN')}
                      >
                        CN
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedLanguage === 'URDU' ? 'bg-green-600' : ''}`}
                        onClick={() => handleLanguageChange('URDU')}
                      >
                        URDU
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className='usd flex items-center gap-2 cursor-pointer relative' onClick={toggleCurrencyMenu}>
                <p>{selectedCurrency}</p> <span><RiArrowDownSLine /></span>
                {isCurrencyMenuOpen && (
                  <div
                    className="absolute bg-white text-black border border-gray-300 rounded shadow-lg"
                    style={{ top: '100%', left: '0' }}
                    ref={currencyMenuRef}
                  >
                    <ul className="flex flex-col p-2">
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedCurrency === 'USD' ? 'bg-green-600' : ''}`}
                        onClick={() => handleCurrencyChange('USD')}
                      >
                        USD
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedCurrency === 'TK' ? 'bg-green-600' : ''}`}
                        onClick={() => handleCurrencyChange('TK')}
                      >
                        TK
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedCurrency === 'YAN' ? 'bg-green-600' : ''}`}
                        onClick={() => handleCurrencyChange('YAN')}
                      >
                        YAN
                      </li>
                      <li
                        className={`py-1 px-4 hover:text-green-800 cursor-pointer ${selectedCurrency === 'RUP' ? 'bg-green-600' : ''}`}
                        onClick={() => handleCurrencyChange('RUP')}
                      >
                        RUP
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className='Sign  border-gray-400 mx-4'>
                <p><Link to={"signIn"}>Sign in</Link>/<Link to={"signUp"}>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>

        <div className="header-center">
          <div className="container">
            <div className="shoper flex items-center justify-between py-4">
              <div className="shopLogo relative flex items-center">
                <RxHamburgerMenu
                  className="text-3xl cursor-pointer lg:hidden absolute left-0 top-1/2 transform -translate-y-1/2 ml-4"
                  onClick={toggleMenu}
                />
                <img src="https://shopery.netlify.app/main/src/images/logo.png" alt="Shop Logo" />
              </div>
              <div className="relative flex items-center border rounded  hidden lg:flex">
                <CiSearch className="absolute left-2 text-black-500 text-2xl" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-2 max-w-[400px] w-full rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white w-[230px] rounded-r px-4 py-2 hover:bg-green-800 transition-colors"
                >
                  Search
                </button>
              </div>
              <div className="card flex items-center gap-4">
                <div className="heartIcon mr-2">
                  <span><Link to={"wishList"}><GoHeart className='text-3xl' /></Link></span>
                </div>
                <div className="divider h-6 border-l border-gray-400 mx-4"></div>
                <div className="CardBag flex items-center">
                  <div className="bagIcon mr-2">
                    <span><SlHandbag className='text-2xl hover:text-green-800' /></span>
                  </div>
                  <div className="cardMoney text-xs">
                    <p>Shopping Cart:</p>
                    <span className='font-semibold text-sm'>$57.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-end bg-neutral-800 text-slate-300 p-[15px]  lg:block ">
          <div className="container flex items-center justify-between">
            <div className="menu">
              <ul className='flex gap-6'>
                <li
                  className="relative flex items-center justify-between gap-2 cursor-pointer z-10"
                  onMouseEnter={toggleHomeDropdown}
                  onMouseLeave={toggleHomeDropdown}
                  ref={homeDropdownRef}
                >
                  <Link to={"#"} className='flex'>
                    Home
                    <RiArrowDownSLine
                      className={`text-2xl transition-transform duration-300 ${isHomeDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>
                  {isHomeDropdownOpen && (
                    <ul className="absolute left-0 top-full mt-1 bg-white text-black border border-gray-300 rounded shadow-lg p-2 w-48">
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer"><Link to={"/"}>HomePage 01</Link></li>
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer"><Link to={"home2"}>HomePage 02</Link></li>
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 cursor-pointer"><Link to={"home3"}>HomePage 03</Link></li>
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer"><Link>HomePage 04</Link></li>
                    </ul>
                  )}
                </li>
                <li
                  className='relative flex items-center cursor-pointer gap-2 z-10'
                  onMouseEnter={toggleShopMenu}
                  onMouseLeave={toggleShopMenu}
                  ref={shopMenuRef}
                >
                  <Link to={""}>Shop</Link>
                  <span>
                    <RiArrowDownSLine
                      className={`text-2xl transition-transform duration-300 ${isShopMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                  {isShopMenuOpen && (
                    <div
                      className="absolute top-full left-0 bg-white text-black border border-gray-300 rounded shadow-lg mt-1"
                    >
                      <ul className="flex flex-col p-2">
                        <li className='py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 cursor-pointer'>
                          Shop01
                        </li>
                        <li className='py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 cursor-pointer'>
                          Shop02
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li
                  className="relative flex items-center justify-between gap-2 cursor-pointer z-10"
                  onMouseEnter={togglePageMenu}
                  onMouseLeave={togglePageMenu}
                  ref={pageMenuRef}
                >
                  <Link to={"shop"} className='flex'>
                    Pages
                    <RiArrowDownSLine
                      className={`text-2xl transition-transform duration-300 ${isPageMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>
                  {isPageMenuOpen && (
                    <ul className="absolute left-0 top-full mt-1 bg-white text-black border border-gray-300 rounded shadow-lg p-2 w-48">
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 cursor-pointer">User DashBoard</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Order History</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Order Details</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 -pointer">Account Settings</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 -pointer">
                        <Link className='' to="/productinfo">Product Details</Link>
                      </li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100 cursor-pointer">WishList</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Sign in</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Create Account</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Faq</li>
                      <li className="py-1 text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Error 404</li>



                    </ul>
                  )}
                </li>
                <li
                  className="relative flex items-center justify-between gap-2 cursor-pointer z-10"
                  onMouseEnter={toggleBlogMenu}
                  onMouseLeave={toggleBlogMenu}
                  ref={homeDropdownRef}
                >
                  <Link to={"blog"} className='flex'>
                    Blog
                    <RiArrowDownSLine
                      className={`text-2xl transition-transform duration-300 ${isBlogMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>
                  {isBlogMenuOpen && (
                    <ul className="absolute left-0 top-full mt-1 bg-white text-black border border-gray-300 rounded shadow-lg p-2 w-48">
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Blog List</li>
                      <li className="py-1  text-zinc-500 px-4 hover:text-green-500 hover:bg-green-100  cursor-pointer">Single</li>

                    </ul>
                  )}
                </li>
                <li><Link className='flex items-center justify-between gap-2' to="/about">About Us</Link></li>
                <li><Link className='flex items-center justify-between gap-2' to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="phone flex items-center gap-2">
              <MdPhoneInTalk className='text-2xl' /> <p>(219) 555-0114</p>
            </div>
          </div>
        </div>
        {/* Hamburger Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-start">
            <div className="bg-white w-[75%] sm:w-[300px] p-4">
              <IoMdClose
                className="text-2xl mr-4 z-20"
                onClick={toggleMenu}
              />

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-8 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black-500 text-2xl" />
              </div>
              <ul className="mt-4">
                <li className="py-2 border-b">
                  <Link to={"/"} className="flex items-center justify-between">
                    <span>Home</span>
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-200 ${isHomeDropdownOpen ? 'rotate-180' : ''}`}
                      onClick={toggleHomeDropdown}
                    />
                  </Link>
                  {isHomeDropdownOpen && (
                    <div className="dropdown mt-2">
                      <Link to={"/"} className="block py-2 hover:text-green-600">Home 01</Link>
                      <Link to={"/"} className="block py-2 hover:text-green-600">Home 02</Link>
                      <Link to={"/"} className="block py-2 hover:text-green-600">Home 03</Link>
                      <Link to={"/"} className="block py-2 hover:text-green-600">Home 04</Link>
                      <Link to={"/"} className="block py-2 hover:text-green-600">Home 05</Link>

                    </div>
                  )}
                </li>
                <li className="py-2 border-b">
                  <Link to={"/shop"} className="flex items-center justify-between">
                    <span>Shop</span>
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-200 ${isShopMenuOpen ? 'rotate-180' : ''}`}
                      onClick={toggleShopMenu}
                    />
                  </Link>
                  {isShopMenuOpen && (
                    <div className="dropdown mt-2">
                      <Link to={"/shop/shop01"} className="block py-2 hover:text-green-600">Shop01</Link>
                      <Link to={"/shop/shop02"} className="block py-2 hover:text-green-600">Shop02</Link>
                    </div>
                  )}
                </li>
                <li className="py-2 border-b">
                  <Link to={"/pages"} className="flex items-center justify-between">
                    <span>Pages</span>
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-200 ${isPageMenuOpen ? 'rotate-180' : ''}`}
                      onClick={togglePageMenu}
                    />
                  </Link>
                  {isPageMenuOpen && (
                    <div className="dropdown mt-2">
                      <Link to={"/pages/about"} className="block py-2 hover:text-green-600">Product Details</Link>
                      <Link to={"/pages/contact"} className="block py-2 hover:text-green-600">WishList</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Shopping Cart</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Checkout</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Sign In</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Create Account</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">User Dashboard</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Order History</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Order Details</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Account Settings</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">Faq</Link>
                      <Link to={"/pages/faq"} className="block py-2 hover:text-green-600">404</Link>



                    </div>
                  )}
                </li>
                <li className="py-2 border-b">
                  <Link to={"/blogs"} className="flex items-center justify-between">
                    <span>Blog</span>
                    <RiArrowDownSLine
                      className={`ml-1 transition-transform duration-200 ${isBlogMenuOpen ? 'rotate-180' : ''}`}
                      onClick={toggleBlogMenu}
                    />
                  </Link>
                  {isBlogMenuOpen && (
                    <div className="dropdown mt-2">
                      <Link to={"/blogs/blog01"} className="block py-2 hover:text-green-600">Single Blog</Link>
                      <Link to={"/blogs/blog02"} className="block py-2 hover:text-green-600">Blog List</Link>
                    </div>
                  )}
                </li>
                <li className="py-2">
                  <Link to={"/contact"}>About</Link>
                </li>
                <li className="py-2">
                  <Link to={"/contact"}>Contacts</Link>
                </li>
              </ul>

              <div className='dianne flex gap-3 pt-4 mt-60'>
              <div className='photo'>
              <img src="https://shopery.netlify.app/main/src/images/user/img-03.png" alt="" />
              </div>
              <div className='dianne'>
                <p className='font-semibold'>Dianne Russel</p>
                <span className='text-stone-500'>dianne.russel@gmail.com</span>
              </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

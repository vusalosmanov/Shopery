import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white py-10">
        <div className="container max-w-[1320px] mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 mb-8">
              <div className="footerBrand-info">
                <div className="footerLogo mb-4">
                  <img src="https://shopery.netlify.app/main/src/images/logo-nl-white.png" alt="Logo" />
                </div>
                <p className="font-body--md-400 leading-relaxed text-neutral-500 font-semibold text-sm">
                  Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
                </p>
              </div>
              <div className="infoContact mt-4">
                <a href="#" className="text-lg font-semibold border-b hover:text-green-500 border-green-500 pb-1">
                  <span>(219)555-0114</span>
                </a> 
                <span className="mx-4 text-neutral-500 text-lg font-semibold">or</span> 
                <a href="#" className="text-lg font-semibold border-b hover:text-green-500 border-green-500 pb-1">
                  <span>Proxy@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="w-full xs:w-1/2 md:w-1/2 lg:w-2/12 mb-8">
              <h2 className="text-xl font-semibold mb-4">My Account</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">My Account</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Order History</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Shopping Cart</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">WishList</a>
                </li>
              </ul>
            </div>

            <div className="w-full xs:w-1/2 md:w-1/2 lg:w-2/12 mb-8">
              <h2 className="text-xl font-semibold mb-4">My Helps</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">FAQ</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Terms & Condition</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="w-full xs:w-1/2 md:w-1/2 lg:w-2/12 mb-8">
              <h2 className="text-xl font-semibold mb-4">Proxy</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">About</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Shop</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Product</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Track Order</a>
                </li>
              </ul>
            </div>

            <div className="w-full xs:w-1/2 md:w-1/2 lg:w-2/12 mb-8">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Fruit & Vegetables</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Meat & Fish</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Bread & Bakery</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="block hover:text-neutral-100 font-normal text-neutral-500">Beauty & Health</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="visa flex items-center justify-between mt-10 border-t border-gray-400 border-opacity-25 pt-7">
  <div className="commerse">
    <p className=' text-neutral-500'>Shopery eCommerce © 2021. All Rights Reserved</p>
  </div>
  <div className="pay flex gap-2">
    <img src="https://shopery.netlify.app/main/src/images/brand-icon/img-01.png" alt="" />
    <img src="https://shopery.netlify.app/main/src/images/brand-icon/img-02.png" alt="" />
    <img src="https://shopery.netlify.app/main/src/images/brand-icon/img-03.png" alt="" />
    <img src="https://shopery.netlify.app/main/src/images/brand-icon/img-04.png" alt="" />
    <img src="https://shopery.netlify.app/main/src/images/brand-icon/img-05.png" alt="" />
  </div>
</div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;

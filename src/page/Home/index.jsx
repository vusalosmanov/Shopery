import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { Col, Row } from 'antd';

const Home2 = () => {
  return (
    <div>
      <section className='follow'>
        <div className="container mx-auto px-4">
          <div className="instagram">
            <h1 className='text-center pt-3 text-3xl font-semibold'>Follow Us On Instagram</h1>
          </div>
          <div className="instagramPhoto pt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['img-01.jpg', 'img-02.png', 'img-03.png', 'img-04.png', 'img-05.png', 'img-06.png'].map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <img
                    src={`https://shopery.netlify.app/main/src/images/instagram/${image}`}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-[190px] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <FaInstagram className="text-white text-3xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='subscribe bg-gray-100 p-7 mt-20'>
        <div className="container">
          <Row gutter={16} className="items-center ">
            <Col span={12} xs={24} md={24} lg={8}>
              <div className="newsLetter">
                <h3 className='font-bold text-2xl'>Subscribe Our Newsletter</h3>
                <p className='font-normal text-gray-500'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
              </div>
            </Col>
            <Col span={12} xs={24} md={24} lg={8}>
              <div className="email relative flex items-center">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="pl-8 pr-36 py-3 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="absolute right-0 bg-green-600 text-white rounded-full px-6 py-3 -mr-2 hover:bg-green-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </Col>

            <Col span={12} xs={24} md={24} lg={8}>
              <div className="social flex space-x-4 justify-center lg:justify-end mt-4">
                <FaFacebookF className="text-xl text-gray-600 hover:text-green-600 transition-colors" />
                <FaTwitter className="text-xl text-gray-600 hover:text-green-600 transition-colors" />
                <FaPinterestP className="text-xl text-gray-600 hover:text-green-600 transition-colors" />
                <IoLogoInstagram className="text-xl text-gray-600 hover:text-green-600 transition-colors" />
              </div>
            </Col>
          </Row>

        </div>
      </section>
    </div>
  );
}

export default Home2;

import React from 'react';
import Location from "../../assets/shopery.netlify.app (9).svg"
import Phone from "../../assets/shopery.netlify.app (11).svg"
import Email from "../../assets/shopery.netlify.app (10).svg"
import Twit from "../../assets/shopery.netlify.app (12).svg"
import Pinterest from "../../assets/shopery.netlify.app (13).svg"
import Insta from "../../assets/shopery.netlify.app (14).svg"
import Face from "../../assets/shopery.netlify.app (15).svg"
import Home from "../../assets/shopery.netlify.app (16).svg"
import BreadCumb from "../../assets/breedcrumb.jpg"
import Header from './../../components/Header/index';
import Footer from './../../components/Footer/index';



const Contact = () => {
  return (
    <>
    <Header/>

    <section className='relative box-border '>
      <div className='relative w-[100%] h-[140px] overflow-hidden object-cover'>
        <img className='' src={BreadCumb} alt="" />

        <div className=''>
          <ul className='absolute top-[32%] left-[8.2%] flex items-center z-10 gap-3 '>
            <li className='list-none'>
              <a className='text-[16px] leading-6  text-[#999999] font-medium flex items-center no-underline gap-2 ' href="">
                <img className='mb-1.5' src={Home} alt="" />
                <span> > </span>
              </a>
            </li>
            <li className='list-none box-border '>
              <a href="http://" className='text-[#00b207] no-underline text-[16px] leading-6 font-medium flex items-center '>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>


    <section className='box-border pt-[80px] pb-[80px]'>
      <div className='ml-auto mr-auto w-[1320px] '>
        <div className='box-border flex flex-wrap'>
          <div className='w-[25%] box-border pr-[15px]'>
            <div className='text-center p-[0px 20px] box-border overflow-hidden bg-white shadow-custom rounded-[12px]'>
              <div className='pt-7 pb-6 flex flex-col items-center  '>
                <img className='mb-5' src={Location} alt="Location" />
                <p className='font-[16px] text-[#333333] leading-[27px] w-[316px]'>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>

              <div className='pt-7 pb-6 flex flex-col items-center '>
                <img className='mb-5' src={Email} alt="Email" />
                <p className='font-[16px] text-[#333333] leading-[27px]  w-[316px] '>Proxy@gmail.com Help.proxy@gmail.com</p>
              </div>

              <div className='pt-7 pb-6 flex flex-col items-center '>
                <img className='mb-5' src={Phone} alt="Phone" />
                <p className='font-[16px] text-[#333333] leading-[27px] '>(219) 555-0114</p>
                <p className='font-[16px] text-[#333333] leading-[27px] '>(219) 555-0114</p>
              </div>
            </div>
          </div>

          <div className='w-[75%] box-border pl-[15px] '>
            <div className='py-[50px] px-[45px] bg-white shadow-custom overflow-hidden box-border h-[100%] rounded-[12px]'>
              <span className='text-[24px] leading-[36px] font-semibold text-[#1a1a1a] mb-2 '>Just say hello !</span>
              <p className='text-[14px] leading-[21px] text-[#808080] w-[485px]'>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
              <form className='box-border mt-6 flex flex-col '>
                <div className='flex items-center gap-8 mb-4'>
                  <input type="text" className='h-[48px] border border-[#e5e5e5] text-[16px] rounded-[6px] leading-[20px] text-[#1a1a1a] bg-inherit pl-4 w-[95%] focus:outline-none focus:border-[#00b207] ' placeholder='Your Name' />
                  <input type="text" className='h-[48px] border border-[#e5e5e5] text-[16px] rounded-[6px] leading-[20px] text-[#1a1a1a] bg-inherit pl-4 w-[95%] focus:outline-none focus:border-[#00b207]' placeholder='Your Email' />
                </div>

                <input type="text" className='h-[48px] border border-[#e5e5e5] text-[16px] rounded-[6px] leading-[20px] text-[#1a1a1a] bg-inherit pl-4 mb-4 focus:outline-none focus:border-[#00b207]' placeholder='Title' />
                <input type="text" className='box-border  border border-[#e5e5e5] text-[16px] rounded-[6px] leading-[20px] text-[#1a1a1a] bg-inherit pl-4 pb-[60px] pt-3 mb-4 focus:outline-none focus:border-[#00b207] ' placeholder='Subjects' />

                <button type='sumbit' className='bg-[#00b207] cursor-pointer text-[14px] px-8 py-3 rounded-[43px] font-semibold text-[white] flex justify-center items-center self-start hover:bg-[#2c742f]'>Send Message</button>
              </form>
              
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className='box-border'>
      <div className='box-border'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23956.07338001159!2d48.488867091620264!3d41.36302106556557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403795fdd1d1104f%3A0x4d72ce05a0c9228d!2sQuba!5e0!3m2!1saz!2saz!4v1726310113903!5m2!1saz!2saz" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy" 
            overflow="hidden"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    </section>

    <section className='box-border pt-[80px] pb-[80px] bg-[#f7f7f7]'>
      <div className='ml-auto mr-auto w-[1320px]'>
        <div className='box-border flex flex-wrap justify-between'>
          <div className='box-border'>
            <span className='text-[#1a1a1a] leading-[36px] text-[24px] font-semibold box-border'>Subscribe Our Newsletter</span>
            <p className='text-[#999999] w-[75%] text-[14px] font-medium leading-[21px] box-border'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </div>
          <div className='flex items-center box-border'>
            <form className='box-border'>
              <div className='rounded-[46px] mr-[22px] relative'>
                <input type="text" className='w-[430px] h-[52px] rounded-[46px] bg-white text-[16px] text-[#1a1a1a] border border-[#e5e5e5] leading-[24px] focus:outline-none focus:border-[#00b207] pl-3' placeholder='Your Email Address' />
                <button className='absolute top-0 right-0  cursor-pointer text-[16px] leading-[19.6px] h-[52px] w-[170px] font-semibold rounded-[43px] text-[white] bg-[#00b207] outline-none box-border hover:bg-[#2c742f]'>Subscribe</button>
              </div>
            </form>

            <ul className='flex items-center box-border '>
              <li className=' list-none box-border '>
                <a className='text-[#4d4d4d] w-[40px] h-[40px] flex items-center content-center no-underline cursor-pointer' href="http://">
                  <img className='' src={Face} alt="Face" />
                </a>
              </li>

              <li className=' list-none box-border'>
                <a className='text-[#4d4d4d] w-[40px] h-[40px] flex items-center content-center no-underline cursor-pointer' href="http://">
                  <img className='' src={Twit} alt="Twit" />
                </a>
              </li>
              
              <li className='list-none box-border'>
                <a className='text-[#4d4d4d] w-[40px] h-[40px] flex items-center content-center no-underline cursor-pointer' href="http://">
                  <img className='' src={Pinterest} alt="Pinterest" />
                </a>
              </li>

              <li className=' list-none box-border'>
                <a className='text-[#4d4d4d] w-[40px] h-[40px] flex items-center content-center no-underline cursor-pointer' href="http://">
                  <img className='' src={Insta} alt="Insta" />
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
    <Footer/>

    </>
  )
}

export default Contact
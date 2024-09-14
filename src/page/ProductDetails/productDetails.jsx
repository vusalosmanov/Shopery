import React from 'react'
import Header from '../../components/Header'
import Home from "../../assets/shopery.netlify.app (16).svg"
import BreadCumb from "../../assets/breedcrumb.jpg"
import Twit from "../../assets/shopery.netlify.app (12).svg"
import Pinterest from "../../assets/shopery.netlify.app (13).svg"
import Insta from "../../assets/shopery.netlify.app (14).svg"
import Face from "../../assets/shopery.netlify.app (15).svg"
import Star from "../../assets/shopery.netlify.app (17).svg"
import Bag from "../../assets/shopery.netlify.app (18).svg"
import Heart from "../../assets/shopery.netlify.app (19).svg"
import FrameVega from "../../assets/img-01 (1).png"
import BrandIcon from "../../assets/brand-img.png"
import Bag2 from "../../assets/shopery.netlify.app (20).svg"
import VideoPlay from "../../assets/shopery.netlify.app (21).svg"
import Correct from "../../assets/shopery.netlify.app (22).svg"
import VideoImage from "../../assets/img-10 (1).png"
import Footer from '../../components/Footer'
import Right from "../../assets/shopery.netlify.app (8).svg"
import ProductList2 from './../../components/productList2/productList2';



const ProductInfo = () => {
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
              <a href="http://" className='text-[#00b207] no-underline text-[16px] leading-6 font-medium flex items-center '>Category</a>
            </li>

            <li className='list-none box-border '>
              <a href="http://" className='text-[#00b207] no-underline text-[16px] leading-6 font-medium flex items-center '>Vegetables</a>
            </li>

            <li className='list-none box-border '>
              <a href="http://" className='text-[#00b207] no-underline text-[16px] leading-6 font-medium flex items-center '>Chinese Cabbage</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className='box-border relative'>
        <div className='max-w-[1320px] mr-auto ml-auto box-border '>
            <div className='mt-8 flex'>
                <div className='w-[50%]'>
                    <div className='flex mt-5 box-border'>
                        <div className='absolute w-[80px] flex items-center '>

                        </div>

                        <div className='ml-3 w-[100%] h-[556px] '>
                            <img className='w-[100%] h-[556px]' src={FrameVega} alt="FrameVega" />
                        </div>
                    </div>
                </div>
                <div className='w-[50%] '>
                    <div className='py-5 px-0 border border-b-[#e5e5e5] '>
                        <div className='flex items-center mb-3 '>
                            <span className='text-[36px] font-semibold leading-[43.2px] '>Chinese Cabbage</span>
                            <span className='bg-[#20b52633] text-[#2c742f] text-[14px] leading-5 font-semibold py-1 px-2 rounded-[4px] mx-2 '>In Stock</span>
                        </div>

                        <div className='flex items-center mb-5 '>
                            <img className='' src={Star} alt="Ratings" />
                            <img className='' src={Star} alt="Ratings" />
                            <img className='' src={Star} alt="Ratings" />
                            <img className='' src={Star} alt="Ratings" />
                            <img className='' src={Star} alt="Ratings" />
                            <span className='text-[#333333] leading-5 text-[14px] font-medium'>4 Review</span>
                            <span className='w-1 h-1 rounded-[50%] mx-3 bg-[#b2b2b2] '>.</span>
                            <span className='text-[#333333] leading-5 text-[14px] font-medium '>Sku: 2,51,594</span>
                        </div>

                        <div className='flex items-center box-border '>
                            <div className='flex items-center gap-2'>
                                <del className='text-[#b2b2b2] text-[20px] font-medium '>$48.28</del>
                                <span className='text-[#2c742f] leading-9 font-medium text-[20px]'>$17.28</span>
                            </div>
                            <span className='bg-[#ea4b481a] text-[#ea4b48] ml-3 py-[3px] px-[10px] text-[14px] leading-5 font-medium rounded-[15px] font-semibold'>64% off</span>
                        </div>
                    </div>

                    <div className='px-0 py-5 border-b-[#e5e5e5] '>
                        <div className='flex items-center justify-between mb-4 '>
                            <div className='flex items-center'>
                                <span className='mr-2 text-[14px] font-medium leading-5 '>Brand:</span>
                                <a className='text-[#0d6efd] no-underline ' href="">
                                    <img className='border-0 outline-none ' src={BrandIcon} alt="BrandIcon" />
                                </a>
                            </div>

                            <div className='flex items-center'>
                                <span className='text-[#1a1a1a] mr-[10px] leading-5 text-[14px] font-medium '>Share item :</span>
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
                        <p className='text-[#808080] leading-5 text-[14px] font-medium '>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.</p>
                    </div>

                    <div className='py-5 px-0 border-b-[#e5e5e5] '>
                        <div className='flex items-center'>
                            <div className='w-[125px] h-[50px] p-2 rounded-[170px] border border-[#e5e5e5] flex justify-around mr-3  '>
                                <input className='w-[100px] flex items-center pt-1 text-center leading-6 font-medium text-[#1a1a1a] focus:outline-none focus:border-[#00b207] ' type="number" placeholder='0' />
                            </div>
                            <button className='flex items-center justify-center rounded-[43px] mr-3 w-[445px] cursor-pointer text-[14px] leading-4 py-[14px] px-8 font-semibold bg-[#00b207] text-white hover:bg-[#2c742f]  '>Add To Card 
                                <img className='ml-3 w-[20px] filter invert ' src={Bag} alt="Bag" />
                            </button>
                            <button className=' flex items-center justify-center w-[52px] h-[52px] rounded-[100%] overflow-hidden bg-[#20b5261a]    cursor-pointer hover:bg-[#00b207] text-white group'>
                                <img className='w-[20px] group-hover:filter group-hover:invert' src={Heart} alt="Heart" />
                            </button>
                        </div>
                    </div>

                    <div className='py-5 px-0 box-border '>
                        <div className='box-border'>
                            <span className='text-[#1a1a1a] mb-3 leading-5 text-[14px] font-semibold'>Category :</span>
                            <a href="" className='no-underline text-[#808080] font-medium text-[14px] ml-2'>Vegetables</a>
                        </div>

                        <div className='flex items-center'>
                            <span className='mr-1.5 text-[#1a1a1a] leading-5 text-[14px] font-semibold'>Tag :</span>

                            <div className='box-border'>
                                <a href="" className='text-[#808080] mr-1.5 leading-5 text-[14px] font-medium no-underline '>Vegetables</a>
                                <a href="" className='text-[#808080] mr-1.5 leading-5 text-[14px] font-medium no-underline '>Vegetables</a>
                                <a href="" className='text-[#808080] mr-1.5 leading-5 text-[14px] font-medium no-underline '>Vegetables</a>
                                <a href="" className='text-[#808080] mr-1.5 leading-5 text-[14px] font-medium no-underline '>Vegetables</a>
                                <a href="" className='text-[#808080] mr-1.5 leading-5 text-[14px] font-medium no-underline '>Vegetables</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </section>

    <section className='relative py-20 px-0 box-border'>
        <div className='py-0 px-4 mb-8 shadow-custom box-border '>
            <div className='w-[100%] mr-auto ml-auto max-w-[1320px] box-border'>
                <ul className='mb-4 flex flex-wrap justify-center list-none gap-5  '>
                    <li className='list-none '>
                        <button className='text-[#1a1a1a] border border-b-[#00b207] text-[16px] font-semibold cursor-pointer py-2 '>Description</button>
                    </li>
                    <li className='list-none '>
                        <button className='text-[#1a1a1a] text-[16px] font-semibold cursor-pointer py-2 '>Aditional Information</button>
                    </li>
                    <li className='list-none '>
                        <button className='text-[#1a1a1a]  text-[16px] font-semibold cursor-pointer py-2  '>Customer Feedback</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className='box-border'>
            <div className='w-[100%] mr-auto ml-auto max-w-[1320px] box-border'>
                <div className='box-border'>
                    <div className='box-border'>
                        <div className='flex flex-wrap box-border'>
                            <div className='w-[58%]'>
                                <p className='w-[648px] text-[14px] text-[#808080] font-medium mb-5'>Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.</p>

                                <p className='w-[648px] text-[14px] text-[#808080] font-medium mb-5'>Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.</p>

                                <div className='mb-5'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <img className='bg-[#00b207] w-[20px]  rounded-[50%] text-[white] ' src={Correct} alt="Correct" />
                                        <span className='text-[14px] leading-[19.6px] font-medium text-[#808080] box-border'>100 g of fresh leaves provides.</span>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <img className='bg-[#00b207] w-[20px]  rounded-[50%] text-[white] ' src={Correct} alt="Correct" />
                                        <span className='text-[14px] leading-[19.6px] font-medium text-[#808080] box-border'>100 g of fresh leaves provides.</span>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <img className='bg-[#00b207] w-[20px]  rounded-[50%] text-[white] ' src={Correct} alt="Correct" />
                                        <span className='text-[14px] leading-[19.6px] font-medium text-[#808080] box-border'>100 g of fresh leaves provides.</span>
                                    </div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <img className='bg-[#00b207] w-[20px]  rounded-[50%] text-[white] ' src={Correct} alt="Correct" />
                                        <span className='text-[14px] leading-[19.6px] font-medium text-[#808080] box-border'>100 g of fresh leaves provides.</span>
                                    </div>
                                </div>

                                <p className='w-[648px] text-[14px] text-[#808080] font-medium mb-5 leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae totam eos nostrum suscipit molestiae dolorem maxime, reprehenderit labore praesentium repudiandae a? Minus consequuntur ad dignissimos error corporis tenetur ducimus odit.</p>
                            </div>
                            <div className='w-[42%]'>
                                <div className='w-[100%] h-[300px] rounded-[6px] overflow-hidden mb-5 box-border relative'>
                                    <img className='w-[100%]' src={VideoImage} alt="VideoImage" />
                                    <a href="http://" className='absolute top-[44%] left-[45%] w-[50px] h-[50px] rounded-[50%] bg-[#00b207] flex items-center justify-center text-[white]'>
                                        <img className='' src={VideoPlay} alt="VideoPlay" />
                                    </a>
                                </div>
                                <div className='flex items-center justify-between relative'>
                                    <div className='flex items-center'>
                                        <img className='mr-[15px]' src={Bag2} alt="Bag2" />
                                        <div className='flex flex-col'>
                                            <span className='text-[14px] leading-5 text-[#1a1a1a] font-semibold mb-1.5'>64% Discount</span>
                                            <span className='text-[#808080] leading-5 font-medium text-[13px]'>Save your 64% money with us</span>
                                        </div>
                                    </div>

                                    <div className='flex items-center '>
                                        <img className='mr-[15px]' src={Bag2} alt="Bag2" />
                                        <div className='flex flex-col'>
                                            <span className='text-[14px] leading-5 text-[#1a1a1a] font-semibold mb-1.5'>100% Organic</span>
                                            <span className='text-[#808080] leading-5 font-medium text-[13px]'>100% Organic Vegetables</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="flex flex-col my-6 mx-0 px-0 box-border ">
            <div className="flex items-center w-[1341px] mx-auto">
                <span className="flex text-2xl font-semibold text-[#1a1a1a] my-6 mx-auto w-[1333px] ">Popular Categories</span>
                    <a className="text-[16px] font-semibold text-[#00b207] w-[73px]  " href="http://">View All </a>
                    <img src={Right} alt="Right" />
            </div>
            <ProductList2/>
        </div>

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

export default ProductInfo
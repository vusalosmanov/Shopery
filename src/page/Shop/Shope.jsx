import React, { useState } from 'react';
import ProductCart from '../../components/ProductCart';
import Banner from '../../assets/image/banner/breedcrumb.jpg';
import { allcategoriesArray } from '../../data/AllCategories';
import { ratingArray } from '../../data/Rating';
import { popularTagArray } from '../../data/PopularTag';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import Bannerr from '../../assets/image/banner/banner-sm-19.jpg';

const Shope = () => {
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenRatings, setIsOpenRatings] = useState(false);
  const [isOpenTags, setIsOpenTags] = useState(false);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(2000);
  const [isFilterVisibleMobile, setIsFilterVisibleMobile] = useState(false);
  const [isFilterVisibleDesktop, setIsFilterVisibleDesktop] = useState(true);

  const toggleOpenCategories = () => setIsOpenCategories(!isOpenCategories);
  const toggleOpenRatings = () => setIsOpenRatings(!isOpenRatings);
  const toggleOpenTags = () => setIsOpenTags(!isOpenTags);
  const handleMinChange = (e) => setRangeMin(Math.min(e.target.value, rangeMax - 1));
  const handleMaxChange = (e) => setRangeMax(Math.max(e.target.value, rangeMin + 1));
  const toggleFilterVisibilityMobile = () => setIsFilterVisibleMobile(!isFilterVisibleMobile);
  const toggleFilterVisibilityDesktop = () => setIsFilterVisibleDesktop(!isFilterVisibleDesktop);

  return (
    <>
      <div className='w-full h-[120px] overflow-hidden relative'>
        <img src={Banner} alt="Banner" className='object-cover w-full h-full' />
        <div className='absolute top-[10px]'></div>
      </div>
      {/* Filter */}
      <div className='max-w-[1320px] mx-auto px-[12px] h-auto w-full'>
        <div className='mt-[32px] flex justify-between flex-wrap'>
          <div className='lg:hidden block'>
            <button onClick={toggleFilterVisibilityMobile} className='px-[32px] py-[14px] bg-[#00b207] rounded-[43px] cursor-pointer text-[14px] text-[#fff] font-medium flex items-center'>
              Filter
              <span className='ml-[10px] text-[22px]'><IoFilter /></span>
            </button>
          </div>
          <div className='lg:block hidden'>
            <button onClick={toggleFilterVisibilityDesktop} className='px-[32px] py-[14px] bg-[#00b207] rounded-[43px] cursor-pointer text-[14px] text-[#fff] font-medium flex items-center'>
              Filter
              <span className='ml-[10px] text-[22px]'><IoFilter /></span>
            </button>
          </div>
          <div className='flex lg:justify-between justify-center items-center w-[960px]'>
            <div className='flex items-center'>
              <label htmlFor="sort" className='text-[#808080] text-[14px] mr-[6px] capitalize'>Sort by:</label>
              <select id="sort" className='px-[16px] py-[10px] min-w-[150px] border-[1px] border-[#e5e5e5] text-[#4d4d4d] text-[14px] rounded-[4px] bg-none'>
                <option value="default" className='bg-white text-[#4d4d4d] text-[14px] px-[16px] py-[10px]'>Latest</option>
                <option value="price-asc" className='bg-white text-[#4d4d4d] text-[14px] px-[16px] py-[10px]'>Newest</option>
                <option value="price-desc" className='bg-white text-[#4d4d4d] text-[14px] px-[16px] py-[10px]'>Oldest</option>
              </select>
            </div>
            <div className='mr-[25px] lg:block hidden'>
              <p className='text-[#808080] text-[16px]'><span className=' font-bold mr-[5px] text-[#000]'>52</span>Result Found</p>
            </div>
          </div>
        </div>
      </div>
      {/* Shop */}
      <div className='mt-[24px]'>
        <div className='max-w-[1320px] mx-auto px-[12px] w-full flex flex-col lg:flex-row'>
          {/* Filter */}
          <div className={`flex flex-col lg:w-[320px] lg:block ${isFilterVisibleMobile ? 'block' : 'hidden'} lg:visible ${isFilterVisibleDesktop ? 'block' : 'hidden'} lg:h-auto lg:overflow-visible`}>
            {/* All Categories */}
            <div className={`w-full ${isOpenCategories ? 'pb-[24px]' : 'pb-0 h-[100px]'}`}>
              <div className='flex items-center justify-between'>
                <h1 className='text-[20px] font-semibold'>All Categories</h1>
                <button onClick={toggleOpenCategories} className='focus:outline-none ml-[20px]'>
                  {isOpenCategories ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
              {isOpenCategories && (
                <div className='flex flex-wrap flex-col pt-[12px]'>
                  {allcategoriesArray.map(category => (
                    <div key={category.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`category-${category.id}`}
                        value={category.name}
                        className="mr-2 w-5 h-5 border-2 rounded-[20px] appearance-none checked:bg-green-500 checked:border-green-500 checked:border-[6px] checked:bg-white"
                      />
                      <label htmlFor={`category-${category.id}`} className="text-[14px] text-[#000] capitalize cursor-pointer leading-[21px]">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Price Filter */}
            <div className='w-full'>
              <h2 className='text-xl mb-2'>Price Range</h2>
              <div className="range-filter mt-[20px]">
                <div className="range-inputs">
                  <input type="range" value={rangeMin} onChange={handleMinChange} min={0} max={2000} step={1} />
                  <input type="range" value={rangeMax} onChange={handleMaxChange} min={0} max={2000} step={1} />
                </div>
                <div className='result-inputs'>
                  <div className="item">
                    <input type="number" value={rangeMin} onChange={handleMinChange} />
                  </div>
                  <div className="item">
                    <input type="number" value={rangeMax} onChange={handleMaxChange} />
                  </div>
                </div>
              </div>
            </div>
            {/* Rating */}
            <div className='w-full mb-[24px]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[20px] font-semibold'>Rating</h1>
                <button onClick={toggleOpenRatings} className='focus:outline-none ml-[20px]'>
                  {isOpenRatings ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
              {isOpenRatings && (
                <div className='flex flex-wrap flex-col mt-2'>
                  {ratingArray.map(rating => (
                    <div key={rating.id} className='flex items-center mb-2'>
                      <input
                        type='checkbox'
                        id={`rating-${rating.id}`}
                        value={rating.value}
                        className='mr-2 w-5 h-5 accent-green-500'
                      />
                      <label htmlFor={`rating-${rating.id}`} className='text-sm'>
                        {rating.ratingIcons}
                      </label>
                      <p>{rating.ratingCount.toFixed(1)}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Popular Tags */}
            <div className='w-full mb-[24px]'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[20px] font-semibold'>Popular Tags</h1>
                <button onClick={toggleOpenTags} className='focus:outline-none ml-[20px]'>
                  {isOpenTags ? <FaChevronDown /> : <FaChevronUp />}
                </button>
              </div>
              {isOpenTags && (
                <div className='flex flex-wrap gap-2 mt-2'>
                  {popularTagArray.map(tag => (
                    <button
                      key={tag.id}
                      className='flex items-center px-[16px] py-[8px] text-[14px] leading-[21px] capitalize hover:bg-[#00b207] hover:text-[#fff] bg-[#f2f2f2] rounded-full'
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className='w-full h-[295px] rounded-[10px] text-center relative'>
              <img src={Bannerr} alt="banner" />
              <div className='absolute top-[20px] left-[25%] text-center'>
                <h5 className='text-[25px] capitalize'><span className='text-[32px] text-[#ff8a00]'>79%</span> Discount</h5>
                <p>on Your Fast Order</p>
              </div>
            </div>
          </div>
          {/* Product */}
          <div className={`flex flex-wrap max-w-[960px] gap-3 justify-center ${isFilterVisibleMobile ? 'lg:ml-[320px]' : 'lg:ml-0'}`}>
            <ProductCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shope;

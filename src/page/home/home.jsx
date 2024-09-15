import { useDispatch } from "react-redux";
import ProductList from "../../components/productList/productList";
import { useEffect } from "react";
import { setProducts } from '../../reduxtoolkit/productSlice';
import products from './../../data/product';
import ProductList2 from "../../components/productList2/productList2";
import products2 from "../../data/products2";
import { setProducts2 } from "../../reduxtoolkit/productSlice2";
import Shipping from "../../assets/shopery.netlify.app (1).svg"
import Support from "../../assets/shopery.netlify.app (2).svg"
import Payment from "../../assets/shopery.netlify.app (3).svg"
import MoneyBack from "../../assets/shopery.netlify.app (4).svg"
import Right from "../../assets/shopery.netlify.app (8).svg"


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      // Simulating an API call
      const fetchProducts = async () => {
        // Dispatch the setProducts action with the fetched data
        dispatch(setProducts(products));
      };
      fetchProducts();
    }, [dispatch]);

    useEffect(() => {
      // Simulating an API call
      const fetchProducts2 = async () => {
        // Dispatch the setProducts action with the fetched data
        dispatch(setProducts2(products2));
      };
      fetchProducts2();
    }, [dispatch]);

  return (
    <>
    <div className="flex my-6 mx-0 box-border">
        <div className="flex w-100% px-0 mx-auto gap-8">
            <div className="image1">
                <div className="absolute box-border top-[165px] left-[65px] ">
                    <h2 className="max-w-[70%] text-[48px] font-bold text-[white] ">Fresh & Healthy Organic Food</h2>

                    <div className=" flex flex-col my-8 pl-3 border-l-2 border-l-[#84d187]">
                        <h5 className="mb-3 text-[white] text-[22px] font-semibold">Sale up to <span className="text-center px-3 py-1 bg-[#ff8a00] font-bold rounded-md box-border text-[20px] text-[#fff] ">30% OFF</span></h5>
                        <p className="text-[#cccccc] text-[14px] leading-5 font-semibold">Free shipping on all your order.</p>
                    </div>

                    <button className="text-[#00b207] bg-[white] text-[14px] py-[14px] px-8 font-bold rounded-[43px] hover:opacity-90 ">Shop Now - <img src="" alt="" /></button>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="image2">
                    <div className="absolute top-[32px] left-[32px] box-border">
                        <h5 className="text-[#1a1a1a] my-2 uppercase text-[14px] font-semibold ">Summer Sale</h5>
                        <h2 className="text-[#1a1a1a] my-3 uppercase text-[32px] leading-6 font-semibold">75% OFF </h2>
                        <p className="text-[#666666] my-6 text-[14px] leading-4  font-medium">Only Fruit & Vegetable</p>
                        <button className="text-[#00b207] bg-[none] text-[14px] py-[14px] font-bold rounded-[43px] hover:opacity-90 ">Shop Now - <img src="" alt="" /></button>
                    </div>
                </div>
                <div className="image3">
                    <div className=" flex flex-col items-center justify-center  absolute top-[19%] text-center box-border">
                        <h5 className="uppercase mb-3 text-[white] text-[14px] font-semibold">Best Deal</h5>
                        <h2 className="capitalize mb-3 text-[white] text-[32px] font-semibold max-w-[72%]">Special Products Deal of the Month</h2>
                        <button className="text-[#00b207] bg-[none] text-[14px] py-[14px] font-bold rounded-[43px] hover:opacity-90 ">Shop Now - <img src="" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="flex my-6 mx-0 box-border">
        <div className="flex mx-auto gap-7 bg-white items-center py-10 px-4 rounded-lg shadow-xl">
            <div className="flex gap-5">
                <img className="" src={Shipping} alt="Shipping" />
                <div className="flex flex-col">
                    <span className="text-base text-gray-900 leading-6 font-semibold">Free Shipping</span>
                    <span className="text-sm text-gray-500 leading-5 font-normal">Free shipping on all your order</span>
                </div>
            </div>

            <div className="flex gap-5">
                <img className="" src={Support} alt="Support" />
                <div className="flex flex-col">
                    <span className="text-base text-gray-900 leading-6 font-semibold">Customer Support 24/7</span>
                    <span className="text-sm text-gray-500 leading-5 font-normal">Instant access to Support</span>
                </div>
            </div>

            <div className="flex gap-5">
                <img className="" src={Payment} alt="Payment" />
                <div className="flex flex-col">
                    <span className="text-base text-gray-900 leading-6 font-semibold">100% Secure Payment</span>
                    <span className="text-sm text-gray-500 leading-5 font-normal">We ensure your money is save</span>
                </div>
            </div>

            <div className="flex gap-5">
                <img className="" src={MoneyBack} alt="MoneyBack" />
                <div className="flex flex-col">
                    <span className="text-base text-gray-900 leading-6 font-semibold">Money-Back Guarantee</span>
                    <span className="text-sm text-gray-500 leading-5 font-normal">30 Days Money-Back Guarantee</span>
                </div>
            </div>
        </div>
    </div>

        <div className="flex flex-col my-6 mx-0 px-0 box-border ">
            <div className="flex items-center w-[1341px] mx-auto">
                <span className="flex text-2xl font-semibold text-[#1a1a1a] my-6 mx-auto w-[1333px] ">Popular Categories</span>
                    <a className="text-[16px] font-semibold text-[#00b207] w-[73px] " href="http://">View All </a>
                    <img className="" src={Right} alt="Right" />
            </div>
            <ProductList/>
        </div>

        <div className="flex flex-col my-6 mx-0 px-0 box-border ">
            <div className="flex items-center w-[1341px] mx-auto">
                <span className="flex text-2xl font-semibold text-[#1a1a1a] my-6 mx-auto w-[1333px] ">Popular Categories</span>
                    <a className="text-[16px] font-semibold text-[#00b207] w-[73px]  " href="http://">View All </a>
                    <img src={Right} alt="Right" />
            </div>
            <ProductList2/>
        </div>

        <section className="flex my-6 mx-0 items-center justify-center px-0 box-border">
            <div className="flex my-0 mx-0 py-4 box-border gap-6">
                <div className="image4">
                    <div className=" flex flex-col items-center justify-center  absolute top-[6.7%] left-[7%] text-center box-border">
                        <h5 className="uppercase mb-3 text-[white] text-[14px] font-semibold">Best Deal</h5>
                        <h2 className="capitalize mb-2 text-[white] text-[40px] font-semibold ">Sale of the Month</h2>
                        <h2 className="mb-3 text-[white] text-[20px] font-medium ">The countdown is finished!</h2>
                        <button className="text-[#00b207] bg-[white] text-[14px] py-[14px] px-8 font-bold rounded-[43px] hover:opacity-90 ">Shop Now - <img src="" alt="" /></button>
                    </div>
                </div>

                <div className="image5">
                    <div className=" flex flex-col items-center justify-center  absolute top-[6.7%] left-[16%] text-center box-border">
                            <h5 className="uppercase mb-3 text-[white] text-[14px] font-semibold">85% Fat Free</h5>
                            <h2 className="capitalize mb-2 text-[white] text-[40px] font-semibold ">Low-Fat Meat</h2>
                            <h2 className="mb-3 text-[white] text-[20px] font-medium ">Started at <span className="text-[#ff8a00] text-[20px] font-semibold ">$79.99</span></h2>
                            <button className="text-[#00b207] bg-[white] text-[14px] py-[14px] px-8 font-bold rounded-[43px] hover:opacity-90 ">Shop Now - <img src="" alt="" /></button>
                        </div>
                </div>

                <div className="image6 ">
                    <div className=" flex flex-col items-center justify-center  absolute top-[6.7%] left-[13%] text-center box-border">
                            <h5 className="uppercase mb-3 text-[#1a1a1a] text-[14px] font-semibold">Summer Sale</h5>
                            <h2 className="capitalize mb-2 text-[#1a1a1a] text-[40px] font-semibold ">100% Fresh Fruit</h2>
                            <h2 className="mb-3 text-[#1a1a1a] text-[20px] font-medium ">Up to <span className="text-[#fcc900] text-[18px] font-semibold py-1.5 px-3 ml-3 rounded-md bg-[#1a1a1a] ">64% OFF</span></h2>
                            <button className="text-[#00b207] bg-[white] text-[14px] py-[14px] px-8 font-bold rounded-[43px] hover:opacity-90  ">Shop Now - <img src="" alt="" /></button>
                        </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;
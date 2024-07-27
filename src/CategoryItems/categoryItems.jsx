import './categoryItems.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FastFoodDetails from '../FastFoodDetails/fastFoodDetails';
import { useEffect, useState } from 'react';
const CategoryItems = ({ categoryItems }) => {
    const [foodDetails, setFoodDetails] = useState();
    const [defaultFood, setDefualtFood] = useState();
    useEffect(() => {
        if (categoryItems.length > 0) {
            const smallestIdFood = categoryItems.reduce((prev, curr) => {
                return (prev.id > curr.id) ? prev : curr;
            });
            setDefualtFood(smallestIdFood);
        }
    }, [categoryItems]);

    return (
        <div className="container">
            <FastFoodDetails food={foodDetails || defaultFood}></FastFoodDetails>
            <div className="swiper-container flex flex-col lg:flex-row flex-wrap w-full">
                <div className="swiper-container flex flex-col lg:flex-row flex-wrap w-full">
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            // When window width is >= 640px (sm)
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            // When window width is >= 768px (md)
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            // When window width is >= 1024px (lg)
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        className="w-full"
                    >
                        {categoryItems.map((fastfood) => (
                            <SwiperSlide key={fastfood.id}>
                                <div className="card flex-col items-center text-center bg-stone-100 w-full sm:w-60 sm:h-60 md:w-40 md:h-44 lg:w-48 lg:h-72 rounded-tl-3xl rounded-br-3xl mx-auto lg:mx-5 my-5">
                                    <img className="card-img-top rounded-tl-3xl max-h-40 min-h-40 w-auto" alt='foodImg' src={fastfood.imageUrl} />
                                    <div className="card-body mt-5">
                                        <h6 className="text-orange-400 font-bold">{fastfood.name}</h6>
                                        <p>قیمت: {fastfood.price.toLocaleString()} تومان</p>
                                        <button
                                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
                                            onClick={() => setFoodDetails(fastfood)}>
                                            جزییات
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="swiper-button-prev hidden lg:block">prev</button>
                    <button className="swiper-button-next hidden lg:block">Next</button>
                </div>
                <button className="swiper-button-prev hidden lg:block">prev</button>
                <button className="swiper-button-next hidden lg:block">Next</button>
            </div>
            <div className="">
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.
                ksjfdhkshdfkjsdhfkjshdfkjsdddddddddh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus omnis, eaque alias quos dolorem aliquam veritatis eius cumque eos soluta? Quod odit unde maxime beatae quae error quasi, vitae aliquam.

            </div>
        </div>
    )
}
export default CategoryItems;

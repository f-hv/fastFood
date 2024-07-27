import './categoryItems.css';

const Ca = ({ categoryItems }) => {
    return (
        <div className="flex flex-row flex-wrap p-5">
            {categoryItems.map((fastfood) => {
                return (
                    <div>
                        <div className="card flex flex-col items-center text-center bg-stone-100 w-48 h-72 rounded-tl-3xl rounded-br-3xl ml-5 p-2 mt-5" key={fastfood.id}>
                            {/*  bg-slate-700---------------- hover on card */}
                            <img className="card-img-top rounded-tl-3xl  max-h-40 min-h-40 w-auto" src={fastfood.imageUrl} />
                            <div className="card-body d-block mt-5">
                                <h6 className="text-orange-400 font-bold">{fastfood.name}</h6>
                                <p className="des text-black text-xs mt-2 text-Purple-900">
                                    {/* text-slate-300  --------hover color */}
                                    {/* قیمت: {fastfood.price.toLocaleString()} تومان */}
                                    {fastfood.ingredients}
                                </p>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            ...
                        </Swiper>
                    </div>
                );
            })}
        </div>)
}
export default Ca;


{/* <div className="fs-ms fw-bold text-muted mb-3">{fastfood.ingredients}</div> */ }
{/* <button className="bg-sky-950 text-white ">
<HiShoppingCart className="fs-5 ms-3" />
افزودن به سبد خرید
</button> */}
// w-32 h-auto 
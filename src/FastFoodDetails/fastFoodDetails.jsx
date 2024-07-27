// import { useEffect } from "react";

const FastFoodDetails = ({ food }) => {
    // debugger
    // let foodToDisplay ;
    // useEffect(()=>{
    //     foodToDisplay = defaultFood || foodDetails  ;

    // },)
    if (!food) {
        return <div>Loading... </div>;
    }
    return (
        <div className="flex flex-col lg:flex-row p-5 w-full" key={food.id}>
            <img className="lg:w-6/12 lg:rounded-3xl sm:rounded-lg w-full h-auto " alt="preview" src={food.imageUrl} />
            <div className="description pt-10 lg:ml-10 flex flex-col text-center lg:text-left">
                <h1 className="text-orange-400 text-2xl lg:text-6xl sm:text-2xl">{food.name}</h1>
                <span className="text-xl lg:text-3xl sm:text-sm mt-4 lg:mt-10">{food.ingredients}</span>
            </div>
        </div>
    )
}

export default FastFoodDetails;
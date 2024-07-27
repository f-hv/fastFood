import './header.css';
import useAxios from "../useAxios";
import Loading from "../Loading/Loading";

const Header = ({ filterItems, children }) => {
    const [categories, , loading] = useAxios({
        url: '/FoodCategory/categories'
    });
    const renderContent = () => {
        if (loading) {
            return <Loading />
        }
        return (
            <div className="">
                <ul>
                    <li className="list-none inline  text-orange-900" onClick={() => filterItems()}>
                        <a className="" href="#">
                            همه فست فودها
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li
                            className="list-none inline pr-10 text-orange-900"
                            key={category.id}
                            onClick={() => filterItems(category.id)}
                        >
                            <a className="" href="#">
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {children}
            </div>
        )
    }
    return (
        <div className="container w-full col bg-stone-100 rounded-tl-2xl rounded-tr-2xl mt-16 px-16">
            <div className="flex justify-center pt-5 h-24 ">
                {renderContent()}
            </div>
            <div className="content row flex justify-between">
                <div className="row w-2/4">
                    <h1 className='text-6xl text-orange-600'> Restaurant</h1>
                    <span className=' text-2xl text-orange-900'>
                        A peaceful and beautiful environment with the most up-to-date food menu in the world
                    </span>
                </div>
                <img className='rounded-tl-3xl rounded-br-3xl' src="image/salon.jpg" alt='salon'></img>
            </div>
        </div>
    )
}

export default Header;
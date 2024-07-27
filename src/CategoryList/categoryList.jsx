
import useAxios from "../useAxios";
import Loading from "../Loading/Loading";


const CategoryList = ({ categoryList }) => {

    const [categories,   , loading] =  useAxios({
        url: '/FoodCategory/categories'
      });

    const renderContent = () => {
        if (loading) {
            return <Loading />
        }
        return (
            <ul>
                {categories.map((category) =>
                    <li 
                        className="list-none inline pr-10 text-orange-900" 
                        key={category.id} 
                        onClick={() => categoryList(category.id)} 
                    >{category.name} </li>
                )}
            </ul>)
    }

    return (
        <div className="flex justify-center pt-5 h-24 ">
            {renderContent()}
        </div>
    )
}
export default CategoryList;

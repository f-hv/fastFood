import './App.css';
import CategoryItems from './CategoryItems/categoryItems'
import Header from './Header/header';
import Loading from './Loading/Loading';
import useAxios from './useAxios';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState("/FastFood/list");
  const [categoryItems, , loading] = useAxios({
    url
  })
  // const getCategoryList = (categoryId) => {
  //   setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  // };

  const filterItems = (categoryId) => {
    console.log("CId:", categoryId);
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);

  }

  const renderContent = () => {
    if (loading) return <Loading />
    if (categoryItems.length === 0) {
      return <p>داده ای پیدا نشد</p>
    }
    return <CategoryItems categoryItems={categoryItems}></CategoryItems>

  }
  return (
    <div className='wrapper  flex flex-col items-center p-5'>
      {/* <img className='bg-main w-full h-full bg-cover' alt='background-food' src="image/food-bg.jpg"></img> */}
      <div className='w-4/5 '>
        <Header filterItems={filterItems}></Header>
        <div className="foodSection bg-stone-200 rounded-bl-2xl rounded-br-2xl pt-16 px-16 " style={{ zIndex: '-99' }}>{renderContent()}</div>
      </div>
    </div>

  );
}

export default App;

import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import ShopCard from "./ShopCard";
import ShopSearch from "./ShopSearch";
import ShopCategorie from "./ShopCategorie";
import { useGetApiQuery } from "../../Redux/userApi/getApi";
import { useState } from "react";
import Pagination from "../../Components/Pagination/Pagination";
const Shop = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const { data: totalData, isLoading: isPending } =
    useGetApiQuery("/totalproducts");
  const itemPerPage = 6;
  const {
    data: shop,
    isLoading,
    refetch,
  } = useGetApiQuery(`/products?search=${search}&category=${category}&Page=${currentPage}&size=${itemPerPage}`);
  const { data, isLoading: loading } = useGetApiQuery("/productsCategory");
  const handelSubmit = (e) => {
    e.preventDefault();
    const searchData = e.target.search.value;
    setSearch(searchData);
    refetch();
  };
  if (isLoading || loading || isPending)
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  const totalPage = Math.ceil(totalData?.count / itemPerPage);
  const pageCount = [...Array(totalPage).keys()];
  return (
    <div className="font-montserrat">
      {/* banner */}
      <div
        className="hero h-96 relative"
        style={{ backgroundImage: "url(https://i.imgur.com/parYYjq.jpg)" }}
      >
        <div className="hero-overlay bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Visit Our Eco Shop</h1>
            <p className="mb-5">
              Explore Sustainable Solutions for Your Waste Management Needs
            </p>
          </div>
        </div>
      </div>

      {/* content */}
      <SectionTitle heading={"shop"} subHeading={"Waste Less, Live More."} />
      <div className="grid grid-cols-12 mx-8 space-x-4">
        <div className="lg:col-span-9 col-span-12">
          <div className=" my-12 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-8 pt-8">
            {shop?.map((item) => (
              <ShopCard key={item?.id} item={item}></ShopCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 col-span-12 mt-20 lg:order-last order-first">
          {/* search input field */}
          <ShopSearch handelSubmit={handelSubmit} />
          {/* categories buttons part */}
          <div className="py-10 px-7 flex flex-col justify-center bg-[#e9f1ea] mt-4">
            <ShopCategorie data={"all products"} setCategory={setCategory} />
            {data?.map((item, idx) => (
              <ShopCategorie data={item} key={idx} setCategory={setCategory} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        data={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Shop;

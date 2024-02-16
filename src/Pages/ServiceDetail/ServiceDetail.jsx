import { Link, useParams } from "react-router-dom";
import useGetAService from "../../API/ServiceApi/useGetAService";
import toast from "react-hot-toast";
import { FaArrowCircleRight } from "react-icons/fa";
import getServicesCategories from "../../API/BlogApi/getServicesCategory";

const ServiceDetail = () => {
  const [categories] = getServicesCategories();
  console.log(categories);
  const { id } = useParams();
  const [data, dataLoading] = useGetAService(id);
  if (dataLoading) {
    return (
      <div className="text-center py-20">
        <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="font-andika">
      <div
        className="hero h-[700px] relative"
        style={{
          backgroundImage: `url(${data?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="mb-8 text-5xl font-bold font-sans">{data?.title}</h1>
            <p className="mb-8 px-20 text-center">{data?.shortDescription}</p>
            <div className="mt-5 flex justify-center items-center gap-10">
              <Link
                to={`/pickUpReq`}
                className=" btn btn-outline text-lg font-sans font-bold rounded-md text-black flex justify-center items-center hover:text-white bg-white  hover:bg-[#f0901f] h-[70px] gap-4 w-[250px] border-0"
              >
                Request PickUp
                <span className="text-3xl">
                  <FaArrowCircleRight />
                </span>
              </Link>
              <Link
                to={`/priceTable`}
                className="btn btn-outline text-lg font-sans font-bold border-0 rounded-md  flex justify-center items-center hover:text-white text-white hover:bg-[#f0901f] bg-[#257830] h-[70px] gap-4 w-[250px]"
              >
                Packages & Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-9 mx-6 xl:px-0 px-5 font-andika">
        <div className="col-span-3">
          {/* categories buttons part */}
          <div className="rounded-lg p-10 bg-[#e9f1ea] mt-4">
            <p className="text-2xl font-extrabold py-5">Our Services</p>
            <button>
              <Link
                to={`/services/${data?._id}`}
                className="h-16 px-8 bg-[#182822] hover:bg-[#257830]
                      rounded-md text-start w-72 flex justify-start items-center
                      gap-4 text-white text-md text-xl font-bold mb-6"
              >
                {categories?.servicesCategory}
                <span className="text-2xl">
                  <FaArrowCircleRight />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className=" col-span-6    ">
          <div className="py-20 flex md:flex-row flex-col items-center">
            {/*<div className="md:w-1/2 overflow-hidden rounded-lg">
              <img src={data?.img} alt="" className="w-full" />
            </div>*/}
            <div className="md:w-1/2 md:p-10 p-5 space-y-4">
              <h3 className="md:text-5xl text-4xl font-bold">{data?.title}</h3>
              <p>{data?.description1}</p>
              <button
                onClick={() => toast.success("Service Added Successfully!")}
                className="btn lg:px-10 capitalize bg-gradient-to-r from-brand-color to-green-500 lg:text-xl text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-brand-color w-full"
              >
                get Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

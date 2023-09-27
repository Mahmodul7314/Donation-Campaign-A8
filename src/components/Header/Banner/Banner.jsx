

const Banner = () => {
    return (
       <div className="">
        <div className="relative">
        <img style={{boxShadow:"#FFFFFFF2", }} className="opacity-10" src="https://i.ibb.co/2kYp1ZN/Rectangle-4281.png" alt="" />
        </div>
        <div className="absolute  lg:-mt-72 lg:ml-30 ml-10 -mt-32 lg:ml-80  lg:w-3/4 mx-auto">
            <h1 className="text-[#0B0B0B] text-2xl lg:text-5xl font-medium lg:font-extrabold pb-4 lg:pb-12  ">I Grow By Helping People In Need</h1>
            <div className="lg:ml-36 ml-14 lg:w-full">
            <input className=" w-36 lg:w-96 border-2  border-inherit h-8 lg:h-12 p-4 lg:p-6 px-2 "  type="text" alt="" placeholder="Search here...."/>
            <button className="btn px-4 lg:px-6 py-2 lg:py-4 text-sm rounded-r-lg font-normal lg:font-bold text-center text-[#fff] bg-[#FF444A] rouded-right">Search</button>
            </div>
        </div>
       
       </div>
    );
};

export default Banner;
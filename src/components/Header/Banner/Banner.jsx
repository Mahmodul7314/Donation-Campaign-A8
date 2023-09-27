

const Banner = () => {
    return (
       <div className="">
        <div className="relative">
        <img style={{boxShadow:"#FFFFFFF2", }} className="opacity-10" src="https://i.ibb.co/2kYp1ZN/Rectangle-4281.png" alt="" />
        </div>
        <div className="absolute -mt-72 ml-80  w-3/4 mx-auto">
            <h1 className="text-[#0B0B0B] text-5xl font-extrabold pb-12 pr-44 ">I Grow By Helping People In Need</h1>
            <div className="ml-36">
            <input className="w-96 border-2  border-inherit h-12 p-6 px-2 "  type="text" alt="" placeholder="Search here...."/>
            <button className="btn px-6 py-4 text-sm rounded-r-lg font-bold text-center text-[#fff] bg-[#FF444A] rouded-right">Search</button>
            </div>
        </div>
       
       </div>
    );
};

export default Banner;
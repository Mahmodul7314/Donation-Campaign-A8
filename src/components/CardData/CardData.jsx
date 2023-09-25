

const CardData = ({cardData}) => {
    console.log(cardData);
    const {id,image,category,title,description,donate,background_color,button_background,text_color} = cardData
    return (
        <div style={{backgroundColor:background_color}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            src={image}
            alt="ui/ux review check"
          />
        </div>
         <p className="ml-8 py-14"><button style={{color:text_color,background:button_background}} className="text-lg font-medium px-4 py-2 w-28 rounded-lg   ">{category}</button></p>
        <div className="p-6">
          <h4 style={{color:text_color}} className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
          </h4>
        </div>
        <div className="flex items-center justify-between p-6">
        </div>
      </div>
    );
};

export default CardData;
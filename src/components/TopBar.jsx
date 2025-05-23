

const TopBar = ()=>{
  return<div className=" bg-gradient-to-br  backdrop-blur-lg sticky z-50 top-6 from-neutral-700 to-neutral-800  rounded-md h-14 w-full">
    <div className="flex justify-between items-center p-2 px-5">
      <div className=" text-md lg:text-lg font-medium leading-loose">
        New Delhi, India
      </div>
        <div className=" text-md lg:text-lg font-medium flex justify-center items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full  animate-pulse"></div>
        Available for work
        </div>
    </div>

  </div>

}

export default TopBar;
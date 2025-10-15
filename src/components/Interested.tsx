import { Link, useLocation } from "react-router";

const Interested = () => {
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects"; // ini mengembalikan boolean,true jika di halaman projects

  return (
    // <div className="px-[160px] mt-[150px] text-[#EDF0F7]  mb-[150px]">
    //   <div className="h-[138px] rounded-[3px] flex justify-between items-center px-8 bg-[#7E62F3]/10">
    //     <h1 className="text-4xl font-bold">Interested working with me?</h1>
    //     <div className="flex gap-4">
    //       {!isProjectPage && (
    //         <Link
    //           to="/projects"
    //           className="px-6 py-2 border border-[#7E62F3] font-semibold"
    //         >
    //           See More Project
    //         </Link>
    //       )}
    //       <Link to="/contact" className="px-6 py-2 bg-[#7E62F3] font-semibold">
    //         Contact Me
    //       </Link>
    //     </div>
    //   </div>
    // </div>
      <div className="px-[20px] md:px-[160px] mt-[80px] md:mt-[150px] text-[#EDF0F7] mb-[80px] md:mb-[150px]">
      <div className="min-h-[138px] rounded-[3px] flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-6 md:py-0 gap-6 md:gap-0 bg-[#7E62F3]/10">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          Interested working with me?
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
          {!isProjectPage && (
            <Link
              to="/projects"
              className="px-6 py-2 border border-[#7E62F3] font-semibold text-center hover:bg-[#7E62F3]/20 transition-colors"
            >
              See More Project
            </Link>
          )}
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-[#7E62F3] font-semibold text-center hover:bg-[#7E62F3]/80 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interested;

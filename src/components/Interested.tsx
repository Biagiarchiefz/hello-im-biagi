import { Link, useLocation } from "react-router";

const Interested = () => {
  const location = useLocation();
  const isProjectPage = location.pathname === "/projects"; // ini mengembalikan boolean,true jika di halaman projects

  return (
    <div className="px-[160px] mt-[150px] text-[#EDF0F7]  mb-[150px]">
      <div className="h-[138px] rounded-[3px] flex justify-between items-center px-8 bg-[#7E62F3]/10">
        <h1 className="text-4xl font-bold">Interested working with me?</h1>
        <div className="flex gap-4">
          {!isProjectPage && (
            <Link
              to="/projects"
              className="px-6 py-2 border border-[#7E62F3] font-semibold"
            >
              See More Project
            </Link>
          )}
          <Link to="/contact" className="px-6 py-2 bg-[#7E62F3] font-semibold">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interested;

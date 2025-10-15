
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { navList } from "../data/navLink";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="flex justify-center text-[#EDF0F7]">
      <nav
        className={`fixed w-full top-0 transition-all duration-300 ease-in-out z-50 ${
          isVisible
            ? "shadow-lg top-5 text-base bg-[#EDF0F7]/10 backdrop-blur-lg rounded-xl"
            : "bg-transparent"
        }`}
        style={{
          width: isVisible ? "80%" : "100%",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            {/*       Logo        */}
            <div className="flex-shrink-0">
              <h1 className="flex items-center md:text-2xl font-bold text-[#B1B1B] pl-2">
                Biagiachiefz
              </h1>
            </div>

            {/*     Desktop Nav      */}
            <div className="hidden md:flex space-x-4">
              {navList.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-[#EDF0F7] relative inline-block hover:text-[#7E62F3] 
         before:absolute before:bottom-0 before:left-0 
         before:h-[1px] before:w-0 before:bg-[#7E62F3] 
         before:transition-all before:duration-300 
         hover:before:w-full
            ${
              location.pathname === item.path
                ? "text-[#7E62F3] before:w-full"
                : "before:w-0 hover:before:w-full"
            }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/*     Mobile menu button   */}
            <div className="md:hidden flex gap-4">
              <button onClick={() => setIsMenuOpen(true)}>
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*    Mobile menu   */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#141414]/95 backdrop-blur-md text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-[#EDF0F7] transition-all duration-500 z-[100] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={35} />
        </button>

        {navList.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`text-xl ${
              location.pathname === item.path
                ? "text-[#7E62F3] font-bold"
                : "hover:text-[#7E62F3] transition-colors"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;



// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router";
// import { navList } from "../data/navLink";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsVisible(scrollPosition > 100); // Navbar berubah saat scroll > 100px
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="flex justify-center text-[#EDF0F7]">
//       <nav
//         className={`fixed w-full top-0 transition-all duration-300 ease-in-out z-50 ${
//           isVisible
//             ? "shadow-lg top-5 text-base bg-[#EDF0F7]/10 backdrop-blur-lg rounded-xl"
//             : "bg-transparent"
//         }`}
//         style={{
//           width: isVisible ? "80%" : "100%",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-14 items-center">
//             {/*       Logo        */}
//             <div className="flex-shrink-0">
//               {/* <span className="text-xl font-bold text-gray-800">Logo</span> */}
//               <h1 className="flex items-center text-2xl font-bold text-[#B1B1B]">
//                 Biagiachie<span className="">fz</span>
//               </h1>
//             </div>

//             {/*     Dektop Nav      */}
//             <div className="hidden md:flex space-x-4">
//               {navList.map((item, index) => (
//                 <Link
//                   key={index}
//                   to={item.path}
//                   className={`px-3 py-2 rounded-md text-sm font-medium text-[#EDF0F7] relative inline-block hover:text-[#7E62F3] 
//          before:absolute before:bottom-0 before:left-0 
//          before:h-[1px] before:w-0 before:bg-[#7E62F3] 
//          before:transition-all before:duration-300 
//          hover:before:w-full
//             ${
//               location.pathname === item.path
//                 ? "text-[#7E62F3] before:w-full"
//                 : "before:w-0 hover:before:w-full"
//             }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>

//             {/*          Dekstop Right           */}

//             {/*     Mobile menu nav before click   */}
//             <div
//               className="md:hidden flex gap-4"
//             >
//               <button onClick={() => setIsMenuOpen(true)}>
//                 <Menu />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/*    after burger menu click   */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 z-[100] ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <X size={35} />
//         </button>

//         {navList.map((item, index) => (
//           <Link key={index} to={item.path} className="">
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
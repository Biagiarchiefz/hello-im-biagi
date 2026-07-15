import { Link } from "react-router";
import PageTransition from "@/shared/components/PageTransition";
import Seo from "@/shared/components/Seo";

const LiveDemo = () => {
  return (
    <PageTransition>
      <Seo title="Live Demo" path="/livedemonotfound" noindex />
      <div className="bg-[rgb(20,20,20)] h-[100vh] flex flex-col justify-center items-center text-white">
        <h1>Live Demo dari website ini belum tersedia</h1>

        <Link to="/" className="bg-[#7E62F3] text-white py-2 px-4 rounded-[5px] mt-6">
          Kembali ke Beranda
        </Link>
      </div>
    </PageTransition>
  );
};

export default LiveDemo;

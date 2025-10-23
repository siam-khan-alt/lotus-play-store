import { ClipLoader } from "react-spinners";


const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#0F172A]">
    <ClipLoader color="#7C3AED" size={80} />
  </div>
);

export default Loader;
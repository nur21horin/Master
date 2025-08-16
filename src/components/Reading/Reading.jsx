import { NavLink } from "react-router-dom";

const Reading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 m-6 max-w-xl mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-lg animate-fade-in">
      <p className="text-3xl font-semibold text-gray-800 mb-6 animate-pulse">
        🚧 Coming Soon...
      </p>

      <NavLink
        to="/"
        title="Go back to home"
        className="text-2xl ease-in-out transform hover:scale-105 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
      >
        🔙 Back
      </NavLink>
    </div>
  );
};


export default Reading

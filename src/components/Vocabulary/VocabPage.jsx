import { NavLink } from "react-router";

const VocabPage = () => {
  return (
    <div className="flex flex-col flex-wrap gap-6">
  <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-6 p-6 bg-gradient-to-br  rounded-xl shadow-lg">
    <NavLink
      to="/vocabulary"
    //   className="w-full sm:w-[220px] h-[64px] bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-lg font-bold rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105"
     className="text-2xl ease-in-out transform hover:scale-105 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
    >
      📘 Add Vocabulary
    </NavLink>

    <NavLink
      to="/showvocab"
       className="text-2xl ease-in-out transform hover:scale-105 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
    >
      📚 Show Vocabulary
    </NavLink>
  </div>

  <div className="flex justify-center">
    <NavLink
      to="/"
    //   className="w-full sm:w-[220px] h-[64px] bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-lg font-bold rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105"
     className="text-2xl ease-in-out transform hover:scale-105 text-center hover:bg-blue-700 transition duration-300 w-[400px] font-serif bg-emerald-900 rounded-lg mt-4 h-auto py-4"
    >
      🔙 Back
    </NavLink>
  </div>
</div>
  );
};

export default VocabPage;

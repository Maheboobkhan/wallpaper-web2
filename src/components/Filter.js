// import { useState } from 'react';

// const Filter = ({ onFilterChange }) => {
//   const [category, setCategory] = useState('');
//   const [design, setDesign] = useState('');

//   const handleFilterChange = () => {
//     onFilterChange({ category, design });
//   };

//   return (
//     <div className="flex space-x-4 mb-4 mt-10">
//       {/* <select
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         className="px-4 py-2 border rounded"
//       >
//         <option value="">Select Category</option>
//         <option value="wallpaper">Wallpaper</option>
//         <option value="customize">Customize</option>
//       </select> */}
//       <select
//         value={design}
//         onChange={(e) => setDesign(e.target.value)}
//         className="px-4 py-2 border rounded"
//       >
//         <option value="">Select Design</option>
//         <option value="nature">Nature</option>
//         <option value="milan">Texture</option>
//         <option value="kausar">Flower</option>
//       </select>
//       <button onClick={handleFilterChange} className="px-4 py-2 bg-blue-600 text-white rounded">Apply Filter</button>
//       <button onClick={handleFilterChange} className="px-4 py-2 bg-blue-600 text-white rounded">Clear Filter</button>
//     </div>
//   );
// };

// export default Filter;



import { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [design, setDesign] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, design });
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 pl-4 pr-4 pt-8 pb-4 border rounded-lg shadow-md bg-white">
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-gray-700 font-semibold mb-2" htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="wallpaper">Wallpaper</option>
          <option value="customize">Customize</option>
        </select>
      </div>
      <div className="flex flex-col w-full sm:w-auto">
        <label className="text-gray-700 font-semibold mb-2" htmlFor="design">Design</label>
        <select
          id="design"
          value={design}
          onChange={(e) => setDesign(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Select Design</option>
          <option value="nature">Nature</option>
          <option value="milan">Texture</option>
          <option value="kausar">Flower</option>
        </select>
      </div>
      <div className="flex space-x-4 w-full sm:w-auto">
        <button onClick={handleFilterChange} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Apply Filter
        </button>
        <button onClick={() => { setCategory(''); setDesign(''); handleFilterChange(); }} className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;

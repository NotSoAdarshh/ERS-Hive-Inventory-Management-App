import React from 'react';
import Sidebar from './Components/sidebar';
import SearchBar from './Components/searchBar';

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden"> 
      <Sidebar />
      <div className="flex-1 flex flex-col items-start p-6 bg-[#0a0a0a] overflow-y-auto">
        <SearchBar />
          <div className="w-full mt-6 text-white"> 
        </div>
      </div>
    </div>
  );
}
export default App

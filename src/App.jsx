import "./App.css";

import Main from "./Components/Main";
import Logo from "../src/assets/Logo.png";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import axios from "axios";
import { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { PiCityFill } from "react-icons/pi";
import { useState } from "react";
import { BiLoader } from "react-icons/bi";
function App() {
   const apiKey = import.meta.env.VITE_API_WEATHER;
  const [MobileSearch, SetMobileSearch] = useState(false);
  const [City, setCity] = useState(null);
  const [Country, setCountry] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (inputValue.length > 0) {
      fetchSuggestions(inputValue)
        .then((data) => setSuggestions(data))
        .catch((error) => console.error("Error fetching suggestions:", error));
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  async function getLocation() {
    const res = await axios.get("http://ip-api.com/json");
   if (res.status === 200) {
     setCity(res.data.city);
      setCountry(res.data.country);
     setLoading(false);
   } else {
      setCity("Mumbai");
      setCountry("India")
    }
  }
  const fetchSuggestions = async (query) => {
    // Replace with your API endpoint
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}&aqi=no`
    );
    const data = await response.json();
    return data;
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handelcitychange = (suggestions) => {
    setCity(suggestions.name);
    setCountry(suggestions.country);
    setSuggestions([]);
    SetMobileSearch(false)
  };

 
  
  return (
    <div className="flex flex-col">
     <div className="w-full h-14 fixed z-50  bg-neutral-900 flex items-center justify-between text-sm md:text-base">

{MobileSearch ? <> <div className="flex items-center px-4 w-full gap-4">
  <input onChange={handleInputChange} autoFocus className=" w-full rounded-full text-sm px-5 flex outline-none bg-neutral-950 py-2"/>
  <RxCross2 onClick={()=>{
    SetMobileSearch(false)
    setSuggestions([])
  }} className="size-6" />
  </div> 
  
  
  </> : <>
  <div className="flex items-center gap-1">
          <img src={Logo} alt="Logo" className=" size-16" />
          <div>
            {Loading ? (
              <BiLoader className="animate-spin size-6" />
            ) : (
              <div className="flex items-center  border-2 gap-1 cursor-pointer p-1 rounded-md  border-neutral-700 pr-3">
                <MdLocationPin className="size-5 shrink-0" />
                <p>{City + ", " + Country}</p>
              </div>
            )}
          </div>
        </div>
        <div className="px-4 flex flex-col items-center">
          <div className="md:flex items-center hidden">
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="md:w-[300px] hidden md:flex outline-none bg-neutral-950 px-3 pr-11 py-1.5 rounded-full text-[15px] "
              placeholder="Enter a location"
            />
            <HiOutlineSearch className="absolute right-8 cursor-pointer size-5  " />
          </div>
          <HiOutlineSearch
            onClick={() => {
              SetMobileSearch(true);
            }}
            className=" cursor-pointer size-5 md:hidden flex"
          />

          {suggestions.length > 0 && (
            <div className="p-2 gap-3 md:w-[280px] bg-neutral-800 rounded-lg absolute mt-9">
              <ul>
                {suggestions.map((suggestions, index) => (
                  <li
                    key={index}
                    onClick={() => handelcitychange(suggestions)}
                    className="flex items-center cursor-pointer gap-2 hover:bg-neutral-900 p-2 rounded-lg"
                  >
                    <PiCityFill />
                    <p>{suggestions.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

</>}


      
      
      </div>

      {suggestions.length > 0 && (
        <div className="w-full fixed bg-neutral-900 h-screen  mt-14 md:hidden block">
  <ul>
                {suggestions.map((suggestions, index) => (
                  <li
                    key={index}
                    onClick={() => handelcitychange(suggestions)}
                    className="flex  items-center cursor-pointer gap-2 hover:bg-neutral-900 px-5 py-2 rounded-lg"
                  >
                    <PiCityFill className="size-5"/>
                    <p className="text-lg">{suggestions.name}</p>
                  </li>
                ))}
              </ul>
       </div>
      )}

      <Main loading={Loading} city={City} />
    </div>
  );
}

export default App;

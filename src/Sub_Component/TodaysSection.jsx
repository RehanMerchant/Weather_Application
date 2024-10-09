import { IoSunny } from "react-icons/io5";
import Highlightcard from "../Sub_Component/DataCardToday";
import { ImMeter } from "react-icons/im";
import { IoIosWater } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { IoIosRainy } from "react-icons/io";
import { IoCloudSharp } from "react-icons/io5";
import { WiStrongWind } from "react-icons/wi";
import { MdDewPoint } from "react-icons/md";
import { IoCompass } from "react-icons/io5";
import { TbUvIndex } from "react-icons/tb";
import { useEffect, useState } from "react";


const codeObj = [
  {
		"code" : 1000,
    "image":'./assets/clear.png'
	},
	{
		"code" : 1003,
    "image":'./assets/cloud1.png'
	},
	{
		"code" : 1006,
	  "image":'./assets/cloud1.png'
	},
	{
		"code" : 1009,
    "image":'./assets/overcast.png'
	},
	{
		"code" : 1030,
		  "image":'./assets/mist.png'
	},
	{
		"code" : 1063,
"image":'./assets/rain1.jpg'
	},
	{
		"code" : 1066,
	"image":'./assets/snow.png'
	},
	{
		"code" : 1069,
    "image":'./assets/bli.png'
	},
	{
		"code" : 1072,
	"image":'./assets/snow2.png'
	},
	{
		"code" : 1087,
 "image":'./assets/thunder.png'
	},
	{
		"code" : 1114,
	"image":'./assets/snow.png'
	},
	{
		"code" : 1117,
"image":'./assets/bli.png'
	},
	{
		"code" : 1135,
	 "image":'./assets/mist.png'
	},
	{
		"code" : 1147,
 "image":'./assets/mist.png'
	},
	{
		"code" : 1150,
	"image":'./assets/bli.png'
	},
	{
		"code" : 1153,
"image":'./assets/bli.png'
	},
	{
		"code" : 1168,
"image":'./assets/bli.png'
	},
	{
		"code" : 1171,
"image":'./assets/bli.png'
	},
	{
		"code" : 1180,
		"image":'./assets/rain1.jpg'
	},
	{
		"code" : 1183,
"image":'./assets/rain1.jpg'
	},
	{
		"code" : 1186,
"image":'./assets/rain2.png'
	},
	{
		"code" : 1189,
"image":'./assets/rain2.png'
	},
	{
		"code" : 1192,
"image":'./assets/rain2.png'
	},
	{
		"code" : 1195,
"image":'./assets/rain2.png'
	},
	{
		"code" : 1198,
 "image":'./assets/thunder.png'
	},
	{
		"code" : 1201,
 "image":'./assets/thunder.png'
	},
	{
		"code" : 1204,
 "image":'./assets/bli.png'
	},
	{
		"code" : 1207,
 "image":'./assets/snow2.png'
	},
	{
		"code" : 1210,
 "image":'./assets/snow.png'
	},
	{
		"code" : 1213,
 "image":'./assets/snow.png'
	},
	{
		"code" : 1216,
 "image":'./assets/snow.png'
	},
	{
		"code" : 1219,
 "image":'./assets/snow2.png'
	},
	{
		"code" : 1222,
 "image":'./assets/snow2.png'
	},
	{
		"code" : 1225,
 "image":'./assets/snow2.png'
	},
	{
		"code" : 1237,
 "image":'./assets/bil.jpg'
	},
	{
		"code" : 1240,
 "image":'./assets/rain1.jpg'
	},
	{
		"code" : 1243,
 "image":'./assets/rain2.png'
	},
	{
		"code" : 1246,
 "image":'./assets/rain2.png'
	},
	{
		"code" : 1249,
 "image":'./assets/bli.png'
	},
	{
		"code" : 1252,
 "image":'./assets/bli.png'
	},
	{
		"code" : 1255,
 "image":'./assets/snow.png'
	},
	{
		"code" : 1258,
 "image":'./assets/snow2.png'
	},
	{
		"code" : 1261,
 "image":'./assets/bil.png'
	},
	{
		"code" : 1264,
 "image":'./assets/bil.png'
	},
	{
		"code" : 1273,
 "image":'./assets/thunder.png'
	},
	{
		"code" : 1276,
 "image":'./assets/thunder.png'
	},
	{
		"code" : 1279,
 "image":'./assets/snow.png'
	},
	{
		"code" : 1282,
 "image":'./assets/snow.png'
	}

]





const TodaysSection = (props) => {
  const [bg, setBg] = useState(null)
  const TodayData = props.data
  const code = TodayData.code || 1000
  console.log(code)

function getBg(code){
    setBg(codeObj.find(pin => pin.code === code).image)
}

useEffect(() => {
  getBg(code);
 }, [bg,TodayData]);
  return (
    <div className="w-full p-4">
    <div className="md:flex w-full gap-4 h-auto ">
    <div style={{ backgroundImage: `url(${bg})` }}   className={`md:w-[25%] bg-cover flex h-full rounded-lg` }>
      <div className="bg-black bg-opacity-20 w-full">

   
      <div className="flex ">
        <div className="p-4 items-center">
          <img src={TodayData.icon} alt={TodayData.condition} className="size-14"/>
          <div className="mt-1">
            <p className="text-4xl">{TodayData.current_temp}°C</p>
            <p className="w-28">Feels like <br/>{TodayData.feels_like}°C</p>
          </div>
          <p className=" text-neutral-300 text-lg mt-1">{TodayData.condition}</p>
        </div>
       </div>
 
       
       </div>
    </div>
   <div className="bg-neutral-900 md:w-[75%] h-auto md:mt-0 mt-4 rounded-lg ">
  <div className="p-4">
    <p className="text-xl font-medium">Todays Highlights</p>
    <div className="md:py-2 md:mt-0 mt-2 md:px-2 grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-2">
    <Highlightcard data={TodayData.pressure + ' mb'} title={'Pressure'} icon={<ImMeter className="size-4"/>}/>
    <Highlightcard data={TodayData.humidity + '%'} title={'Humidity'} icon={<IoIosWater className="size-4"/>}/>
    <Highlightcard data={TodayData.windspeed + ' Km/Hr'} title={'Wind Speed'} icon={<WiStrongWind className="size-4"/>}/>
    <Highlightcard data={TodayData.winddir} title={'Direction'} icon={<IoCompass  className="size-4"/>}/>
    <Highlightcard data={TodayData.precipitation} title={'Precipitation'} icon={<IoIosRainy className="size-4"/>}/>
    <Highlightcard data={TodayData.dewpoint + '°C'} title={'Dew Point'} icon={<MdDewPoint className="size-4"/>}/>
    <Highlightcard data={TodayData.headindex + '°C'} title={'Heat Index'} icon={<FaFire className="size-4"/>}/>
    
    <Highlightcard data={TodayData.uv} title={'UltraViolet'} icon={<TbUvIndex className="size-4"/>}/>
    <Highlightcard data={TodayData.cloud} title={'Clouds'} icon={<IoCloudSharp className="size-4"/>}/>
    

    </div>
  </div>
</div>

    

    </div>
   </div>
  )
}

export default TodaysSection
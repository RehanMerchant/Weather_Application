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
    "image":'./src/assets/clear.png'
	},
	{
		"code" : 1003,
    "image":'./src/assets/cloud1.png'
	},
	{
		"code" : 1006,
	  "image":'./src/assets/cloud1.png'
	},
	{
		"code" : 1009,
    "image":'./src/assets/overcast.png'
	},
	{
		"code" : 1030,
		  "image":'./src/assets/mist.png'
	},
	{
		"code" : 1063,
"image":'./src/assets/rain1.jpg'
	},
	{
		"code" : 1066,
	"image":'./src/assets/snow.png'
	},
	{
		"code" : 1069,
    "image":'./src/assets/bli.png'
	},
	{
		"code" : 1072,
	"image":'./src/assets/snow2.png'
	},
	{
		"code" : 1087,
 "image":'./src/assets/thunder.png'
	},
	{
		"code" : 1114,
	"image":'./src/assets/snow.png'
	},
	{
		"code" : 1117,
"image":'./src/assets/bli.png'
	},
	{
		"code" : 1135,
	 "image":'./src/assets/mist.png'
	},
	{
		"code" : 1147,
 "image":'./src/assets/mist.png'
	},
	{
		"code" : 1150,
	"image":'./src/assets/bli.png'
	},
	{
		"code" : 1153,
"image":'./src/assets/bli.png'
	},
	{
		"code" : 1168,
"image":'./src/assets/bli.png'
	},
	{
		"code" : 1171,
"image":'./src/assets/bli.png'
	},
	{
		"code" : 1180,
		"image":'./src/assets/rain1.jpg'
	},
	{
		"code" : 1183,
"image":'./src/assets/rain1.jpg'
	},
	{
		"code" : 1186,
"image":'./src/assets/rain2.png'
	},
	{
		"code" : 1189,
"image":'./src/assets/rain2.png'
	},
	{
		"code" : 1192,
"image":'./src/assets/rain2.png'
	},
	{
		"code" : 1195,
"image":'./src/assets/rain2.png'
	},
	{
		"code" : 1198,
 "image":'./src/assets/thunder.png'
	},
	{
		"code" : 1201,
 "image":'./src/assets/thunder.png'
	},
	{
		"code" : 1204,
 "image":'./src/assets/bli.png'
	},
	{
		"code" : 1207,
 "image":'./src/assets/snow2.png'
	},
	{
		"code" : 1210,
 "image":'./src/assets/snow.png'
	},
	{
		"code" : 1213,
 "image":'./src/assets/snow.png'
	},
	{
		"code" : 1216,
 "image":'./src/assets/snow.png'
	},
	{
		"code" : 1219,
 "image":'./src/assets/snow2.png'
	},
	{
		"code" : 1222,
 "image":'./src/assets/snow2.png'
	},
	{
		"code" : 1225,
 "image":'./src/assets/snow2.png'
	},
	{
		"code" : 1237,
 "image":'./src/assets/bil.jpg'
	},
	{
		"code" : 1240,
 "image":'./src/assets/rain1.jpg'
	},
	{
		"code" : 1243,
 "image":'./src/assets/rain2.png'
	},
	{
		"code" : 1246,
 "image":'./src/assets/rain2.png'
	},
	{
		"code" : 1249,
 "image":'./src/assets/bli.png'
	},
	{
		"code" : 1252,
 "image":'./src/assets/bli.png'
	},
	{
		"code" : 1255,
 "image":'./src/assets/snow.png'
	},
	{
		"code" : 1258,
 "image":'./src/assets/snow2.png'
	},
	{
		"code" : 1261,
 "image":'./src/assets/bil.png'
	},
	{
		"code" : 1264,
 "image":'./src/assets/bil.png'
	},
	{
		"code" : 1273,
 "image":'./src/assets/thunder.png'
	},
	{
		"code" : 1276,
 "image":'./src/assets/thunder.png'
	},
	{
		"code" : 1279,
 "image":'./src/assets/snow.png'
	},
	{
		"code" : 1282,
 "image":'./src/assets/snow.png'
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
    <div  style={{'--image-url': `url(${bg})`}}   className={`md:w-[25%] bg-cover bg-[image:var(--image-url)] flex h-full rounded-lg` }>
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
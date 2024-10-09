import HourlyforecastCard from "./DataCardForecast";
const ForecastSection = (props) => {
  const data = props.data

  return (
    <div className="w-full px-4">
        <div className="w-full rounded-lg bg-neutral-900 p-4">
        <p className="text-xl font-medium">Hourly Forecast</p>
        <p className="ml-1 mt-1 text-neutral-500">Today</p>
        <div className="md:py-4 md:mt-0 mt-3 md:px-10 flex md:justify-between gap-6  overflow-auto scroll-smooth pb-1 ">
       {
        data.slice(0,12).map((data,index)=>(
         <HourlyforecastCard key={index} time={data.time.split(" ").slice(1).join(" ") + 'AM'} img={data.condition.icon} weather={data.condition.text} temp={data.temp_c}/>
        ))
       }
        
    
        


            </div>
            <div className="md:py-4 md:mt-0 mt-3 md:px-10 flex md:justify-between gap-6  overflow-auto scroll-smooth pb-1 ">
    
            {
        data.slice(12,24).map((data,index)=>(
         <HourlyforecastCard key={index} time={data.time.split(" ").slice(1).join(" ") + 'PM'} img={data.condition.icon} weather={data.condition.text} temp={data.temp_c}/>
        ))
       }


           </div>
        </div>
    </div>
  )
}

export default ForecastSection
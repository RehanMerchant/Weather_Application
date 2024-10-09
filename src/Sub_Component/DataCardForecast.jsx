
const DataCardForecast = ({time,img,weather,temp}) => {
  return (
    <div className="flex flex-col items-center">
    <p className="text-xs md:text-sm ">{time}</p>
   <div className="size-12 mt-1 bg-neutral-800 rounded-lg flex items-center justify-center">
      <img src={img} className="size-6" alt="hello"/>
    </div>
    <p className="md:text-sm text-xs">
        {weather}
    </p>
    <p className="md:text-sm mt-1 text-xs">
    {temp}°C
    </p>
    </div>
  )
}

export default DataCardForecast
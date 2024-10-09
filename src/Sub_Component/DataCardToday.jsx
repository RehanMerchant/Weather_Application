

const DataCardToday = ({data,title,icon}) => {
  return (
    <div className="w-fit p-2 text-sm flex flex-col items-center ">
        <div className="flex gap-1 items-center">
       {icon} <p className="md:text-base">{data}</p>
        </div>
   
    <p className="text-neutral-300">{title}</p>
  </div>
  )
}

export default DataCardToday
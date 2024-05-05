import { Link } from "react-router-dom";

const JobCard = ({job}) => {
  
  const{ _id,job_title,category,deadline,max_price,buyer_email,description,min_price} = job
    return (
        <Link to={`/jobs/${_id}`} className='w-full flex flex-col justify-between max-w-sm px-4 gap-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline:{new Date(deadline).toLocaleDateString()}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {category}
        </span>
      </div>

      <div className="relative">
        <h1 className='absolute top-0 text-lg font-semibold text-gray-800 '>
          {job_title}
        </h1>

        <p className='mt-14 text-sm text-gray-600 '>
          {description.slice(0,81)}...
        </p>
        <p className='text-sm font-bold text-gray-600 '>
          Range: ${min_price} - ${max_price}
        </p>
      </div>
    </Link>
    );
};

export default JobCard;
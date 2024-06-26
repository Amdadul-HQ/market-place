import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextComponent";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";


const UpdateJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const job = useLoaderData()
    const {user} = useContext(AuthContext)

    const navigate = useNavigate()


    const{ _id,job_title,description,min_price,max_price,buyer_email,category } = job

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;

        // console.log(form.upmin_price,form.upmax_price);

        const upbuyer_email = user.email;
        const upbuyer_name = user.displayName;
        const upbuyer_photo = user.photoURL;
        const upjob_title = form.job_title.value;
        const upcategory = form.category.value;
        const updeadline = startDate;
        const updescription = form.description.value;
        const upmin_price = parseInt(form.upmin_price.value);
        const upmax_price = parseInt(form.upmax_price.value);



        const updateData = {
            upbuyer_email,upbuyer_name,upbuyer_photo,upjob_title,upcategory,updeadline,updescription,upmin_price,upmax_price
        }
        axios.patch(`http://localhost:5000/jobs/${_id}`,updateData)
        .then(res => {
            console.log(res.data);
            toast.success('Updated!!!')
            navigate('/postedjob')
        })
    }


    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Update a Job
          </h2>
  
          <form onSubmit={handleUpdate}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                  Job Title
                </label>
                <input
                  id='job_title'
                  name='job_title'
                  type='text'
                  defaultValue={job_title}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  defaultValue={buyer_email}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col'>
              <label htmlFor='date' className='text-gray-700'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker className='w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 ' htmlFor='category'>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  defaultValue={category}
                  className='border p-2 rounded-md'
                >
                  <option value='Web Development'>Web Development</option>
                  <option value='Graphics Design'>Graphics Design</option>
                  <option value='Digital Marketing'>Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
                  Minimum Price
                </label>
                <input
                  id='min_price'
                  name='upmin_price'
                  type='number'
                  defaultValue={min_price}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='max_price'>
                  Maximum Price
                </label>
                <input
                  id='max_price'
                  name='upmax_price'
                  type='number'
                  defaultValue={max_price}
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                id='description'
                defaultValue={description}
                cols='30'
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button type="submit" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    );
};

export default UpdateJob;
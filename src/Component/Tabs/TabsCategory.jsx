import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../Jobcard/JobCard';

const TabsCategory = () => {

  const{data} = useQuery(
    {
      queryKey:['jobs'],
      queryFn: async()=> {
        const res = await fetch(`${import.meta.env.VITE_URL}/jobs`)
        return res.json()
      }
                
              
    }
  )

    return (
        <Tabs>
    <div className='flex justify-center container'>
    <TabList>
      <Tab>Web Development</Tab>
      <Tab>Graphic Design</Tab>
      <Tab>Digital Marketing</Tab>
    </TabList>
    </div>
    <div className='container'>
    <TabPanel>
      <div className='container grid grid-cols-3 gap-6 mx-auto max-w-screen-xl my-10'>
      {
        data && data.filter(job => job.category == 'Web Development').map(job => <JobCard key={job._id} job={job}/>)
      }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='container grid grid-cols-3 gap-6 mx-auto max-w-screen-xl my-10'>
      {
        data && data.filter(job => job.category == 'Graphics Design').map(job => <JobCard key={job._id} job={job}/>)
      }

      </div>

    </TabPanel>
    <TabPanel>
       <div className='container grid grid-cols-3 gap-6 mx-auto max-w-screen-xl my-10'>
      {
        data && data.filter(job => job.category == 'Digital Marketing').map(job => <JobCard key={job._id} job={job}/>)
      }

        </div>
    </TabPanel>
    </div>
  </Tabs>
    );
};

export default TabsCategory;
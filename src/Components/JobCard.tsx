import './JobCard.css'
import {type Job} from '../Hook/useJob'

const JobCard = ({job}:{job:Job}) => 
   (
    <div className="job-card">
        <h2>{job.title}</h2>

        <p className="company">{job.company_name}</p>

        <p className="location">{job.location} - Remote: {job.remote ? 'Yes' : 'No'}</p>

        <a href={job.url} target='_blank' rel='noreferrer' className='link'>View Job</a>
    </div>
  );

export default JobCard
import './JobCard.css';
import { type Job } from '../Hook/useJob';

const JobCard = ({ job }: { job: Job }) => (
  <div className="job-card">
    <div className="job-header">
      <div>
        <h2>{job.title}</h2>
        <p className="company">{job.company_name}</p>
      </div>
      <div className="job-meta">
        <p className="posted">{job.posted}</p>
        <p className="tech-stack">{job.languages.join(', ')}</p>
      </div>
    </div>
    <p className="employment-type">{job.employment_type}</p>
  </div>
);

export default JobCard;

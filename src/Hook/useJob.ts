import { useState, useEffect } from "react";

import axios from 'axios';

export interface Job{
    title: string;
    company_name:string;
    location:string;
    url:string;
    tags:string[];
    remote:boolean;
}

export const useJob = () =>{
    const [jobs, setJobs] = useState<Job[]>([]);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [loading, setLoading] =useState(true);

    useEffect(()=>{
        axios.get('https://www.arbeitnow.com/api/job-board-api')
        .then((res) =>{
            setJobs(res.data.data);
            setFilteredJobs(res.data.data);
            setLoading(false);
        })
        .catch(err =>{
            console.error(err);
            setLoading(false)
        });
    }, []);

    const filterJobs =(query: string) =>{
        const lower = query.toLowerCase();
        setFilteredJobs(jobs.filter(job =>
            job.title.toLowerCase().includes(lower) || job.company_name.toLocaleLowerCase().includes(lower)
            || job.location.toLowerCase().includes(lower)
        ));
    };

    return {jobs: filteredJobs, loading, filterJobs};
}
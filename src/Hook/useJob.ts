import { useState, useEffect } from "react";
import axios from "axios";

export interface Job {
  id: number;
  title: string;
  company_name: string;
  employment_type: string;
  languages: string[];
  posted: string;
}

export const useJob = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const jobsPerPage = 7;

  useEffect(() => {
    axios.get("/jobs.json")
      .then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filterJobs = (query: string) => {
    const lower = query.toLowerCase();
    setFilteredJobs(
      jobs.filter(job =>
        job.title.toLowerCase().includes(lower) ||
        job.company_name.toLowerCase().includes(lower) ||
        job.languages.some(lang => lang.toLowerCase().includes(lower))
      )
    );
    setPage(1); // Reset to first page on search
  };

  const currentJobs = filteredJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

  return {
    jobs: currentJobs,
    loading,
    filterJobs,
    nextPage: () => setPage(p => Math.min(p + 1, Math.ceil(filteredJobs.length / jobsPerPage))),
    prevPage: () => setPage(p => Math.max(p - 1, 1)),
    page,
    totalPages: Math.ceil(filteredJobs.length / jobsPerPage),
  };
};

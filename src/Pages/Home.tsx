import JobCard from "../Components/JobCard";
import SearchBar from "../Components/SearchBar";
import ThemeToggle from "../Components/ThemeToggle";
import { useJob } from "../Hook/useJob";
import "./Home.css";
import logo from "./logo.png";

const Home = () => {
  const { jobs, loading, filterJobs } = useJob();

  if (loading) return <p>Loading jobs...</p>;

  return (
    <>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <SearchBar onSearch={filterJobs} />
        <ThemeToggle />
      </div>

      <div className="home">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </>
  );
};

export default Home;

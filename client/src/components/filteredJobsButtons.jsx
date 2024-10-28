import React, { useState } from 'react';
import { Stack, Panel, Badge, Button } from 'rsuite';

const FilteredJobsButtons = () => {
  const [jobs, setJobs] = useState([
    { heading: "Frontend Developer", image: "https://via.placeholder.com/50", amount: "$1000", status: "Open", statusColor: "green", url: '/job/1' },
    { heading: "Backend Developer", image: "https://via.placeholder.com/50", amount: "$1200", status: "Closed", statusColor: "red", url: '/job/2' },
    { heading: "UI/UX Designer", image: "https://via.placeholder.com/50", amount: "$800", status: "In Progress", statusColor: "orange", url: '/job/3' },
    { heading: "Data Scientist", image: "https://via.placeholder.com/50", amount: "$1500", status: "Open", statusColor: "green", url: '/job/4' },
    { heading: "Project Manager", image: "https://via.placeholder.com/50", amount: "$1300", status: "On Hold", statusColor: "gray", url: '/job/5' }
  ]);

//yaha upar url dynamic hona chiye abhi k liye fix daal dia h

  const handleDelete = (index) => {
    const updatedJobs = jobs.filter((_, jobIndex) => jobIndex !== index);
    setJobs(updatedJobs);
  };

  const handleEdit = (url) => {
    window.location.href = url; // This could be a placeholder for navigation to an edit page
  };

  return (
    <div style={{ padding: '30px 90px' }}>
      <h2>Already Posted Jobs:</h2>
      <Stack spacing={20} direction="column">
        {jobs.map((job, index) => (
          <Panel
            key={index}
            onClick={() => handleEdit(job.url)}
            bordered
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 20px',
              backgroundColor: '#f9f9f9',
              width: '50vh',
              cursor: 'pointer'
            }}
          >
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: 0 }}>{job.heading}</h4>
              <p style={{ margin: 0 }}>Amount: {job.amount}</p>
            </div>
            <img src={job.image} alt="Job" style={{ width: '50px', height: '50px', marginLeft: '20px' }} />
            <Badge style={{ backgroundColor: job.statusColor, color: 'white', marginLeft: '20px' }}>{job.status}</Badge>
            
            {/* Buttons for Edit and Delete */}
            <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
              <Button color="green" appearance="primary" onClick={() => handleEdit(job.url)}>
                Edit
              </Button>
              <Button color="red" appearance="primary" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </div>
          </Panel>
        ))}
      </Stack>
    </div>
  );
};

export default FilteredJobsButtons;
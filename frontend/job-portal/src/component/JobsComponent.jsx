import { useState } from 'react'
import './css/Color.css'
import { useEffect } from 'react'
import { retrieveAllJobs } from '../service/JobApiService'

const JobsComponent = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        listJobs()
    }, [])

    function listJobs() {
        retrieveAllJobs()
        .then(response => setJobs(response.data))
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="container mt-4">
                <p className="fw-light fs-4 text-center custom-color-text">Available Jobs</p>
                <hr className='custom-color-text' />
                <div>
                    <table className='table mt-5'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Desciption</th>
                                <th>Salary</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job =>
                                    <tr key={job.id}>
                                        <td className='text-uppercase'>{job.name}</td>
                                        <td>{job.description}</td>
                                        <td>{job.salary}</td>
                                        <td className='text-uppercase'>{job.location}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default JobsComponent
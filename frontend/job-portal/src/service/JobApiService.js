import axios from "axios"

const JOB_BASE_URL = 'http://localhost:8080/api/v1/jobs'

export const retrieveAllJobs = () => axios.get(JOB_BASE_URL)
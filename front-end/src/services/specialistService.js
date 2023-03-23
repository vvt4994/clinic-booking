import axios from '../axios'
const handleCreateSpecialist = async (specialistData) => {
  try {
    const options = {
      method: 'post',
      url: '/api/create-specialist',
      data: specialistData,
    }

    return await axios(options)
  } catch (error) {
    console.log(error)
  }
}

const handleGetAllSpecialist = async () => {
  try {
    const options = {
      method: 'get',
      url: '/api/get-all-specialist',
    }

    return await axios(options)
  } catch (error) {
    console.log(error)
  }
}

const handleGetSpecialistById = async (specialistId) => {
  try {
    const options = {
      method: 'get',
      url: `/api/get-specialist-by-id?id=${specialistId}`,
    }

    return await axios(options)
  } catch (error) {
    console.log(error)
  }
}

const handleUpdateSpecialistById = async (specialistData) => {
  try {
    const options = {
      method: 'put',
      url: '/api/update-specialist-by-id',
      data: specialistData,
    }

    return await axios(options)
  } catch (error) {
    console.log(error)
  }
}
export {
  handleCreateSpecialist,
  handleGetAllSpecialist,
  handleGetSpecialistById,
  handleUpdateSpecialistById,
}

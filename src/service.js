import axios from 'axios';

const Service = {
  getTasks: async () => {
    const result = await axios.get(`/tasks`)   
    console.log(result.data)
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/tasks`,{name})  
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`/tasks/${id}`,{isComplete})  
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/tasks/${id}`)  
    return result.data;
  }
};
export default Service;

import axios from 'axios';

// הגדרת כתובת ה-API ב-default
const apiUrl = "/api";
//axios.defaults.baseURL = apiUrl;


const Service = {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/tasks`)   
    console.log(result.data)
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`${apiUrl}/tasks`,{name})  
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const result = await axios.put(`${apiUrl}/tasks/${id}`,{isComplete})  
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/tasks/${id}`)  
    return result.data;
  }
};
export default Service;

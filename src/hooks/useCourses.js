// this function will get the fakedb data that we created in courses.json 
// this is our custom hook
// here we gave a condition so we can show different data by only using this hook
import { useEffect, useState } from "react"

const useCourses = option =>{
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);
    return option?[courses.slice(0,4)]:[courses];
}
export default useCourses;
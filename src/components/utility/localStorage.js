const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('tourID');
    if(storedJobApplication){
        console.log(JSON.parse(storedJobApplication));
        return JSON.parse(storedJobApplication);
        
    }
    return [];
}

const savedJobApplication = (id) =>{
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('tourID' , JSON.stringify(storedJobApplication));
    }
}
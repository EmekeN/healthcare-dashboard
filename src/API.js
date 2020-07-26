

export default class API {

    getDoctors = async () => {
        var response = await fetch(apiStrings.getAllDoctors);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error getting all providers");
        }
    }

    getAllTasks = async () => {
        var response = await fetch(apiStrings.getAllTasks);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error getting all provider task");
        }
    }

    getDoctorById = async (id) => {
        var response = await fetch(`${apiStrings.getDoctorInfo}${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log(`Error getting doctor ${id}`);
        }
    }

    getTasksForDoctor = async (id) => {
        var response = await fetch(`${apiStrings.getAllDoctors}${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.log("Error getting all providers");
        }
    }

    searchForDoctorByQuery = (list=[], query="")=> {
        if (query === "") {
            return [];
        }

        query = query.toLowerCase();

        return list.filter((provider) => {
            var searchString = `${provider.first_name.toLowerCase()} ${provider.last_name.toLowerCase()} ${provider.degree}`;
            return searchString.includes(query);
        });


    }
}


var apiStrings = {
    getAllDoctors: "https://testapi.io/api/akirayoglu/0/reference/getDoctors",
    getAllTasks: "https://testapi.io/api/akirayoglu/0/tasks/getTasks",
    getDoctorInfo: "https://testapi.io/api/akirayoglu/0/doctor/",
    getTaskForDoctor: "https://testapi.io/api/akirayoglu/0/tasks/"
}
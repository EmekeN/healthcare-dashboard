export default class API {

    getDoctors = async () => {
        var response = await fetch(apiStrings.getAllDoctorsUri);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(
                `${response.status} Error Code when getting all doctors`
            );
        }
    };

    getAllTasks = async () => {
        var response = await fetch(apiStrings.getAllTasksUri);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(
                `${response.status} Error Code when getting all tasks`
            );
        }
    };

    getDoctorById = async (id) => {
        var response = await fetch(`${apiStrings.getDoctorInfoByIdUri}${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(
                `${response.status} Error Code when getting doctor by ID: ${id}`
            );
        }
    };

    getTasksForDoctorById = async (id) => {
        var response = await fetch(`${apiStrings.getTaskForDoctorByIdUri}${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(
                `${response.status} Error Code when getting tasks for doctor by ID: ${id}`
            );
        }
    };

    searchForDoctorByQuery = (list = [], query = "") => {
        if (query === "") {
            throw new Error("Cannot search for items on empty query");
        }

        query = query.toLowerCase();

        return list.filter((provider) => {
            var searchString = `${provider.first_name.toLowerCase()} ${provider.last_name.toLowerCase()} ${
                provider.degree
            }`;
            return searchString.includes(query);
        });
    };
}

var apiStrings = {
    getAllDoctorsUri: "https://testapi.io/api/akirayoglu/0/reference/getDoctors",
    getAllTasksUri: "https://testapi.io/api/akirayoglu/0/tasks/getTasks",
    getDoctorInfoByIdUri: "https://testapi.io/api/akirayoglu/0/doctor/",
    getTaskForDoctorByIdUri: "https://testapi.io/api/akirayoglu/0/tasks/",
};

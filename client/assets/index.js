//This file is linked to index html and will be used to fetch data from the server created using async functions

//First async function fetches the mario kart data 
const fetchDriverData = async () => {

    // fetches data 
    const response = await fetch("http://localhost:8000/drivers");

    //converts the data we fetch into JSON format 
    const drivers = await response.json();

    return drivers
}

//Now we have the data, we want to display it on the front end 

const displayDriverData = async () => {

    const drivers = await fetchDriverData()
    // To display info on our html we must select the unordered list element 
    const list = document.querySelector("ul")
    
    //foreach loops through each driver, creating a list item for our unordered list
    drivers.forEach(driver => {
        
        const element = document.createElement("li")

        //create links on each mario kart character 
        const link = document.createElement("a");

        //The text content of the link will be the drivers name and will direct you to a new page showing the driver info
        link.textContent = driver["name"];
        link.href = `drivers.html?:id${driver['id']}`


        element.appendChild(link)
        // append your driver info to the unordered list 
        list.appendChild(element)
    })
    

}
displayDriverData()

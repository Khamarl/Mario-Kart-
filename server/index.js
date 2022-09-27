const app = require("./app")

//create port for local host 
const port = 8000;

app.listen(port, () => {
    console.log(`App listening on port ${port}...`);
})

// app.listen(port, () => {
//     console.log(`This app is listening on port ${port}`)
// })

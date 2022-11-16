const app = require("./app")

const {PORT} = process.env;

app.listen(PORT,() => {
    console.log(`SERVER is running at PORT : ${PORT}`);
})

console.log("Hello To Codespaces");
// require("dotenv").config()
const express =  require("express")
const app = express()

app.use(express.json()) // middleware: parse the sending req from clint side 

let arr = [
  {
    id: 1,
    name: "Maharshi",
    age: 29,
    city: "Delhi",
    role: "Software Developer",
    skills: ["JavaScript", "React", "Docker"]
  },
  {
    id: 2,
    name: "Rahul",
    age: 25,
    city: "Noida",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    name: "Priya",
    age: 27,
    city: "Gurugram",
    role: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 4,
    name: "Aman",
    age: 24,
    city: "Bangalore",
    role: "DevOps Engineer",
    skills: ["AWS", "Docker", "GitLab"]
  },
  {
    id: 5,
    name: "Sneha",
    age: 26,
    city: "Pune",
    role: "React Developer",
    skills: ["React", "Redux", "Tailwind"]
  }
];

//console.log(arr);

app.get("/Users", (req, res)=>{
    res.status(200).send("hii...!")
})

app.get("/get-users-data", (req, res)=>{
    const {username} = req.body
    let foundUser = arr.find((item)=>{
        return item.name.includes(username)
    })
    res.json(foundUser)
})

app.get("/get-user-through-query", (req, res)=>{
    const {name} = req.query
    let foundUser = arr.find((item)=>{
        return item.name.includes(name)
    })
    res.json(foundUser)
    console.log(req.query)
})





app.listen(8080 , ()=>{
    console.log("Server is running at port 8080")
})
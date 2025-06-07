const express = require("express");

const app = express();

const mockData =   [{id:1, name:"John Doe", email:"testmail@gmail.com"},
{id:2, name:"Jane Smith", email:"dddsa@gmail.com",}
,{id:3, name:"John", email:"qwe@gmail.com"}
]

app.get("/" , (req,res) =>{
    res.send("Hello World");  
})

app.get("/finance",(req,res) =>{
res.send(
    [{id:1, name:"Finance", description:"This is the finance department."}],
)
    }
)

app.get("/users" , (req, res) => {
    res.send(
    mockData
    );
});
app.get("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const user = mockData.find(user=> user.id === id);
    if(user){
        res.send(user);
    } else {
        res.status(404).send({error: "User not found"});
    }

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}
);
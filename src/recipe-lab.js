const express = require("express");
const fs = require("fs").promises;

const app = express();

app.listen(3000,()=>{
    console.log("server listening on port 3000.")
})

app.use(express.json());

const getRecipes = async() =>{
    const recipes = await fs.readFile("../data/recipea-data.json","utf8");

return recipes;
};


const getRecipe = async (id) => {
    const date = await fs.readFile("../data/recipea-data.json","utf8");


    return JSON.parse(data)[id];
}


const deleteRecipe = async (id) =>{
    const data = await fs.readFile ("../data/recipea-data.json","utf8")
}
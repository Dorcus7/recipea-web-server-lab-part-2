
const express = require("express");
const fs = require("fs").promises;

const app = express();

app.listen(3000,()=>{
    console.log("server listening on port 3000.")
})

app.use(express.json());

const getRecipes = async() =>{
    const recipes = await fs.readFileSync("../data/recipea-data.json","utf8");

return recipes;
};




app.post('/new-recipe', (req, res) => {
    const newRecipe = req.body;
    const recipes = JSON.parse(fs.readFileSync('./data/recipea-data.json', 'utf8'));
    recipes.push(newRecipe);
    fs.writeFileSync('./data/recipea-data.json', JSON.stringify(recipes, null, 2));
    res.send('Recipe created successfully!')});

    
app.put('/change-recipe/:id', (req, res) => {
        const { id } = req.params;
        const updatedRecipe = req.body;
        const recipes = JSON.parse(fs.readFileSync('./data/recipea-data.json', 'utf8'));
        if (id >= 0 && id < recipes.length) {
          recipes[id] = updatedRecipe;
          fs.writeFileSync('./data/recipea-data.json', JSON.stringify(recipes, null, 2));
          res.send('Recipe updated successfully!');
        } else {
          res.status(404).send('Recipe not found');
        }
      });




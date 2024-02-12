import foodModel from '../models/food.model.js';

class FoodController {
    static async getAllFood(req, res) {
        const recipes = foodModel.find().lean();

        recipes = recipes.sort(-createdAt);

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 15;
        const skip = (page - 1) * limit;

        const totalRecipes = await countDocuments(recipes);

        const numOfPage = Math.ceil(totalRecipes / limit);

        recipes = await recipes.skip(skip).limit(limit);

        res.status(200).send({
            page,
            numOfPage,
            totalRecipes,
            recipes,
        })
    }
}
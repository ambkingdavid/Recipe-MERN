import continentModel from "../models/continent.model.js";


class ContinentController {
    static async getAllContinent(req, res) {
        const continents = await continentModel.find().lean();

        res.status(200).send({
            continents,
        });
    }
}

export default ContinentController;

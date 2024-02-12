import categoryModel from "../models/category.model.js";


class CategoryController {
    static async getAllCategory(req, res) {
        // const categories = continentModel.find().lean();

        // res.status(200).render('continent', {
        //     categories,
        // })
        const asianCountries = [
            {
                name: 'China',
                continent: 'Asia',
                image: 'chinese-food.jpg',
            },
            {
                name: 'Japan',
                continent: 'Asia',
                image: 'japanese-food.jpg',
            },
            {
                name: 'India',
                continent: 'Asia',
                image: 'indian-food.jpg',
            },
            {
                name: 'South Korea',
                continent: 'Asia',
                image: 'korean-food.jpg',
            },
            {
                name: 'Thailand',
                continent: 'Asia',
                image: 'thai-food.jpg',
            },
            {
                name: 'Vietnam',
                continent: 'Asia',
                image: 'vietnamese-food.jpg',
            },
        ];

        await categoryModel.insertMany(asianCountries);

        const europeanCountries = [
            { name: 'Italy', continent: 'Europe', image: 'italian-food.jpg' },
            { name: 'France', continent: 'Europe', image: 'french-food.jpg' },
            { name: 'Germany', continent: 'Europe', image: 'german-food.jpg' },
            { name: 'Spain', continent: 'Europe', image: 'spanish-food.jpg' },
            { name: 'Greece', continent: 'Europe', image: 'greek-food.jpg' },
            { name: 'Netherlands', continent: 'Europe', image: 'dutch-food.jpg' },
        ];
        await categoryModel.insertMany(europeanCountries);


        const africanCountries = [
            { name: 'Nigeria', continent: 'Africa', image: 'nigerian-food.jpg' },
            { name: 'South Africa', continent: 'Africa', image: 'south-african-food.jpg' },
            { name: 'Morocco', continent: 'Africa', image: 'moroccan-food.jpg' },
            { name: 'Egypt', continent: 'Africa', image: 'egyptian-food.jpg' },
            { name: 'Kenya', continent: 'Africa', image: 'kenyan-food.jpg' },
            { name: 'Ghana', continent: 'Africa', image: 'ghanaian-food.jpg' },
        ];
        await categoryModel.insertMany(africanCountries);

        const northAmericanCountries = [
            { name: 'United States', continent: 'North America', image: 'american-food.jpg' },
            { name: 'Canada', continent: 'North America', image: 'canadian-food.jpg' },
            { name: 'Mexico', continent: 'North America', image: 'mexican-food.jpg' },
            { name: 'Jamaica', continent: 'North America', image: 'jamaican-food.jpg' },
            { name: 'Costa Rica', continent: 'North America', image: 'costa-rican-food.jpg' },
            { name: 'Cuba', continent: 'North America', image: 'cuban-food.jpg' },
        ];
        await categoryModel.insertMany(northAmericanCountries);

        const southAmericanCountries = [
            { name: 'Brazil', continent: 'South America', image: 'brazilian-food.jpg' },
            { name: 'Argentina', continent: 'South America', image: 'argentinian-food.jpg' },
            { name: 'Peru', continent: 'South America', image: 'peruvian-food.jpg' },
            { name: 'Chile', continent: 'South America', image: 'chilean-food.jpg' },
            { name: 'Colombia', continent: 'South America', image: 'colombian-food.jpg' },
            { name: 'Ecuador', continent: 'South America', image: 'ecuadorian-food.jpg' },
        ];
        await categoryModel.insertMany(southAmericanCountries);
        console.log('inserted successfully');
    }
}

export default CategoryController;

export const recipes = [
    {
        title: "Crepes (French pancake)",
        dishType: "Desert",
        portion: {
            "num": "5",
            "type": "person"
        },
        difficulty: "Easy",
        cost: "LowCost",
        imageUrl: "data:image/jpeg;base64,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",
        Preparation: "00:10",
        CookingTime: "00:30",
        RestTime: "",
        ingredients: [
            {
                ingredient: "Milk",
                quantity: "1",
                unit: "L"
            },
            {
                ingredient: "Eggs",
                quantity: "5",
                unit: ""
            },
            {
                ingredient: "Flour",
                quantity: "500",
                unit: "g"
            },
            {
                ingredient: "Butter",
                quantity: "10",
                unit: "g"
            },
            {
                ingredient: "Rhum",
                quantity: "1",
                unit: "Tablespoon"
            },
            {
                ingredient: "Salt",
                quantity: "1",
                unit: "a pinch"
            },
            {
                ingredient: "Sunflower oil",
                quantity: "2",
                unit: "Tablespoon"
            }
        ],
        steps: [
            {step: "Mix the eggs, melted butter, rhum, and one glass of milk together."},
            {step: "Add the floor and the salt and mix it until it's a homogenous dough. And add the rest of the milk and mix until the batter is well incorporated into the milk."},
            {step: "Prepare a flat pan (or two), some oil, and use a tissue or a brush to gently oil the pan. Put your pan on the stove and when the pan is hot you can pour the batter into a pan. Tilt the pan so that the dough is on the entire flat surface of the pan. Repeat the process until there is no more dough."},
            {step: "Enjoy your crepes with jam, Nutella, fruits, coco flakes... etc. Or do the traditional Crepes flambé with sugar, Grand Marnier, and light it on fire! :D "},
        ],
        tags: [
            "#FlatFood",
            "#FrenchFood",
            "#FingerFood",
            "#Sweet",
            "#Desert",
            "#Easy",
            "#LowCost"
        ],
        id: "CrepesFrenchpancake1687437640780"
    },
    {
        title: "Baozi Pan",
        dishType: "Main dish",
        portion: {
            num: "2",
            type: "person"
        },
        difficulty: "Medium",
        cost: "LowCost",
        imageUrl: "data:image/jpeg;base64,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",
        Preparation: "00:30",
        CookingTime: "00:20",
        RestTime: "01:00",
        ingredients: [
            {
                ingredient: "Flour",
                quantity: "150",
                unit: "g"
            },
            {
                ingredient: "Yeast",
                quantity: "1",
                unit: "Teaspoon"
            },
            {
                ingredient: "Water",
                quantity: "75",
                unit: "g"
            },
            {
                ingredient: "Sunflower Oil",
                quantity: "3",
                unit: "Teaspoon"
            },
            {
                ingredient: "Minced meat",
                quantity: "185",
                unit: "g"
            },
            {
                ingredient: "Ginger",
                quantity: "4",
                "unit": "Slice (1mm)"
            },
            {
                ingredient: "Green oinions",
                quantity: "1",
                unit: ""
            },
            {
                ingredient: "Soy sauce",
                quantity: "2",
                unit: "Tablespoon"
            },
            {
                ingredient: "Oyster sauce",
                quantity: "1",
                unit: "Tablespoon"
            }
        ],
        steps: [
            {step: "Preparation of the dough: \nWarm the water and mix it with the yeast. Then, add the flour and 2 teaspoons of sunflower oil to the mixture. Knead the dough for approximately 5 minutes until it becomes smooth and elastic. Shape the dough into a ball and let it rest for at least half an hour, allowing it to rise and develop flavor."},
            {step: "Preparation of the stuffing: \nFor the minced meat, you can choose your favorite type of meat such as pork, beef, duck, or any other preferred option. Start by mincing the slices of ginger and the green onion, and then add them to the meat. Next, incorporate 2 tablespoons of soy sauce, 1 tablespoon of oyster sauce, and 1 tablespoon of oil (sunflower or sesame) into the mixture. Thoroughly mix everything together and allow it to sit for a while to allow the flavors to blend."},
            {step: "Preparation of the Baozi:\nTo achieve approximately equal amounts of dough, Roll out the dough into a log shape. Cut the log of dough into two equal parts. Take each of the two parts and divide them into two equal parts, resulting in four pieces of dough. Now, take each of the four pieces and divide them into three equal parts, resulting in a total of twelve pieces of dough, each approximately the same size."},
            {step:"Roll out each piece of dough to achieve circles approximately 10 cm in diameter. Next, place a tablespoon of the stuffing preparation in the center of each circle. Fold the dough over the stuffing, shaping it into a chestnut-like shape."},
            {step:"The cooking: \nIn a generously oiled pan over medium heat, add the Baozi and cook for approximately 1 minute. Then, add 130g of water to the pan and cover it. Allow the Baozi to cook for approximately 10 minutes or until they are cooked through. Congratulations, they are now ready to be enjoyed!"},
            {step: "Note: this recipe is from Le riz jaune here is a link to the video: https://www.tiktok.com/@lerizjaune/video/7190792253378497798"} 
        ],
        tags: [
            "#AsianFood",
            "#BreadBasedFood",
            "#MainDish",
            "#Medium",
            "#LowCost"
        ],
        id: "BaoziPan1687437598940"
    },
    {
        title: "Tuscan chicken",
        dishType: "Main dish",
        portion: {
            num: "4",
            type: "person"
        },
        difficulty: "Easy",
        cost: "ModerateCost",
        imageUrl: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/09/Tuscan-Chicken-main-1-300x300.jpg",
        Preparation: "00:15",
        CookingTime: "00:20",
        RestTime: "",
        ingredients: [
            {
                ingredient: "Chicken breast",
                quantity: "4",
                unit: ""
            },
            {
                ingredient: "mix oregano, thyme, basil, and rosemary",
                quantity: "1",
                unit: "Tablespoon"
            },
            {
                ingredient: "Flour",
                quantity: "4",
                unit: "Tablespoon"
            },
            {
                ingredient: "Olive oil",
                quantity: "3",
                unit: "Tablespoon"
            },
            {
                ingredient: "Garlic cloves",
                quantity: "2",
                unit: ""
            },
            {
                ingredient: "Onion",
                quantity: "1",
                unit: ""
            },
            {
                ingredient: "Heavy cream",
                quantity: "200",
                unit: "g"
            },
            {
                ingredient: "Chicken broth",
                quantity: "160",
                unit: "g"
            },
            {
                ingredient: "Sundried tomatoes",
                quantity: "60",
                unit: "g"
            },
            {
                ingredient: "Parmesan",
                quantity: "50",
                unit: "g"
            }
        ],
        steps: [
            "Prep the chicken. Cover both sides of each chicken breast with a mix of flour, salt, and pepper.\nSear the chicken. Heat 2 tablespoons of the oil in a large skillet over medium heat. Add the chicken and sear for 3 to 4 minutes on each side, until golden. Remove the chicken from the pan to a plate and set aside.",
            "Cook the onions. In the same skillet, add another tablespoon of oil and the minced onion. Saute for 2 to 3 minutes, until the onion has softened.\nAdd the minced sun-dried tomatoes and the minced garlic and saute another minute, until fragrant.",
            "Add the heavy cream, the chicken broth and parmesan cheese, stir together, and bring to a simmer.\nLet it simmer. Place the chicken back in the skillet and cook until heated through, about 5 minutes.",
            "Note: perfect to eat with Tagliatelle or your favorite pasta, enjoy!\nRecipe inspired by Gimme Delicious link video here: https://www.tiktok.com/@gimme.delicious/video/7213007579411238190?is_from_webapp=1&sender_device=pc&web_id=7242227039683118618\n"
        ],
        tags: [
            "#ItalianFood",
            "#Chicken",
            "#Sauce",
            "#MainDish",
            "#Easy",
            "#ModerateCost"
        ],
        id:'Tuscanchicken1687437544045'
    }
]
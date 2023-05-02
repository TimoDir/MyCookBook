import * as React from "react"
import { Link } from "react-router-dom"
import "./css/Home.css"

export function Home(){
    return(
        <div className="HomePage">
            <section className="HomeWelcome">
                <div className="ParallaxContent">
                    <img src="src\utils\img\MY COOK BOOK Welcom.png" alt="Welcome to My Cook Book website a cooking blog" />
                    <br />
                    <button>Get Started</button>
                </div>
                <div className="ParalexBackground"/>
                <div className="ParalexForeground"/>
            </section>


            <section className="HomeStep">
                <div className="HS">
                    <h2>How does it work:</h2>
                    <p>Navigate through the Red's bookmarks to add or view recipes. You can even create a printable menu! Let's explore all the features available:</p>
                </div>
                <div className="HS">
                    <h3>Add your recipe</h3>
                    <p>You can add your favorite recipes to this website and retrieve them whenever you want in just a few seconds.</p>
                    <br />
                    <Link to="../AddRecipe" href="#NavBar"><button>Add recipe</button></Link>
                </div>
                <div className="HS">
                    <h3>Look for your Recipes</h3>
                    <p>When you want to retrieve a recipe, simply go to the 'Recipes' section and search for the one you want using our super intuitive search method! If you're not sure what you want to cook, you can always use the tag system to find inspiration.</p>
                    <br />
                    <Link to="../RecipesList"><button>Recipes</button></Link>
                </div>
                <div className="HS">
                    <h3>Create your Menu</h3>
                    <p>Whether you're inviting friends over, preparing a special birthday celebration, or planning an event, create your menu with ease! You can even print it with the recipes alongside. Go ahead, give it a try!</p>
                    <br />
                    <Link to="../MenuCreator"><button>Menu creator</button></Link>
                </div>
                    <div className="HS">
                    <h3>Get your knife ready and bon appétit!</h3>
                </div>
            </section>
            
        </div>
    )
}
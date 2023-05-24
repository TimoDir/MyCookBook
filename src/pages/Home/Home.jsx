import * as React from "react"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import "./css/Home.css"

export function Home(){
    // For each HomeStep child, we create a state that checks if an element is in the viewport using its reference and another that controls its style
    const [ref1, HS1inView] = useInView({threshold: 0.3, triggerOnce:true});
    const [styleHS1, setStyleHS1] = React.useState({opacity: 0, marginLeft: "24%"});
    const [ref2, HS2inView] = useInView({threshold: 0.3, triggerOnce:true});
    const [styleHS2, setStyleHS2] = React.useState({opacity: 0, marginLeft: "0%"});
    const [ref3, HS3inView] = useInView({threshold: 0.3, triggerOnce:true});
    const [styleHS3, setStyleHS3] = React.useState({opacity: 0, marginLeft: "24%"});
    const [ref4, HS4inView] = useInView({threshold: 0.3, triggerOnce:true});
    const [styleHS4, setStyleHS4] = React.useState({opacity: 0, marginLeft: "0%"});
    const [ref5, HS5inView] = useInView({threshold: 0.3, triggerOnce:true});
    const [styleHS5, setStyleHS5] = React.useState({opacity: 0, marginLeft: "24%"});
    
    // By using the useEffect hook, we check if a child of HomeStep is in view and change its style accordingly
    React.useEffect(()=>{
        const odd = {opacity: 1, marginLeft: "0%"};
        const even = {opacity: 1, marginLeft: "24%"};
        if (HS1inView) {
            setStyleHS1(odd);
        };
        if(HS2inView){
            setStyleHS2(even);
        };
        if(HS3inView){
            setStyleHS3(odd);
        };
        if(HS4inView){
            setStyleHS4(even);
        };
        if(HS5inView){
            setStyleHS5(odd);
        };
    }, [HS1inView, HS2inView, HS3inView, HS4inView, HS5inView])

    return(
        <div className="HomePage">
            <section className="HomeWelcome">
                <div className="ParallaxContent">
                    <img src="src\utils\img\MY COOK BOOK Welcom.png" alt="Welcome to My Cook Book website a cooking blog" />
                    <br />
                    <a href="#HomeStep"><button>Get Started</button></a>
                </div>
                <div className="ParalexBackground"/>
                <div className="ParalexForeground"/>
            </section>


            <section className="HomeStep" id="HomeStep">
                {/* We use the state we created to add a reference that checks if elements are in the viewport, and if they are, we change their style and visibility  */}
                <div className="HS1" ref={ref1} style={styleHS1}>
                    <h2>How does it work:</h2>
                    <p>Navigate through the Red's bookmarks to add or view recipes. You can even create a printable menu! Let's explore all the features available:</p>
                </div>
                <div className="HS2" ref={ref2} style={styleHS2}>
                    <h3>Add your recipe</h3>
                    <p>You can add your favorite recipes to this website and retrieve them whenever you want in just a few seconds.</p>
                    <br />
                    <Link to="../AddRecipe" href="#NavBar"><button>Add recipe</button></Link>
                </div>
                <div className="HS3" ref={ref3} style={styleHS3}>
                    <h3>Look for your Recipes</h3>
                    <p>When you want to retrieve a recipe, simply go to the 'Recipes' section and search for the one you want using our super intuitive search method! If you're not sure what you want to cook, you can always use the tag system to find inspiration.</p>
                    <br />
                    <Link to="../RecipesList"><button>Recipes</button></Link>
                </div>
                <div className="HS4" ref={ref4} style={styleHS4}>
                    <h3>Create your Menu</h3>
                    <p>Whether you're inviting friends over, preparing a special birthday celebration, or planning an event, create your menu with ease! You can even print it with the recipes alongside. Go ahead, give it a try!</p>
                    <br />
                    <Link to="../MenuCreator"><button>Menu creator</button></Link>
                </div>
                    <div className="HS5" ref={ref5} style={styleHS5}>
                    <h3>Get your knife ready and bon appétit!</h3>
                </div>
            </section>
            
        </div>
    )
}
import GreekSalad from '../Assets/images/greek-salad.png';
import Bruschetta from '../Assets/images/bruschetta.png';
import GrilledFish from '../Assets/images/grilled-fish.png';

function Specials() {
    const specialMenus = [
        {   
            image: GreekSalad,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese.",
        },
        {
            image: Bruschetta,
            title: "Bruschetta",
            price: "$7.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic.",
        },
        {
            image: GrilledFish,
            title: "Grilled Fish",
            price: "$5.00",
            description: "The grilled fish is an in-season tilapia with roasted veggies and garnished with tomatoes, onions, and spices.",
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special for today" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3>{price}</h3>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}
  
  export default Specials;
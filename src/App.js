import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './Components/data';

export default function App(){
    const cards = data.map(item=>{
        return(
            <Card
                key = {item.id}
                //Passing every single property as props 

                // image = {item.coverImg}
                // star = {item.star}
                // rating = {item.stats.rating}
                // reviewCount = {item.stats.reviewCount}
                // location = {item.location}
                // title = {item.title}
                // price = {item.price}
                // description = {item.description}
                // openSpots = {item.openSpots}

                // Passing the whole object as props
                item = {item}

                // Passing the whole object as spread operator
                // {...item}
            />
        )
    })
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className='card-box'>
                {cards}
            </div>
        </div>
    )
}
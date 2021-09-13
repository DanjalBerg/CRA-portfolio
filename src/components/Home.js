import React from 'react';
import { Link } from 'react-router-dom';

//components
import Header from './Header';
import HeroImage from './HeroImage';
import Grid from './Grid';

//images
import Hero from '../images/HeroImage.png'


const gridTitles = ['CV', 'Master Thesis', 'number 3']
const Home = () => {
  console.log(Hero)
  return (
    <>
      <Header />
      <HeroImage image={Hero}/>
      <Grid>
        {gridTitles.map((title) => (
          <Link to={`/${title}`} className="title-items" key={title}>{title}</Link>
        ))}
      </Grid>

    </>
  )

}

export default Home

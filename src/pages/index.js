import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import sketchLogo from '../images/logo-sketch.png'
import figmaLogo from '../images/logo-figma.png'
import studioLogo from '../images/logo-studio.png'
import framerLogo from '../images/logo-framer.png'
import reactLogo from '../images/logo-react.png'
import swiftLogo from '../images/logo-swift.png'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticData from '../../data.json'
import Cell from '../components/Cell'

//the values attribute in animate tag in the svg takes 3 "d" values from the 3 different SVGs to create the wave effect. The last "d" value is the original state (the first "d" value that's followed by a semicolon)

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
  }
`

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero-group">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="logos">
          <img src={sketchLogo} alt="sketch logo" width="50" />
          <img src={figmaLogo} alt="sketch logo" width="50" />
          <img src={studioLogo} alt="sketch logo" width="50" />
          <img src={framerLogo} alt="sketch logo" width="50" />
          <img src={reactLogo} alt="sketch logo" width="50" />
          <img src={swiftLogo} alt="sketch logo" width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="cards">
      <h2>11 courses, more coming!</h2>
      <div className="card-group">
        <Card
          title="Design System "
          text="10 sections"
          image={require('../images/wallpaper.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require('../images/wallpaper3.jpg')}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, CSS Grid, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticData.cells.map((cell) => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage

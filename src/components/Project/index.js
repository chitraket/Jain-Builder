import React from "react";
import styled from "styled-components";
import { marketPlaceData, ProjectCategoryTitle } from "../../data/ProjectsData";
import RoundButton from "../RoundButton";
import ProjectCard from "./ProjectCard";

export default function Project() {
  const [item,setItems] = React.useState(marketPlaceData)
  const [category,setCategory] = React.useState(marketPlaceData[0].category);
  const [categoryTitle,setCategoryTitle] = React.useState('')
  const allCatValues = [...new Set(marketPlaceData.map((curElem)=> {return curElem.category}))]
  const filterMenu = (category) => {
      const updatedItems = marketPlaceData.filter((curElem)=> {
          return curElem.category === category;
      })
      const updatedCategory = ProjectCategoryTitle.filter((Currcategoty)=> {
          return Currcategoty.category === category
      })
      setCategory(category);
      setItems(updatedItems);
      setCategoryTitle(updatedCategory)
  }
  React.useEffect(()=> {
    filterMenu(category);
  },[category])
  return (
    <Section>
      <div className="title">
        <h2>{categoryTitle[0]?.title}</h2>
        <p>
          {categoryTitle[0]?.description}
        </p>
      </div>
      <div className="marketPlaceTypes">
        {allCatValues.map((text, index) => {
          return <RoundButton text={text} key={index} blue={text === category} onClick={()=> setCategory(text)} />;
        })}
      </div>
      <ProjectCard items={item}/>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
    }
  }
  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;
    button:not(.blue) {
      color: black;
      border-color: #7b7e86;
    }
  }
  @media screen and  (max-width:600px) {
    margin: 2rem;
    .title {
      h2 {
      font-size: 2.5rem;
    }
    }
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    }
  }
`;
import React from 'react'
import fetchGraphQL from "../helpers/fetchGraphQL.js"
import { SKILL_AREA_QUERY } from "../constants/gql/queryStrings/skillAreaQuery"

import SkillArea from "./SkillArea"


const { useState, useEffect } = React;


export default function SkillsAreaContainer() {
  const [skillAreas, setSkillAreas] = useState([]);


  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(SKILL_AREA_QUERY).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      
      for( let skillArea in response.data){
        setSkillAreas(prevState => [...prevState, response.data[skillArea]]);
      }

    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);


  let skillsAreaContentBuilder = () => {
    let skilsAreasContent = skillAreas.map(e => (
      <div>
        <SkillArea skillData={e}/>
      </div>
    ))
    return skilsAreasContent;
  }


  return (
    <div>
      Skill Area Container
      
      {skillAreas ? skillsAreaContentBuilder() : ""}
    </div>
  )
}

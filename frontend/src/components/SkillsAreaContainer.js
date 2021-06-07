import React from 'react'
import fetchGraphQL from "../helpers/fetchGraphQL.js"
import { SKILL_AREA_QUERY } from "../constants/gql/queryStrings/skillAreaQuery"

import SkillArea from "./SkillArea"


const { useState, useEffect } = React;


export default function SkillsAreaContainer() {
  const [skillAreas, setSkillAreas] = useState(null);


  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(SKILL_AREA_QUERY).then(response => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;
      console.log(data)
      setSkillAreas(data);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, [fetchGraphQL]);


  let skillsAreaContent = () => {
    if(skillAreas){
      
    }
  }


  return (
    <div>
      Skill Area Container
      {/* {skillAreas ? skillsAreaContent() : ""} */}
    </div>
  )
}

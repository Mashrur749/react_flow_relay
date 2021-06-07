import React from 'react'

export default function SkillArea({skillData}) {
  
  console.log("from skill area", skillData)
  
  return (
    <div>
      <h1>{skillData.name}</h1>
      <button> + </button>
      {skillData.skills.edges.map(skill => <li> {skill.node.name} </li>)}
    </div>
  )
}

import React from 'react'
import AddSkillModal from './AddSkillModal';

const {useState} = React;

export default function SkillArea({skillData}) {

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div>
      <h1>{skillData.name}</h1>
      <button onClick={ () => setIsModalOpen(true) } > + </button>
      
      {skillData.skills.edges.map(skill => 
        <li key={skill.node.id}> 
          {skill.node.name} 
        </li>
      )}

      <AddSkillModal skillAreaId={skillData.id}  open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  )
}

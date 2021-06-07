import React from 'react'
import ReactDom from 'react-dom'


const {useState, useEffect} = React;


export default function AddSkillModal({open, onClose, skillAreaId}) {
  
  console.log(skillAreaId)

  let MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000
  }

  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }


  const [skill, setSkill] = useState("");
  
  let handleChange = (e) => {
    setSkill(e.target.value);
  }


  if(!open) return null

  return ReactDom.createPortal(    
      <>
        <div style={OVERLAY_STYLES}></div>

        <div style={MODAL_STYLES}>
          <button onClick= { ()=> { onClose() } } > X </button>
          <input type="text" value={skill} onChange={handleChange}/>
          <button> Cancel </button>
          <button> Add </button>
        </div>
      </>
      , document.getElementById('portal')
    )
    
}

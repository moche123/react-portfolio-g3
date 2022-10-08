import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { skills } from '../sources/skills'
import { voteSkill } from '../votationSlice'

import './skills.css'

const Skills = () => {
  const dispatch = useDispatch()
  const votS = useSelector(voteSkill)
  console.log(votS)
  return (
    <div className='skill-section'>
      <h3 className='my-skills-title'>My skills</h3>
      <br />
      <div className='container-skill'>
        {
          skills.map((skill) => {
            return (
              <div key={skill.id}>
                  <div className='skill-item'>{skill.tool}</div>
                  <div className='container-img'>
                    <img className='img-skill' src={skill.icon} alt="" />
                  </div>
                  <div>
                    Votes:{votS.payload.votation.skills[skill.id].count} 
                    <br /><br />
                  </div>
                  <div>
                    <button 
                    
                    onClick={() => dispatch(voteSkill(skill.id))}
                    className='button-vote'>Vote!!!</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
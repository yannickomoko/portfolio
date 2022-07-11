import React from 'react';
import { CircularProgressbar } from "react-circular-progressbar";
import skills from "../data/skill";

export default function Circle() {
  return (
    <div>
        {skills.map((skill) => (
            <div className=''>
                <CircularProgressbar value={skill.percentage} text={`${skill.percentage}%`}  /> 
            </div>
        ))}
    </div>
  )
}

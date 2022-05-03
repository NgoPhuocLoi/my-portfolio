import React from 'react'
import "./SectionTitle.scss"

interface SectionTitleProps {
    text: string
}

const SectionTitle = ({text}:SectionTitleProps) => {
  return (
    <div className="row">
        <div className="section-title padd-15">
          <h2>About Me</h2>
        </div>
      </div>
  )
}

export default SectionTitle
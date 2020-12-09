import React, { useEffect, useRef } from "react"
import StyledContactText from "../../styles/contact/StyledContactText"
import { Icon } from "@iconify/react"
import eMail from "@iconify/icons-emojione/e-mail"
import { subHeadingAnimation } from "../../animations/contactSectionAnimation"

const ContactText = () => {
  const subHeadingRef = useRef(null)
  useEffect(() => {

    subHeadingAnimation(subHeadingRef.current)
  }, [])
  return (
    <StyledContactText>
      <div className="subheadingContainer">
        <h2 ref={subHeadingRef} className="subheading">
          Hire me and let's grow together.
        </h2>
      </div>
      <p>
        I am at the very beggining of my IT carrier so more imortant for me is
        to acquire knowledge and gain experience than salary.
      </p>
      <p>
        Main goal in my new work is to create good quality code with more
        experienced developers and learn from them.
      </p>
      <p>
        Right now I'm sure that I can handle small tasks. In the near future I
        will do bigger tasks and will become independent programmer.
      </p>

      <p>Feel free to contact me via form as well as an e-mail:</p>
      <div className="email">
        <Icon icon={eMail} /> szildaniel@gmail.com
      </div>
    </StyledContactText>
  )
}

export default ContactText

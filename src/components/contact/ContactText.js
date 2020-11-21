import React from "react"
import StyledContactText from "../../styles/contact/StyledContactText"
import { Icon } from "@iconify/react"
import eMail from "@iconify/icons-emojione/e-mail"

const ContactText = () => {

  return (
    <StyledContactText>
      <h2 className="subheading">It would be a honor to</h2>
      <p>create good quality code with more experienced developers.</p>
      <p>
        I am at the very beggining of my IT carrier so more imortant for me is to
        acquire knowledge and gain experience than salary.
      </p>
      <p>Feel free to contact me via form as well as an e-mail:</p>
      <div className="email">
        <Icon icon={eMail} /> szildaniel@gmail.com
      </div>
    </StyledContactText>
  )
}

export default ContactText

import React, {useState} from "react"
import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem"
import { useGithubQueryFile } from "../../../helpers/hooks/useGithubQueryFIles"
import Img from "gatsby-image"

const GithubUserProject = () => {
  const data = useGithubQueryFile();
  const [ghLink] = useState("https://github.com/szildaniel/Github-Users-API");
    const [liveLink] = useState("https://szildaniel.github.io/Github-Users-API/");
  return (
    <PortfolioArticle
      name="GitubUsersAPI"
      ghLink={ghLink}
    >
      <PortfolioItem
        bgColor="#F3F3F3"
        itemTitle="Github-Users-API"
        overflowHidden
        ghLink={ghLink}
        liveLink={liveLink}
      >
        <div className="triangle"></div>
        <div className="framefluidContainerUp">
          <Img
            fluid={data.githubApiFrame1.childImageSharp.fluid}
            alt="Github API Project"
          />
        </div>
        <div className="framefluidContainerDown">
          <Img
            fluid={data.githubApiFrame2.childImageSharp.fluid}
            alt="Github User API"
          />
        </div>
        <div className="linesUpContainer">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              x2="130"
              y1="120"
              y2="0"
              stroke="#DCBA31"
              strokeLinecap="round"
              strokeWidth="3"
              strokeDasharray="7"
            />
          </svg>
        </div>
        <div className="linesDownContainer">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              x2="150"
              y1="120"
              y2="0"
              stroke="#DCBA31"
              strokeLinecap="round"
              strokeWidth="3"
              strokeDasharray="7"
            />
          </svg>
        </div>
      </PortfolioItem>
      <p>
        It is a website APP built in React which use Github API. You can search:
        user information and repositories.
      </p>
    </PortfolioArticle>
  )
}

export default GithubUserProject

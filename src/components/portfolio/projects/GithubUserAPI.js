import React from "react"
import PortfolioArticle from "../PortfolioArticle"
import PortfolioItem from "../PortfolioItem";

import githubApi from "../../../images/portfolio/imgItems/githubApi.svg"
import githubApiUser from "../../../images/portfolio/imgItems/githubApiUser.svg"

import line1 from "../../../images/portfolio/imgItems/line1.svg"
import line2 from "../../../images/portfolio/imgItems/line2.svg"

const GithubUsersItem = () => {
  return (
    <PortfolioArticle
      name="GitubUsersAPI"
      ghLink="https://github.com/szildaniel/Github-Users-API"
    >
      <PortfolioItem bgColor="#F3F3F3" itemTitle="Github-Users-API" overflowHidden>
        <div className="triangle"></div>
        <img
          src={githubApi}
          alt="Github-Users Application"
          className="ghApiImg"
        />
        <img
          src={githubApiUser}
          alt="Github-Users Application"
          className="ghApiUserImg"
        />
        <div className="linesContainer">
          <img src={line1} alt="Line Image" />
          <img src={line2} alt="Line Two" />
        </div>
      </PortfolioItem>
      <p>
        It is a website APP built in React which use Github API. You can search:
        user information and repositories.
      </p>
    </PortfolioArticle>
  )
}

export default GithubUsersItem;

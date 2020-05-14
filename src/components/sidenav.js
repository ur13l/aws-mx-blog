import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import TagsSideNav from "./tags-sidenav"
import { TwitterTimelineEmbed } from "react-twitter-embed"

/**
 * SideNavWrapper element, used to set style to a component.
 */
const SideNavWrapper = styled.div`
  padding: 24px;
  
  .sidenav-section {
    padding-top: 42px;
    padding-bottom: 42px;
  }

 .sidenav-section {
    border-bottom: 1px solid #d0d0d0;
    padding-top: 42px;
    padding-bottom: 42px;
  }

  .categories-container a {
    color: #aaa;
    font-size: 18px;
  } 
`

/**
 * SideNav will render a form to suscribe to our newsletter and a section to select the tags.
 */
const SideNav = () => {

  return (
    <SideNavWrapper>
      <TagsSideNav/>
      <div className="last-minute sidenav-section">
        <h3>Twitter Feed</h3>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="awscloud"
          options={{ height: 600 }}
        />
      </div>
    </SideNavWrapper>
  )
}

/**
 * Default props for the SideNav Component
 */
SideNav.propTypes = {}

export default SideNav

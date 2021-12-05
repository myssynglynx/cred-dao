import React from 'react'

import { zipUp, zipDown, bobble, expandFadeInBobble, fadeIn, radialBackgroundFadeIn } from '../../libraries/animation'

import logo from '../../resources/logo/cred-logo.svg'
import './main.css'

class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logoBobble: false,
      linkBobble: false,
    }

    this.mouseOverLogo = this.mouseOverLogo.bind(this)
    this.mouseOverLink = this.mouseOverLink.bind(this)
    this.clickLogo = this.clickLogo.bind(this)
    this.clickLink = this.clickLink.bind(this)
  }
  // life-cycle functions
  componentDidMount() {
    fadeIn('.Main p#title', 2000)
    zipUp('.Main div#description', 3000)
    zipDown('.Main div#title', 3000)
    setTimeout(() => {
      expandFadeInBobble('.Main img#logo', 4000)
    }, 1500)
    setTimeout(() => {
      this.setState({ logoBobble: true })
    }, 5000)
    // 243 0 67 0.8 0.3
    radialBackgroundFadeIn('.Main div#description', 'ellipse at top', 255, 0, 70, 203, 0, 118, 1, 1, 2500)
    radialBackgroundFadeIn('.Main div#title', 'ellipse at bottom', 255, 0, 70, 203, 0, 118, 1, 1, 2500)
    radialBackgroundFadeIn('.Main p#description', 'closest-side', 243, 0, 67, 0.2, 0, 8000)
    fadeIn('.Main p#description', 3000)

    setTimeout(() => {
      fadeIn('.Main a#join-discord', 3000)
      zipUp('.Main a#join-discord', 2000)
      setTimeout(() => {
        this.setState({ linkBobble: true })
      }, 2000)
    }, 2500)
  }

  // event handlers
  mouseOverLogo() {
    if (this.state.logoBobble) {
      bobble('.Main img#logo', 3000)
    }
  }
  mouseOverLink() {
    if (this.state.linkBobble) {
      bobble('.Main a#join-discord', 1500)
    }
  }
  clickLogo() {
    bobble('.Main img#logo', 1000)
  }
  clickLink() {
    bobble('.Main a#join-discord', 800)
  }


  render() {
    return (
      <div className="Main">
        <div id="Main-Body">
          <div id="title">
            <p id="title">
              credDAO
            </p>
          </div>
          <img
            id="logo"
            src={logo}
            alt="logo"
            onMouseOver={this.mouseOverLogo}
            onClick={this.clickLogo}
          />

          <div id="description">
            <p id="description">
              <span>A community-driven blockchain project who seeks to connect & empower artists, specialists, professionals, & audiences. Built on the Solana blockchain.</span>
            </p>
            <a
              id="join-discord"
              href="https://discord.gg/uQnCHDy7bP"
              target="_blank"
              onMouseOver={this.mouseOverLink}
              onClick={this.clickLink}
            >
              Join our Discord
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Main

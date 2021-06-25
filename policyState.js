// This component implements the Policies status UI with a view that summarizes the compliance 
// state for a given policy. 

import React, { Component } from 'react'
import { SocialIcons } from './'
import { Col, Grid } from 'react-bootstrap'

export default class Footer extends Component {
  static propTypes = {}
  static defaultProps = {
    socials: {
      github: 'https://github.com/github',
      discord: 'https://discord.gg/wEzHJku',
      twitter: 'https://twitter.com/github'
    }
  }
  
  render() {
    const { socials } = this.props
    return (
      <footer className="Footer">
        <Grid>
          <Col sm={4} xs={3} className="vcenter">
            <SocialIcons className="socials" entity={socials} />
          </Col>
          <Col sm={4} xs={5} className="text-center vcenter">
            GitHub
          </Col>
          <Col sm={4} xs={4} className="vcenter">

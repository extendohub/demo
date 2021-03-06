// This component implements the Policies status UI with a view that summarizes the compliance 
// state for a given policy. 

// ```application/figma
// https://figma.com/file/32knfBV3XlaUCvNR6YfkiA?node-id=1542:375
// ```

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
          </Col>
          <Col sm={4} xs={4} className="vcenter">
            <div className="pull-right right">
              <a href="https://docs.github.com/legal/terms" target="_blank" rel="noopener noreferrer">
                Terms of use
              </a>{' '}
              <span>| </span>
              <a href="https://docs.github.io/legal/privacy" target="_blank" rel="noopener noreferrer">
                Privacy policy
              </a>{' '}
              <span>| </span>
              <a href="https://docs.github.io/legal/NOTICES">Notices</a>
            </div>
          </Col>
        </Grid>
      </footer>
    )
  }
}

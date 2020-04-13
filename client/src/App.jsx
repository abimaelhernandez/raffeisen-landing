import { IntlProvider, FormattedMessage } from 'react-intl'
import React, { Component } from 'react'
import Navbar from './components/Navigation'
import './components/sass/mains.scss'
import projectBody from './LangData'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      locale: 'en',
      name: '',
      messages: projectBody
    }
  }

  handleSpanish = (e) => {
    e.preventDefault()
    this.setState({ locale : 'es'})
    console.log('in Change :', this.state)
  }

  handleEnglish = (e) => {
    e.preventDefault()
    this.setState({ locale : 'en' })
    console.log('in Change EN :', this.state)
  }

  render(){
    const { locale, name, messages } = this.state
    return (
      <div>
        <button type="button" name="es" onClick={this.handleSpanish}>ES</button>
        <button type="button" name="es" onClick={this.handleEnglish}>EN</button>
        <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="greeting" values={ name } />
        <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
        <br />
          <FormattedMessage id="example" values={{ d: Date.now() }} />
        </p>
          <Navbar testProp={messages[locale]}/>
        </IntlProvider>
      </div>
    )
  }
}

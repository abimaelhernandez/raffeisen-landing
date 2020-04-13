import { IntlProvider, FormattedMessage } from 'react-intl'
import React, { Component } from 'react'
import Navbar from './components/Navigation'
import './components/sass/mains.scss'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      locale: 'en',
      name: '',
      messages: {
        en: {
          greeting: `Hello ! How are you?`,
          time: 'The time is {t, time, short}.',
          date: 'The date is {d, date}.',
          example: 'Example'
        },
        es: {
          greeting: '¡Hola! ¿Cómo estás? somos 24',
          time: 'La hora es {t, time, short}.',
          date: 'La fecha es {d, date}.',
          example: 'ejemplo'
        }
      }
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

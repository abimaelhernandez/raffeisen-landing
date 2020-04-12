/*
import React, { Component } from 'react'
import NavBar from './components/Navigation'
import Carousela from './components/Carousel'
import Inter from './components/Internalization'
import PageFooter from './components/Footer'

import './components/sass/mains.scss'

export default class App extends Component {
  render() {
    return (
      <div className="parent-container">
        <NavBar/>
        <Carousela/>
        <Inter/>
        <PageFooter/>
      </div>
    )
  }
}
*/

import React, { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'
import NavBar from './components/Navigation'
import './components/sass/mains.scss'

const projectBody = {
  messages: {
    en: {
      greeting: 'Hello {name}! How are you?'
    },
    es: {
      greeting: '¡Hola {name}! ¿Cómo estás? somos 24'
    }
  }
}

const App = () => {
  
  const [something] = useState({name: 'Abimael2'})

  const [name] = useState('Javier')

  const [locale, setLocale] = useState('en')

  const handleSelect = e => {
    setLocale(e.target.value)
  }

  return (
    <div  className="parent-container">
      <select onChange={handleSelect} defaultValue={locale}>
        {['en', 'es'].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={projectBody.messages[locale]}>
      <NavBar test={something}/>
        <p>
          <FormattedMessage id='greeting' values={{ name }} />
        </p>
      </IntlProvider>
    </div>
  )
}

export  default App

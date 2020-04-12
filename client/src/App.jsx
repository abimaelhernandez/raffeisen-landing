// import React, { Component } from 'react'
// import { IntlProvider, FormattedMessage } from 'react-intl'
// import NavBar from './components/Navigation'
// // import Carousela from './components/Carousel'
// // import Inter from './components/Internalization'
// // import PageFooter from './components/Footer'
//
// import './components/sass/mains.scss'
//
// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       locale: '',
//       setLocale: ''
//     }
//   }
//
//   handleSelect = (e) => {
//     this.setLocale(e.target.value)
//   }
//
//   render() {
//     return (
//       <div className="parent-container">
//         <select onChange={this.state.handleSelect} defaultValue={this.state.locale}>
//           {['en', 'es'].map(l => (
//             <option key={l}>{l}</option>
//           ))}
//         </select>
//         <IntlProvider locale={locale} messages={this.projectBody.messages[this.locale]}>
//         <NavBar test={something}/>
//           <p>
//             <FormattedMessage id='greeting' values={{ name }} />
//           </p>
//           <NavBar/>
//         </IntlProvider>
//       </div>
//     )
//   }
// }

import { IntlProvider, FormattedMessage } from 'react-intl'
import React, { Component } from 'react'
import Navbar from './components/Navigation'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      locale: 'en',
      name: '',
      messages : {
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

  handleChange = (event) => {
    console.log('in Change :', event)
    // this.setState({ name: e.target.value})
  }

  handleSelect = (e) => {
    console.log('in SELECT', e.target)
    // this.setState({ locale: e.target.value })
    // setName(e.target.value)
  }

  keyPress = (e) => {
     if(e.keyCode === 'enter'){
        console.log('value', e.target.value)
        // put the login here
     }
  }

  render(){
    const { locale, name, messages } = this.state
    return (
      <div>
        <button type="button" name="es" onClick={this.handleChange.bind(this)}>click</button>
        <select onChange={this.handleSelect}
          defaultValue={locale}>
          {['en', 'es'].map(l => (
          <option key={l}>{l}</option>
        ))}
        </select>

        <IntlProvider locale={locale} messages={messages[locale]}>
        <p>
          <FormattedMessage id="greeting" values={ name } />
        <br />
          <FormattedMessage id="time" values={{ t: Date.now() }} />
        <br />
          <FormattedMessage id="date" values={{ d: Date.now() }} />
        </p>
          <Navbar/>
        </IntlProvider>
      </div>
    )
  }
}

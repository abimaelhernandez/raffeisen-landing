import React, { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'

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

function Inter() {
  const [name] = useState('Javier')

  const [locale, setLocale] = useState('en')

  const handleSelect = e => {
    setLocale(e.target.value)
  }

  return (
    <div>
      <select onChange={handleSelect} defaultValue={locale}>
        {['en', 'es'].map(l => (
          <option key={l}>{l}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={projectBody.messages[locale]}>
        <p>
          <FormattedMessage id='greeting' values={{ name }} />
        </p>
      </IntlProvider>
    </div>
  )
}

export default Inter
import React, { useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next';

const Internationalization = props => {
  useEffect(() => {
    const lang = localStorage.getItem('setLang')
    handleSwitchLang(lang)
  }, [])
  const { t, i18n } = useTranslation()

  const handleSwitchLang = lng => {
    i18n.changeLanguage(lng)
    localStorage.setItem('setLang', lng)
  }

  const numbers = Array.from({length: 33}, (_, i) => i + 1)

  const date = new Date()
  const count = 123.2222
  const renderLocaleDate = locale => `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(locale).format(count)}`

  return (
    <div>
      <p>USA: {renderLocaleDate('en-US')}</p>
      <p>PL: {renderLocaleDate('pl-PL')}</p>
      <button type="button" onClick={() => handleSwitchLang('pl')}>
        pl
      </button>
      <button type="button" onClick={() => handleSwitchLang('en')}>
        en
      </button>
      <h1>{t('title')}</h1>
      <br></br>
      <br></br>
      <br></br>
      <p>Default value: {t('nieMaTego', 'not found 404')}</p>
      <p>Fallback value: {t('onlyEnglish')}</p>
      <p>Bold text: <Trans i18nKey="boldText">See the <strong>description</strong> below.</Trans></p>
      <br></br>
      <br></br>
      <br></br>
      {numbers.map(number => {
        return (
          <>
            <p>{t('computers.computer', { count: number , text: 'elo'})}</p>
            <hr />
          </>
        )
      })}
    </div>
  )
}

export default Internationalization

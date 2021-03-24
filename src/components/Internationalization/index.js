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

  return (
    <div>
      <button type="button" onClick={() => handleSwitchLang('pl')}>
        pl
      </button>
      <button type="button" onClick={() => handleSwitchLang('en')}>
        en
      </button>
      <h1>{t('title')}</h1>
      <Trans i18nKey="boldText">See the <strong>description</strong> below.</Trans>
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

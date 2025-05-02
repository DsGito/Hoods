import { useState, useEffect, useRef } from 'react'
import { Button } from '../ui/button'
import {
  Accessibility,
  Sun,
  Moon,
  Minus,
  Plus,
  RotateCcw,
  MousePointer,
  Link2,
  Type as TextIcon,
  Speech,
  Eye,
  X,
  ArrowLeft,
  Pause,
  Play,
  Volume2
} from 'lucide-react'

interface AccessibilitySettings {
  fontSize: number;
  contrast: 'normal' | 'high' | 'dark' | 'light' | 'colorblind';
  cursor: 'default' | 'large';
  linkHighlight: boolean;
  dyslexicFont: boolean;
  lineSpacing: boolean;
  readingGuide: boolean;
  textToSpeech: boolean;
  animations: boolean;
  reduceMotion: boolean;
}

// תיאור סרגל כלים של ה-ARIA
const ariaLabels = {
  widget: "תפריט נגישות",
  openButton: "פתח הגדרות נגישות",
  closeButton: "סגור הגדרות נגישות",
  resetButton: "איפוס כל הגדרות הנגישות",
  increaseText: "הגדל גודל טקסט",
  decreaseText: "הקטן גודל טקסט",
  contrastToggle: "שנה ניגודיות",
  cursorToggle: "שנה גודל סמן",
  linkToggle: "הפעל/בטל הדגשת קישורים",
  dyslexiaToggle: "הפעל/בטל פונט לדיסלקציה",
  readingGuideToggle: "הפעל/בטל מדריך קריאה",
  textToSpeechToggle: "הפעל/בטל קריאת טקסט",
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const readingGuideRef = useRef<HTMLDivElement>(null)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [currentlyReading, setCurrentlyReading] = useState("")

  // הגדרות נגישות
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    contrast: 'normal',
    cursor: 'default',
    linkHighlight: false,
    dyslexicFont: false,
    lineSpacing: false,
    readingGuide: false,
    textToSpeech: false,
    animations: true,
    reduceMotion: false
  })

  // טוען הגדרות מהאחסון המקומי
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility-settings')
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings) as AccessibilitySettings
      setSettings(parsedSettings)
      applySettings(parsedSettings)
    }
  }, [])

  // שומר הגדרות כאשר הן משתנות
  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings))
  }, [settings])

  // סוגר את התפריט כאשר לוחצים מחוץ לרכיב
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // מדריך קריאה
  useEffect(() => {
    if (!settings.readingGuide) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!readingGuideRef.current) return

      readingGuideRef.current.style.top = `${e.clientY}px`
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [settings.readingGuide])

  // מחיל את כל ההגדרות
  const applySettings = (newSettings: AccessibilitySettings) => {
    // גודל פונט
    document.documentElement.style.fontSize = `${newSettings.fontSize}%`

    // ניגודיות
    document.documentElement.classList.remove('high-contrast', 'dark-mode', 'light-mode', 'colorblind-mode')
    if (newSettings.contrast !== 'normal') {
      switch (newSettings.contrast) {
        case 'high':
          document.documentElement.classList.add('high-contrast')
          break
        case 'dark':
          document.documentElement.classList.add('dark-mode')
          break
        case 'light':
          document.documentElement.classList.add('light-mode')
          break
        case 'colorblind':
          document.documentElement.classList.add('colorblind-mode')
          break
      }
    }

    // סמן
    document.documentElement.classList.toggle('large-cursor', newSettings.cursor === 'large')

    // הדגשת קישורים
    document.documentElement.classList.toggle('highlight-links', newSettings.linkHighlight)

    // פונט מותאם
    document.documentElement.classList.toggle('dyslexic-font', newSettings.dyslexicFont)

  }

  // פונקציות לשינוי הגדרות
  const updateSettings = (key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    applySettings(newSettings)
  }

  const increaseFontSize = () => {
    if (settings.fontSize < 200) {
      updateSettings('fontSize', settings.fontSize + 10)
    }
  }

  const decreaseFontSize = () => {
    if (settings.fontSize > 70) {
      updateSettings('fontSize', settings.fontSize - 10)
    }
  }

  const cycleContrast = () => {
    const contrastModes: AccessibilitySettings['contrast'][] = ['normal', 'high', 'dark', 'light', 'colorblind']
    const currentIndex = contrastModes.indexOf(settings.contrast)
    const nextIndex = (currentIndex + 1) % contrastModes.length
    updateSettings('contrast', contrastModes[nextIndex])
  }

  const getContrastText = () => {
    switch (settings.contrast) {
      case 'normal': return 'ניגודיות רגילה'
      case 'high': return 'ניגודיות גבוהה'
      case 'dark': return 'מצב כהה'
      case 'light': return 'מצב בהיר'
      case 'colorblind': return 'מצב עיוורון צבעים'
    }
  }

  const toggleCursor = () => {
    updateSettings('cursor', settings.cursor === 'default' ? 'large' : 'default')
  }

  const toggleLinkHighlight = () => {
    updateSettings('linkHighlight', !settings.linkHighlight)
  }

  const toggleDyslexicFont = () => {
    updateSettings('dyslexicFont', !settings.dyslexicFont)
  }

  const toggleReadingGuide = () => {
    updateSettings('readingGuide', !settings.readingGuide)
  }

  const toggleTextToSpeech = () => {
    if (settings.textToSpeech) {
      window.speechSynthesis?.cancel()
      setIsSpeaking(false)
    }
    updateSettings('textToSpeech', !settings.textToSpeech)
  }

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      fontSize: 100,
      contrast: 'normal',
      cursor: 'default',
      linkHighlight: false,
      dyslexicFont: false,
      lineSpacing: false,
      readingGuide: false,
      textToSpeech: false,
      animations: true,
      reduceMotion: false
    }

    setSettings(defaultSettings)
    applySettings(defaultSettings)

    if (isSpeaking) {
      window.speechSynthesis?.cancel()
      setIsSpeaking(false)
    }
  }

  // חיטוט והפעלת קריאת טקסט
  useEffect(() => {
    if (settings.textToSpeech) {
      // נוסיף מאזינים לאלמנטים כדי לאפשר קריאה בעת הצבעה
      const addHoverListeners = () => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
        const paragraphs = document.querySelectorAll('p')
        const links = document.querySelectorAll('a')
        const buttons = document.querySelectorAll('button')

        const elements = [...headings, ...paragraphs, ...links, ...buttons]

        elements.forEach(element => {
          element.addEventListener('mouseover', handleElementHover)
        })

        return () => {
          elements.forEach(element => {
            element.removeEventListener('mouseover', handleElementHover)
          })
        }
      }

      const cleanupListeners = addHoverListeners()

      return () => {
        cleanupListeners()
        window.speechSynthesis?.cancel()
        setIsSpeaking(false)
      }
    }
  }, [settings.textToSpeech])

  const handleElementHover = (e: Event) => {
    if (!settings.textToSpeech || isSpeaking) return

    const element = e.target as HTMLElement
    const text = element.textContent || ''

    if (text.trim() !== '') {
      speakText(text)
      setCurrentlyReading(text.substring(0, 60) + (text.length > 60 ? '...' : ''))
    }
  }

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'he-IL'

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => {
        setIsSpeaking(false)
        setCurrentlyReading('')
      }

      window.speechSynthesis.speak(utterance)
    }
  }

  const pauseResumeReading = () => {
    if (isSpeaking) {
      window.speechSynthesis?.pause()
      setIsSpeaking(false)
    } else {
      window.speechSynthesis?.resume()
      setIsSpeaking(true)
    }
  }

  const stopReading = () => {
    window.speechSynthesis?.cancel()
    setIsSpeaking(false)
    setCurrentlyReading('')
  }

  return (
    <>
      {/* מדריך קריאה */}
      {settings.readingGuide && (
        <div
          ref={readingGuideRef}
          className="fixed left-0 right-0 h-8 bg-yellow-200 opacity-30 pointer-events-none z-50"
          style={{ top: 0 }}
          aria-hidden="true"
        />
      )}

      {/* תפריט טקסט לדיבור */}
      {settings.textToSpeech && currentlyReading && (
        <div className="fixed bottom-24 right-2 bg-white rounded-lg shadow-lg p-4 z-50 max-w-xs">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">מקריא טקסט</span>
            <Button variant="ghost" size="sm" onClick={stopReading} aria-label="הפסק הקראה">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm mb-2 rtl line-clamp-2">{currentlyReading}</p>
          <div className="flex justify-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={pauseResumeReading}
              aria-label={isSpeaking ? "השהה הקראה" : "המשך הקראה"}
            >
              {isSpeaking ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={stopReading}
              aria-label="הפסק הקראה"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* רכיב הנגישות הראשי */}
      <div
        id="accessibility-widget"
        ref={widgetRef}
        className="fixed bottom-2 right-2 z-50"
        role="region"
        aria-label={ariaLabels.widget}
      >
        <div className="relative">
          {/* תפריט נגישות */}
          <div
            className={`absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 rtl ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
              }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-title"
          >
            <div className="space-y-4 min-w-[300px]">
              <div className="flex justify-between items-center">
                <h3 id="accessibility-title" className="font-bold text-lg">הגדרות נגישות</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabels.closeButton}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="border-t pt-4">
                {/* גודל טקסט */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium flex items-center">
                    <TextIcon className="h-4 w-4 ml-2" /> גודל טקסט
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={decreaseFontSize}
                      disabled={settings.fontSize <= 70}
                      aria-label={ariaLabels.decreaseText}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center px-3 bg-gray-100 rounded">{settings.fontSize}%</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={increaseFontSize}
                      disabled={settings.fontSize >= 200}
                      aria-label={ariaLabels.increaseText}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* ניגודיות */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium flex items-center">
                    <Eye className="h-4 w-4 ml-2" /> תצוגה וניגודיות
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={cycleContrast}
                    className="w-full justify-start"
                    aria-label={ariaLabels.contrastToggle}
                  >
                    {settings.contrast === 'normal' && <Sun className="h-4 w-4 ml-2" />}
                    {settings.contrast === 'high' && <Moon className="h-4 w-4 ml-2" />}
                    {settings.contrast === 'dark' && <Moon className="h-4 w-4 ml-2" />}
                    {settings.contrast === 'light' && <Sun className="h-4 w-4 ml-2" />}
                    {settings.contrast === 'colorblind' && <Eye className="h-4 w-4 ml-2" />}
                    {getContrastText()}
                  </Button>
                </div>

                {/* תמיכה בקריאה */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium flex items-center">
                    <Speech className="h-4 w-4 ml-2" /> תמיכה בקריאה
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={settings.dyslexicFont ? "default" : "outline"}
                      size="sm"
                      onClick={toggleDyslexicFont}
                      className="justify-start"
                      aria-label={ariaLabels.dyslexiaToggle}
                      aria-pressed={settings.dyslexicFont}
                    >
                      <TextIcon className="h-4 w-4 ml-2" />
                      פונט מותאם
                    </Button>

                    <Button
                      variant={settings.readingGuide ? "default" : "outline"}
                      size="sm"
                      onClick={toggleReadingGuide}
                      className="justify-start"
                      aria-label={ariaLabels.readingGuideToggle}
                      aria-pressed={settings.readingGuide}
                    >
                      <ArrowLeft className="h-4 w-4 ml-2" />
                      מדריך קריאה
                    </Button>
                    <Button
                      variant={settings.textToSpeech ? "default" : "outline"}
                      size="sm"
                      onClick={toggleTextToSpeech}
                      className="justify-start"
                      aria-label={ariaLabels.textToSpeechToggle}
                      aria-pressed={settings.textToSpeech}
                    >
                      <Volume2 className="h-4 w-4 ml-2" />
                      הקראת טקסט
                    </Button>
                  </div>
                </div>

                {/* ניווט ואינטראקציה */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium flex items-center">
                    <MousePointer className="h-4 w-4 ml-2" /> ניווט ואינטראקציה
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={settings.cursor === 'large' ? "default" : "outline"}
                      size="sm"
                      onClick={toggleCursor}
                      className="justify-start"
                      aria-label={ariaLabels.cursorToggle}
                      aria-pressed={settings.cursor === 'large'}
                    >
                      <MousePointer className="h-4 w-4 ml-2" />
                      סמן עכבר מוגדל
                    </Button>
                    <Button
                      variant={settings.linkHighlight ? "default" : "outline"}
                      size="sm"
                      onClick={toggleLinkHighlight}
                      className="justify-start"
                      aria-label={ariaLabels.linkToggle}
                      aria-pressed={settings.linkHighlight}
                    >
                      <Link2 className="h-4 w-4 ml-2" />
                      הדגשת קישורים
                    </Button>
                  </div>
                </div>

                {/* איפוס הגדרות */}
                <Button
                  variant="destructive"
                  onClick={resetSettings}
                  className="w-full mt-2"
                  aria-label={ariaLabels.resetButton}
                >
                  <RotateCcw className="h-4 w-4 ml-2" /> איפוס כל ההגדרות
                </Button>
              </div>
            </div>
          </div>

          {/* כפתור הנגישות */}
          <Button
            size="lg"
            className="rounded-full shadow-lg bg-primary/80 hover:bg-primary border-2 border-white transition-all duration-300 hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={ariaLabels.openButton}
            aria-expanded={isOpen}
            aria-controls="accessibility-widget-panel"
          >
            <Accessibility className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default AccessibilityWidget
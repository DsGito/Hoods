import { useState, useEffect } from 'react'
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
  AlignJustify
} from 'lucide-react'

const AccessibilityWidget = () => {
  // ניהול מצב הרכיב
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [contrast, setContrast] = useState('normal')
  const [cursor, setCursor] = useState('default')
  const [linkHighlight, setLinkHighlight] = useState(false)
  const [dyslexicFont, setDyslexicFont] = useState(false)
  const [lineSpacing, setLineSpacing] = useState(false)

  // אוטומטית מסתיר את התפריט אם לוחצים מחוץ לרכיב
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const widget = document.getElementById('accessibility-widget');
      if (widget && !widget.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 70) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'high' : 'normal'
    setContrast(newContrast)
    document.documentElement.classList.toggle('high-contrast')
  }

  const toggleCursor = () => {
    const newCursor = cursor === 'default' ? 'large' : 'default'
    setCursor(newCursor)
    document.documentElement.classList.toggle('large-cursor')
  }

  const toggleLinkHighlight = () => {
    setLinkHighlight(!linkHighlight)
    document.documentElement.classList.toggle('highlight-links')
  }

  const toggleDyslexicFont = () => {
    setDyslexicFont(!dyslexicFont)
    document.documentElement.classList.toggle('dyslexic-font')
  }

  const toggleLineSpacing = () => {
    setLineSpacing(!lineSpacing)
    document.documentElement.classList.toggle('increased-spacing')
  }

  const resetSettings = () => {
    setFontSize(100)
    setContrast('normal')
    setCursor('default')
    setLinkHighlight(false)
    setDyslexicFont(false)
    setLineSpacing(false)
    
    document.documentElement.style.fontSize = '100%'
    document.documentElement.classList.remove('high-contrast')
    document.documentElement.classList.remove('large-cursor')
    document.documentElement.classList.remove('highlight-links')
    document.documentElement.classList.remove('dyslexic-font')
    document.documentElement.classList.remove('increased-spacing')
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div 
      id="accessibility-widget"
      className="fixed bottom-2 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* תפריט נגישות */}
        <div
          className={`absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
          }`}
        >
          <div className="space-y-4 min-w-[280px]">
            <h3 className="font-bold text-lg mb-4">הגדרות נגישות</h3>
            
            {/* גודל טקסט */}
            <div className="space-y-2">
              <p className="text-sm font-medium">גודל טקסט</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 70}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="flex items-center px-3 bg-gray-100 rounded">{fontSize}%</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* ניגודיות */}
            <div className="space-y-2">
              <p className="text-sm font-medium">ניגודיות</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleContrast}
                className="w-full"
              >
                {contrast === 'normal' ? <Moon className="h-4 w-4 ml-2" /> : <Sun className="h-4 w-4 ml-2" />}
                {contrast === 'normal' ? 'ניגודיות גבוהה' : 'ניגודיות רגילה'}
              </Button>
            </div>

            {/* סמן מוגדל */}
            <div className="space-y-2">
              <p className="text-sm font-medium">סמן עכבר</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleCursor}
                className="w-full"
              >
                <MousePointer className="h-4 w-4 ml-2" />
                {cursor === 'default' ? 'סמן מוגדל' : 'סמן רגיל'}
              </Button>
            </div>

            {/* הדגשת קישורים */}
            <div className="space-y-2">
              <p className="text-sm font-medium">הדגשת קישורים</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLinkHighlight}
                className="w-full"
              >
                <Link2 className="h-4 w-4 ml-2" />
                {linkHighlight ? 'ביטול הדגשה' : 'הדגשת קישורים'}
              </Button>
            </div>

            {/* פונט לדיסלקטים */}
            <div className="space-y-2">
              <p className="text-sm font-medium">פונט מותאם דיסלקציה</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDyslexicFont}
                className="w-full"
              >
                <TextIcon className="h-4 w-4 ml-2" />
                {dyslexicFont ? 'פונט רגיל' : 'פונט מותאם'}
              </Button>
            </div>

            {/* ריווח שורות */}
            <div className="space-y-2">
              <p className="text-sm font-medium">ריווח שורות</p>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLineSpacing}
                className="w-full"
              >
                <AlignJustify className="h-4 w-4 ml-2" />
                {lineSpacing ? 'ריווח רגיל' : 'ריווח מוגדל'}
              </Button>
            </div>

            {/* איפוס הגדרות */}
            <Button onClick={resetSettings}  className="w-full" >
              <RotateCcw className="h-4 w-4 ml-2" /> איפוס הגדרות </Button>
          </div>
        </div>

        {/* כפתור פתיחה - הצגת אייקון בחלק הבולט החוצה */}
        <div className="relative">
          <Button
            size="lg"
            className={`drag-handle rounded-full shadow-lg bg-primary/80 hover:bg-primary border-2 border-white transition-all duration-300 hover:scale-105 cursor-pointer transform ${
              isHovered || isOpen ? 'translate-x-0' : 'translate-x-2/3'
            } flex items-center justify-start`}
            onClick={handleClick}
          >
            <div className="absolute left-0 ml-1">
            <Accessibility className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityWidget
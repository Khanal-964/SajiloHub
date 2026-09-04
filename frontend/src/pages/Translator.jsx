// ============================================
// Translator Page — In-app translation
// Uses Google Cloud Translation API via backend proxy
// ============================================

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SakuraPetals from '../components/SakuraPetals';
import { translateText, getSupportedLanguages } from '../services/translateService';
import './Translator.css';

// Languages pinned at the top of selectors for quick access
const FAVORITE_LANG_CODES = ['en', 'ja', 'ne'];
const MAX_CHARS = 5000;

// Fallback language list in case the API is not configured
const FALLBACK_LANGUAGES = [
  { language: 'en', name: 'English' },
  { language: 'ja', name: 'Japanese' },
  { language: 'ne', name: 'Nepali' },
  { language: 'hi', name: 'Hindi' },
  { language: 'ko', name: 'Korean' },
  { language: 'zh', name: 'Chinese (Simplified)' },
  { language: 'fr', name: 'French' },
  { language: 'de', name: 'German' },
  { language: 'es', name: 'Spanish' },
  { language: 'pt', name: 'Portuguese' },
  { language: 'ru', name: 'Russian' },
  { language: 'ar', name: 'Arabic' },
  { language: 'th', name: 'Thai' },
  { language: 'vi', name: 'Vietnamese' },
  { language: 'id', name: 'Indonesian' },
  { language: 'it', name: 'Italian' },
  { language: 'tr', name: 'Turkish' },
];

const Translator = () => {
  // --- State ---
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('auto');
  const [targetLang, setTargetLang] = useState('ja');
  const [languages, setLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [detectedLang, setDetectedLang] = useState('');
  const [error, setError] = useState('');
  const [isSpeakingSource, setIsSpeakingSource] = useState(false);
  const [isSpeakingTarget, setIsSpeakingTarget] = useState(false);

  const debounceRef = useRef(null);

  // --- Load supported languages on mount ---
  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const data = await getSupportedLanguages();
        setLanguages(data.languages || []);
      } catch (err) {
        console.warn('Could not load languages from API, using fallback list:', err.message);
        setLanguages(FALLBACK_LANGUAGES);
      }
    };
    loadLanguages();
  }, []);

  // --- Translate function ---
  const doTranslate = useCallback(async (text, src, tgt) => {
    if (!text.trim()) {
      setTranslatedText('');
      setDetectedLang('');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const data = await translateText(text, src, tgt);
      setTranslatedText(data.translatedText || '');
      if (data.detectedSourceLanguage) {
        setDetectedLang(data.detectedSourceLanguage);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Translation failed. Please try again.';
      setError(msg);
      setTranslatedText('');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // --- Auto-translate with debounce ---
  useEffect(() => {
    if (!sourceText.trim()) {
      setTranslatedText('');
      setDetectedLang('');
      setError('');
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      doTranslate(sourceText, sourceLang, targetLang);
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [sourceText, sourceLang, targetLang, doTranslate]);

  // --- Handlers ---
  const handleTranslateClick = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    doTranslate(sourceText, sourceLang, targetLang);
  };

  const handleSwapLanguages = () => {
    if (sourceLang === 'auto') return;

    const prevSourceLang = sourceLang;
    const prevTargetLang = targetLang;
    const prevSourceText = sourceText;
    const prevTranslatedText = translatedText;

    setSourceLang(prevTargetLang);
    setTargetLang(prevSourceLang);
    setSourceText(prevTranslatedText);
    setTranslatedText(prevSourceText);
    setDetectedLang('');
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
    setDetectedLang('');
    setError('');
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeakingSource(false);
    setIsSpeakingTarget(false);
  };

  const handleCopy = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = translatedText;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSpeak = (text, lang, type) => {
    if (!text || !window.speechSynthesis) return;

    // If already speaking this type, stop it
    if ((type === 'source' && isSpeakingSource) || (type === 'target' && isSpeakingTarget)) {
      window.speechSynthesis.cancel();
      setIsSpeakingSource(false);
      setIsSpeakingTarget(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'auto' ? (detectedLang || 'en') : lang;
    utterance.rate = 0.9;

    utterance.onstart = () => {
      if (type === 'source') setIsSpeakingSource(true);
      else setIsSpeakingTarget(true);
    };
    utterance.onend = () => {
      setIsSpeakingSource(false);
      setIsSpeakingTarget(false);
    };
    utterance.onerror = () => {
      setIsSpeakingSource(false);
      setIsSpeakingTarget(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSourceTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= MAX_CHARS) {
      setSourceText(text);
    }
  };

  // --- Organized languages: favorites first, then alphabetical ---
  const organizedLanguages = useMemo(() => {
    if (!languages.length) return { favorites: [], others: [] };

    const favorites = [];
    const others = [];

    languages.forEach((lang) => {
      if (FAVORITE_LANG_CODES.includes(lang.language)) {
        favorites.push(lang);
      } else {
        others.push(lang);
      }
    });

    // Sort favorites in the predefined order
    favorites.sort(
      (a, b) =>
        FAVORITE_LANG_CODES.indexOf(a.language) - FAVORITE_LANG_CODES.indexOf(b.language)
    );

    // Sort others alphabetically by display name
    others.sort((a, b) => (a.name || a.language).localeCompare(b.name || b.language));

    return { favorites, others };
  }, [languages]);

  const getLanguageName = (code) => {
    if (code === 'auto') return 'Auto Detect';
    const lang = languages.find((l) => l.language === code);
    return lang ? lang.name || lang.language : code;
  };

  // --- Character counter class ---
  const charCounterClass = () => {
    const ratio = sourceText.length / MAX_CHARS;
    if (ratio >= 1) return 'char-counter at-limit';
    if (ratio >= 0.9) return 'char-counter near-limit';
    return 'char-counter';
  };

  // --- Render ---
  return (
    <>
      <SakuraPetals />
      <Navbar />
      <main className="translator-page">
        {/* ---- Header ---- */}
        <div className="translator-header">
          <div className="translator-header-content">
            <span className="translator-icon" role="img" aria-label="globe">🌐</span>
            <h1 className="translator-title">
              SajiloHub <span className="text-gradient">Translator</span>
            </h1>
            <p className="translator-subtitle">
              Translate text between 100+ languages instantly
            </p>
          </div>
        </div>

        {/* ---- Main Translation Card ---- */}
        <div className="translator-container">
          <div className="translator-card">
            {/* Language Selector Bar */}
            <div className="language-bar">
              <div className="language-selector">
                <select
                  id="source-lang-select"
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="lang-select"
                  aria-label="Source language"
                >
                  <option value="auto">
                    🔍 Auto Detect{detectedLang ? ` (${getLanguageName(detectedLang)})` : ''}
                  </option>
                  {organizedLanguages.favorites.length > 0 && (
                    <optgroup label="★ Favorites">
                      {organizedLanguages.favorites.map((lang) => (
                        <option key={`src-fav-${lang.language}`} value={lang.language}>
                          {lang.name || lang.language}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {organizedLanguages.others.length > 0 && (
                    <optgroup label="All Languages">
                      {organizedLanguages.others.map((lang) => (
                        <option key={`src-${lang.language}`} value={lang.language}>
                          {lang.name || lang.language}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
              </div>

              <button
                className={`swap-btn${sourceLang === 'auto' ? ' disabled' : ''}`}
                onClick={handleSwapLanguages}
                disabled={sourceLang === 'auto'}
                title={sourceLang === 'auto' ? 'Select a source language to swap' : 'Swap languages'}
                aria-label="Swap languages"
              >
                ⇄
              </button>

              <div className="language-selector">
                <select
                  id="target-lang-select"
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="lang-select"
                  aria-label="Target language"
                >
                  {organizedLanguages.favorites.length > 0 && (
                    <optgroup label="★ Favorites">
                      {organizedLanguages.favorites.map((lang) => (
                        <option key={`tgt-fav-${lang.language}`} value={lang.language}>
                          {lang.name || lang.language}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {organizedLanguages.others.length > 0 && (
                    <optgroup label="All Languages">
                      {organizedLanguages.others.map((lang) => (
                        <option key={`tgt-${lang.language}`} value={lang.language}>
                          {lang.name || lang.language}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </select>
              </div>
            </div>

            {/* Translation Panels */}
            <div className="translation-panels">
              {/* Source Panel */}
              <div className="panel source-panel">
                <textarea
                  id="source-text-input"
                  className="translation-textarea"
                  value={sourceText}
                  onChange={handleSourceTextChange}
                  placeholder="Enter text to translate..."
                  rows={8}
                  aria-label="Source text"
                />
                <div className="panel-actions">
                  <div className="panel-actions-left">
                    <button
                      className="action-btn"
                      onClick={() => handleSpeak(sourceText, sourceLang, 'source')}
                      disabled={!sourceText}
                      title={isSpeakingSource ? 'Stop speaking' : 'Listen to source text'}
                      aria-label="Text to speech for source"
                    >
                      {isSpeakingSource ? '⏹️ Stop' : '🔊 Listen'}
                    </button>
                    {sourceText && (
                      <button
                        className="action-btn clear-btn"
                        onClick={handleClear}
                        title="Clear all text"
                      >
                        ✕ Clear
                      </button>
                    )}
                  </div>
                  <span className={charCounterClass()}>
                    {sourceText.length.toLocaleString()} / {MAX_CHARS.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Target Panel */}
              <div className="panel target-panel">
                <div className="output-area" id="translation-output">
                  {isLoading ? (
                    <div className="loading-shimmer">
                      <div className="shimmer-line" />
                      <div className="shimmer-line short" />
                      <div className="shimmer-line medium" />
                    </div>
                  ) : (
                    <p className={translatedText ? '' : 'placeholder-text'}>
                      {translatedText || 'Translation will appear here...'}
                    </p>
                  )}
                </div>
                <div className="panel-actions">
                  <div className="panel-actions-left">
                    <button
                      className="action-btn"
                      onClick={() => handleSpeak(translatedText, targetLang, 'target')}
                      disabled={!translatedText}
                      title={isSpeakingTarget ? 'Stop speaking' : 'Listen to translation'}
                      aria-label="Text to speech for translation"
                    >
                      {isSpeakingTarget ? '⏹️ Stop' : '🔊 Listen'}
                    </button>
                  </div>
                  <button
                    className={`action-btn copy-btn${isCopied ? ' copied' : ''}`}
                    onClick={handleCopy}
                    disabled={!translatedText}
                    title="Copy translation to clipboard"
                  >
                    {isCopied ? '✓ Copied!' : '📋 Copy'}
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="translator-error" role="alert">
                ⚠ {error}
              </div>
            )}

            {/* Translate Button */}
            <button
              id="translate-button"
              className="translate-btn"
              onClick={handleTranslateClick}
              disabled={!sourceText.trim() || isLoading}
            >
              {isLoading ? <span className="spinner" /> : <>🌸 Translate</>}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Translator;

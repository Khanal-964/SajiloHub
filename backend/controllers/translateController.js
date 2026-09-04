// ============================================
// Translate Controller
// Uses the free Google Translate endpoint
// No API key required — works out of the box
// ============================================

const GOOGLE_TRANSLATE_URL = 'https://translate.googleapis.com/translate_a/single';

// --------------------------------------------------
// Comprehensive list of supported languages
// (Google Translate supported languages as of 2024)
// --------------------------------------------------
const SUPPORTED_LANGUAGES = [
  { language: 'af', name: 'Afrikaans' },
  { language: 'sq', name: 'Albanian' },
  { language: 'am', name: 'Amharic' },
  { language: 'ar', name: 'Arabic' },
  { language: 'hy', name: 'Armenian' },
  { language: 'az', name: 'Azerbaijani' },
  { language: 'eu', name: 'Basque' },
  { language: 'be', name: 'Belarusian' },
  { language: 'bn', name: 'Bengali' },
  { language: 'bs', name: 'Bosnian' },
  { language: 'bg', name: 'Bulgarian' },
  { language: 'ca', name: 'Catalan' },
  { language: 'ceb', name: 'Cebuano' },
  { language: 'ny', name: 'Chichewa' },
  { language: 'zh', name: 'Chinese (Simplified)' },
  { language: 'zh-TW', name: 'Chinese (Traditional)' },
  { language: 'co', name: 'Corsican' },
  { language: 'hr', name: 'Croatian' },
  { language: 'cs', name: 'Czech' },
  { language: 'da', name: 'Danish' },
  { language: 'nl', name: 'Dutch' },
  { language: 'en', name: 'English' },
  { language: 'eo', name: 'Esperanto' },
  { language: 'et', name: 'Estonian' },
  { language: 'tl', name: 'Filipino' },
  { language: 'fi', name: 'Finnish' },
  { language: 'fr', name: 'French' },
  { language: 'fy', name: 'Frisian' },
  { language: 'gl', name: 'Galician' },
  { language: 'ka', name: 'Georgian' },
  { language: 'de', name: 'German' },
  { language: 'el', name: 'Greek' },
  { language: 'gu', name: 'Gujarati' },
  { language: 'ht', name: 'Haitian Creole' },
  { language: 'ha', name: 'Hausa' },
  { language: 'haw', name: 'Hawaiian' },
  { language: 'he', name: 'Hebrew' },
  { language: 'hi', name: 'Hindi' },
  { language: 'hmn', name: 'Hmong' },
  { language: 'hu', name: 'Hungarian' },
  { language: 'is', name: 'Icelandic' },
  { language: 'ig', name: 'Igbo' },
  { language: 'id', name: 'Indonesian' },
  { language: 'ga', name: 'Irish' },
  { language: 'it', name: 'Italian' },
  { language: 'ja', name: 'Japanese' },
  { language: 'jv', name: 'Javanese' },
  { language: 'kn', name: 'Kannada' },
  { language: 'kk', name: 'Kazakh' },
  { language: 'km', name: 'Khmer' },
  { language: 'rw', name: 'Kinyarwanda' },
  { language: 'ko', name: 'Korean' },
  { language: 'ku', name: 'Kurdish (Kurmanji)' },
  { language: 'ky', name: 'Kyrgyz' },
  { language: 'lo', name: 'Lao' },
  { language: 'la', name: 'Latin' },
  { language: 'lv', name: 'Latvian' },
  { language: 'lt', name: 'Lithuanian' },
  { language: 'lb', name: 'Luxembourgish' },
  { language: 'mk', name: 'Macedonian' },
  { language: 'mg', name: 'Malagasy' },
  { language: 'ms', name: 'Malay' },
  { language: 'ml', name: 'Malayalam' },
  { language: 'mt', name: 'Maltese' },
  { language: 'mi', name: 'Maori' },
  { language: 'mr', name: 'Marathi' },
  { language: 'mn', name: 'Mongolian' },
  { language: 'my', name: 'Myanmar (Burmese)' },
  { language: 'ne', name: 'Nepali' },
  { language: 'no', name: 'Norwegian' },
  { language: 'or', name: 'Odia (Oriya)' },
  { language: 'ps', name: 'Pashto' },
  { language: 'fa', name: 'Persian' },
  { language: 'pl', name: 'Polish' },
  { language: 'pt', name: 'Portuguese' },
  { language: 'pa', name: 'Punjabi' },
  { language: 'ro', name: 'Romanian' },
  { language: 'ru', name: 'Russian' },
  { language: 'sm', name: 'Samoan' },
  { language: 'gd', name: 'Scots Gaelic' },
  { language: 'sr', name: 'Serbian' },
  { language: 'st', name: 'Sesotho' },
  { language: 'sn', name: 'Shona' },
  { language: 'sd', name: 'Sindhi' },
  { language: 'si', name: 'Sinhala' },
  { language: 'sk', name: 'Slovak' },
  { language: 'sl', name: 'Slovenian' },
  { language: 'so', name: 'Somali' },
  { language: 'es', name: 'Spanish' },
  { language: 'su', name: 'Sundanese' },
  { language: 'sw', name: 'Swahili' },
  { language: 'sv', name: 'Swedish' },
  { language: 'tg', name: 'Tajik' },
  { language: 'ta', name: 'Tamil' },
  { language: 'tt', name: 'Tatar' },
  { language: 'te', name: 'Telugu' },
  { language: 'th', name: 'Thai' },
  { language: 'tr', name: 'Turkish' },
  { language: 'tk', name: 'Turkmen' },
  { language: 'uk', name: 'Ukrainian' },
  { language: 'ur', name: 'Urdu' },
  { language: 'ug', name: 'Uyghur' },
  { language: 'uz', name: 'Uzbek' },
  { language: 'vi', name: 'Vietnamese' },
  { language: 'cy', name: 'Welsh' },
  { language: 'xh', name: 'Xhosa' },
  { language: 'yi', name: 'Yiddish' },
  { language: 'yo', name: 'Yoruba' },
  { language: 'zu', name: 'Zulu' },
];

// --------------------------------------------------
// POST /api/translate
// Translate text using free Google Translate endpoint
// --------------------------------------------------
exports.translate = async (req, res) => {
  try {
    const { text, source, target } = req.body;

    if (!text || !target) {
      return res.status(400).json({ message: 'Text and target language are required.' });
    }

    const params = new URLSearchParams({
      client: 'dict-chrome-ex',
      sl: source || 'auto',
      tl: target,
      dt: 't',
      q: text,
    });

    const response = await fetch(`${GOOGLE_TRANSLATE_URL}?${params}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      console.error('Google Translate response status:', response.status);
      return res.status(502).json({ message: 'Translation service temporarily unavailable. Please try again.' });
    }

    const data = await response.json();

    // Extract translated text from the nested array response
    // Format: [[["translated","original",null,null,score],...], null, "detected_lang", ...]
    let translatedText = '';
    if (data && data[0]) {
      translatedText = data[0]
        .filter((segment) => segment && segment[0])
        .map((segment) => segment[0])
        .join('');
    }

    // Detected source language is at index [2]
    const detectedSourceLanguage = data[2] || source || 'auto';

    return res.json({
      translatedText,
      detectedSourceLanguage,
    });
  } catch (error) {
    console.error('Translation error:', error);
    return res.status(500).json({ message: 'Translation failed. Please try again.' });
  }
};

// --------------------------------------------------
// GET /api/translate/languages
// Return all supported languages (hardcoded list)
// --------------------------------------------------
exports.getLanguages = async (req, res) => {
  try {
    return res.json({ languages: SUPPORTED_LANGUAGES });
  } catch (error) {
    console.error('Get languages error:', error);
    return res.status(500).json({ message: 'Failed to fetch supported languages.' });
  }
};

// --------------------------------------------------
// POST /api/translate/detect
// Detect language using free Google Translate endpoint
// --------------------------------------------------
exports.detect = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: 'Text is required for language detection.' });
    }

    // Use translate endpoint with sl=auto to detect language
    const params = new URLSearchParams({
      client: 'dict-chrome-ex',
      sl: 'auto',
      tl: 'en',
      dt: 't',
      q: text.substring(0, 200), // Only need a snippet for detection
    });

    const response = await fetch(`${GOOGLE_TRANSLATE_URL}?${params}`, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      return res.status(502).json({ message: 'Language detection service temporarily unavailable.' });
    }

    const data = await response.json();
    const detectedLanguage = data[2] || 'en';

    return res.json({
      detections: [[{ language: detectedLanguage, isReliable: true, confidence: 1 }]],
    });
  } catch (error) {
    console.error('Detect language error:', error);
    return res.status(500).json({ message: 'Language detection failed.' });
  }
};

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const levels = ['n5', 'n4', 'n3', 'n2', 'n1'];
const numTests = 5;

// Mock data dictionaries for procedural generation
const vocabDict = {
  n5: ['食べる', '飲む', '行く', '来る', '大きい', '小さい', '新しい', '古い', '車', '電車'],
  n4: ['準備', '経験', '都合', '案内', '複雑', '危険', '自由', '理由', '規則', '約束'],
  n3: ['豊富', '改善', '期待', '比較', '結局', '影響', '当然', '現象', '記憶', '努力'],
  n2: ['抽象的', '圧倒的', '矛盾', '貢献', '慎重', '極端', '傾向', '徹底的', '柔軟', '妥協'],
  n1: ['緻密', '頻繁', '顕著', '怠惰', '錯覚', '巧妙', '憤り', '喚起', '模索', '凝縮']
};

const kanjiDict = {
  n5: ['食', '飲', '行', '来', '大', '小', '新', '古', '車', '電'],
  n4: ['準', '経', '都', '案', '複', '危', '自', '理', '規', '約'],
  n3: ['豊', '改', '期', '比', '結', '影', '当', '現', '記', '努'],
  n2: ['抽', '圧', '矛', '貢', '慎', '極', '傾', '徹', '柔', '妥'],
  n1: ['緻', '頻', '顕', '怠', '錯', '巧', '憤', '喚', '模', '凝']
};

const grammarTemplates = {
  n5: ['〜は〜です', '〜ます', '〜ません', '〜ました', '〜から', '〜まで'],
  n4: ['〜てもいいですか', '〜なければなりません', '〜たことがあります', '〜つもりです'],
  n3: ['〜に対して', '〜にとって', '〜として', '〜ばかり', '〜おかげで'],
  n2: ['〜に違いない', '〜にほかならない', '〜ざるを得ない', '〜かねない'],
  n1: ['〜を余儀なくされる', '〜たるもの', '〜なりに', '〜とあって']
};

const readingPassages = {
  n5: "私は毎朝6時に起きます。朝ごはんを食べてから、学校へ行きます。学校は8時半から始まります。友達と一緒に勉強するのはとても楽しいです。",
  n4: "週末に友達と東京へ遊びに行きました。新幹線に乗るのは初めてだったので、とても興奮しました。富士山が見えた時は感動しました。",
  n3: "最近、地球温暖化についてのニュースをよく見かけます。私たちが日常生活の中でできる小さな工夫が、環境保護につながるのだと思います。",
  n2: "現代社会において、スマートフォンの普及は人々のコミュニケーションのあり方を劇的に変化させた。利便性が向上した一方で、対面での対話が減少しているという指摘もある。",
  n1: "哲学的な思索において、言語が果たす役割は極めて大きい。我々は言語というフィルターを通してのみ世界を認識し得るからであり、その意味で言語の限界は世界の限界に等しいと言える。"
};

// Helper to shuffle array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function generateOptions(correctAnswer, wrongOptions) {
  const options = [correctAnswer, ...shuffle(wrongOptions).slice(0, 3)];
  return shuffle(options);
}

// Ensure directory exists
const dataDir = path.join(__dirname, 'src', 'data', 'jlpt');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

levels.forEach(level => {
  const levelDir = path.join(dataDir, level);
  if (!fs.existsSync(levelDir)) fs.mkdirSync(levelDir);

  for (let t = 1; t <= numTests; t++) {
    const testData = {
      id: `${level}-test-${t}`,
      level: level.toUpperCase(),
      title: `JLPT ${level.toUpperCase()} Practice Test ${t}`,
      sections: {
        vocabulary: {
          timeLimit: level === 'n5' || level === 'n4' ? 25 : (level === 'n3' ? 30 : 35),
          questions: []
        },
        grammar: {
          timeLimit: level === 'n5' || level === 'n4' ? 25 : (level === 'n3' ? 40 : 45),
          questions: []
        },
        reading: {
          timeLimit: level === 'n5' || level === 'n4' ? 50 : (level === 'n3' ? 70 : 80),
          passages: []
        }
      }
    };

    // Generate Vocabulary Questions (15 per test)
    for (let i = 1; i <= 15; i++) {
      const vWord = vocabDict[level][(i + t) % vocabDict[level].length];
      const wrong = vocabDict[level].filter(w => w !== vWord);
      
      const isKanjiReading = i % 2 === 0;
      let questionText, correct, explanation;
      
      if (isKanjiReading) {
        questionText = `次の言葉の読み方として最もよいものを一つ選びなさい： ${vWord}`;
        correct = `${vWord}の読み`;
        explanation = `「${vWord}」 is the correct word.`;
      } else {
        questionText = `文の（　　）に入れるのに最もよいものを一つ選びなさい。\n彼女はとても（　　）人です。`;
        correct = vWord;
        explanation = `${vWord} fits best in this context.`;
      }
      
      const options = generateOptions(correct, wrong.map(w => w + (isKanjiReading ? 'の読み' : '')));
      
      testData.sections.vocabulary.questions.push({
        id: `v${i}`,
        type: isKanjiReading ? 'kanji-reading' : 'context',
        question: questionText,
        options: options,
        correctAnswer: options.indexOf(correct),
        explanation: explanation
      });
    }

    // Generate Grammar Questions (15 per test)
    for (let i = 1; i <= 15; i++) {
      const gPoint = grammarTemplates[level][(i + t) % grammarTemplates[level].length];
      const wrong = grammarTemplates[level].filter(w => w !== gPoint);
      
      const questionText = `次の文の（　　）に入れるのに最もよいものを一つ選びなさい。\nあしたは雨が降る（　　）。`;
      const options = generateOptions(gPoint, wrong);
      
      testData.sections.grammar.questions.push({
        id: `g${i}`,
        type: 'grammar-fill',
        question: questionText,
        options: options,
        correctAnswer: options.indexOf(gPoint),
        explanation: `The grammar point ${gPoint} is appropriate here.`
      });
    }

    // Generate Reading Passages (3 per test)
    for (let p = 1; p <= 3; p++) {
      const passage = {
        id: `p${p}`,
        text: readingPassages[level] + `\n\n(This is reading passage ${p} for test ${t})`,
        questions: []
      };

      for (let q = 1; q <= 3; q++) {
        const correct = `True statement ${q}`;
        const wrong = [`False statement A`, `False statement B`, `False statement C`];
        const options = generateOptions(correct, wrong);
        
        passage.questions.push({
          id: `r${p}-${q}`,
          type: 'reading-comprehension',
          question: `筆者がこの文章で一番言いたいことは何か。 (${q})`,
          options: options,
          correctAnswer: options.indexOf(correct),
          explanation: `Based on the text, ${correct} is the correct inference.`
        });
      }
      testData.sections.reading.passages.push(passage);
    }

    const filePath = path.join(levelDir, `test${t}.json`);
    fs.writeFileSync(filePath, JSON.stringify(testData, null, 2));
  }
});

console.log('Successfully generated 25 JLPT practice tests.');

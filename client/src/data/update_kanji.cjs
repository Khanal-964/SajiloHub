const fs = require('fs');

function generateLessons(kanjiDataStr) {
  const lessons = [];
  const lines = kanjiDataStr.trim().split('\n');
  let currentKanjiList = [];
  let lessonNum = 1;
  
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split('|');
    if (parts.length >= 4) {
      const char = parts[0];
      const meaning = parts[1];
      const on = parts[2];
      const kun = parts[3];
      const compWord = parts[4] || char + "字";
      const compRead = parts[5] || "じ";
      const compMean = parts[6] || meaning;
      
      currentKanjiList.push({
        character: char,
        meaning: meaning,
        onyomi: on,
        kunyomi: kun,
        strokeCount: 10,
        radical: char,
        strokeGuide: "1. Follow standard rules.",
        compounds: [
          { word: compWord, reading: compRead, meaning: compMean }
        ]
      });
      
      if (currentKanjiList.length === 20 || i === lines.length - 1) {
        lessons.push({
          lessonNum: lessonNum,
          title: `Lesson ${lessonNum}`,
          kanjiList: currentKanjiList
        });
        currentKanjiList = [];
        lessonNum++;
      }
    }
  }
  return lessons;
}

const n3Data = `
政|Politics|セイ|まつりごと|政治|せいじ|politics
治|Govern|ジ|なお.る|政治|せいじ|politics
経|Manage|ケイ|へ.る|経済|けいざい|economy
済|Finish|サイ|す.む|経済|けいざい|economy
歴|Curriculum|レキ|-|歴史|れきし|history
史|History|シ|-|歴史|れきし|history
育|Raise|イク|そだ.つ|教育|きょういく|education
化|Change|カ|ば.ける|文化|ぶんか|culture
理|Logic|リ|-|理由|りゆう|reason
科|Department|カ|-|科学|かがく|science
数|Number|スウ|かず|数学|すうがく|mathematics
医|Doctor|イ|-|医者|いしゃ|doctor
局|Office|キョク|-|郵便局|ゆうびんきょく|post office
役|Duty|ヤク|-|役割|やくわり|role
決|Decide|ケツ|き.める|決定|けってい|decision
勝|Win|ショウ|か.つ|優勝|ゆうしょう|championship
負|Lose|フ|ま.ける|勝負|しょうぶ|match
代|Substitute|ダイ|か.わる|時代|じだい|era
表|Surface|ヒョウ|おもて|発表|はっぴょう|presentation
第|No.|ダイ|-|第一|だいいち|first
全|Whole|ゼン|まった.く|全部|ぜんぶ|all
最|Most|サイ|もっと.も|最近|さいきん|recently
無|Nothing|ム,ブ|な.い|無理|むり|impossible
不|Not|フ,ブ|-|不安|ふあん|anxiety
非|Non-|ヒ|あら.ず|非常|ひじょう|emergency
的|Target|テキ|まと|目的|もくてき|purpose
性|Nature|セイ,ショウ|さが|性格|せいかく|personality
格|Status|カク,コウ|-|合格|ごうかく|pass
信|Trust|シン|-|自信|じしん|confidence
連|Link|レン|つら.なる|連絡|れんらく|contact
絡|Entwine|ラク|から.む|連絡|れんらく|contact
過|Pass|カ|す.ぎる|過去|かこ|past
違|Differ|イ|ちが.う|間違い|まちがい|mistake
悲|Sad|ヒ|かな.しい|悲劇|ひげき|tragedy
笑|Laugh|ショウ|わら.う|笑顔|えがお|smile
泣|Cry|キュウ|な.く|号泣|ごうきゅう|crying aloud
怒|Angry|ド|おこ.る|怒り|いかり|anger
幸|Happiness|コウ|しあわ.せ|幸福|こうふく|happiness
福|Luck|フク|-|幸福|こうふく|happiness
残|Remain|ザン|のこ.る|残念|ざんねん|regret
念|Thought|ネン|-|残念|ざんねん|regret
欲|Desire|ヨク|ほっ.する|食欲|しょくよく|appetite
苦|Pain|ク|くる.しい|苦労|くろう|hardship
痛|Pain|ツウ|いた.い|頭痛|ずつう|headache
疲|Tired|ヒ|つか.れる|疲労|ひろう|fatigue
息|Breath|ソク|いき|ため息|ためいき|sigh
呼|Call|コ|よ.ぶ|呼吸|こきゅう|breath
吸|Suck|キュウ|す.う|吸収|きゅうしゅう|absorption
深|Deep|シン|ふか.い|深夜|しんや|late night
浅|Shallow|セン|あさ.い|浅い|あさい|shallow
泳|Swim|エイ|およ.ぐ|水泳|すいえい|swimming
波|Wave|ハ|なみ|電波|でんぱ|radio wave
流|Flow|リュウ|なが.れる|流行|りゅうこう|trend
消|Extinguish|ショウ|き.える|消化|しょうか|digestion
定|Fix|テイ,ジョウ|さだ.める|予定|よてい|schedule
予|Beforehand|ヨ|あらかじ.め|予約|よやく|reservation
約|Promise|ヤク|-|約束|やくそく|promise
束|Bundle|ソク|たば|約束|やくそく|promise
守|Protect|シュ|まも.る|留守|るす|absence
留|Detain|リュウ,ル|とど.まる|留学|りゅうがく|study abroad
退|Retreat|タイ|しりぞ.く|退院|たいいん|discharge
院|Institution|イン|-|病院|びょういん|hospital
病|Ill|ビョウ|やまい|病気|びょうき|illness
者|Person|シャ|もの|医者|いしゃ|doctor
師|Expert|シ|-|教師|きょうし|teacher
教|Teach|キョウ|おし.える|教育|きょういく|education
徒|Follower|ト|-|生徒|せいと|student
生|Life|セイ,ショウ|い.きる|生活|せいかつ|life
活|Lively|カツ|-|活動|かつどう|activity
動|Move|ドウ|うご.く|運動|うんどう|exercise
運|Transport|ウン|はこ.ぶ|運命|うんめい|fate
命|Life|メイ,ミョウ|いのち|生命|せいめい|life
令|Order|レイ|-|命令|めいれい|order
和|Peace|ワ|やわ.らぐ|平和|へいわ|peace
平|Flat|ヘイ,ビョウ|たいら|平和|へいわ|peace
等|Equal|トウ|ひと.しい|平等|びょうどう|equality
級|Class|キュウ|-|初級|しょきゅう|beginner level
初|First|ショ|はじ.め|最初|さいしょ|first
高|High|コウ|たか.い|高校|こうこう|high school
低|Low|テイ|ひく.い|最低|さいてい|lowest
広|Wide|コウ|ひろ.い|広場|ひろば|plaza
狭|Narrow|キョウ|せま.い|狭い|せまい|narrow
細|Thin|サイ|ほそ.い|細かい|こまかい|detailed
太|Fat|タイ,タ|ふと.い|太陽|たいよう|sun
陽|Sunshine|ヨウ|-|太陽|たいよう|sun
光|Light|コウ|ひかり|日光|にっこう|sunlight
星|Star|セイ,ショウ|ほし|星座|せいざ|constellation
雪|Snow|セツ|ゆき|大雪|おおゆき|heavy snow
雲|Cloud|ウン|くも|雨雲|あまぐも|rain cloud
晴|Clear up|セイ|は.れる|晴天|せいてん|fine weather
静|Quiet|セイ,ジョウ|しず.か|静寂|せいじゃく|silence
暗|Dark|アン|くら.い|暗記|あんき|memorization
明|Bright|メイ,ミョウ|あか.るい|明日|あした|tomorrow
暮|Livelihood|ボ|く.らす|夕暮れ|ゆうぐれ|twilight
配|Distribute|ハイ|くば.る|心配|しんぱい|worry
記|Record|キ|しる.す|日記|にっき|diary
種|Seed|シュ|たね|種類|しゅるい|type
類|Sort|ルイ|-|種類|しゅるい|type
未|Not yet|ミ|-|未来|みらい|future
末|End|マツ|すえ|週末|しゅうまつ|weekend
案|Plan|アン|-|案内|あんない|guidance
`;

const n2Data = `
党|Party|トウ|-|政党|せいとう|political party
協|Cooperation|キョウ|-|協力|きょうりょく|cooperation
総|General|ソウ|すべ.て|総合|そうごう|comprehensive
領|Territory|リョウ|-|大統領|だいとうりょう|president
設|Establish|セツ|もう.ける|設定|せってい|setting
保|Protect|ホ|たも.つ|保存|ほぞん|preservation
支|Branch|シ|ささ.える|支持|しじ|support
報|Report|ホウ|むく.いる|情報|じょうほう|information
告|Tell|コク|つげ.る|報告|ほうこく|report
果|Fruit|カ|は.たす|結果|けっか|result
査|Investigate|サ|-|検査|けんさ|inspection
検|Examine|ケン|-|検査|けんさ|inspection
際|Occasion|サイ|きわ|国際|こくさい|international
在|Exist|ザイ|あ.る|現在|げんざい|present
件|Matter|ケン|-|事件|じけん|incident
任|Responsibility|ニン|まか.せる|責任|せきにん|responsibility
責|Blame|セキ|せ.める|責任|せきにん|responsibility
権|Authority|ケン|-|権利|けんり|right
利|Profit|リ|き.く|利益|りえき|profit
益|Benefit|エキ|-|利益|りえき|profit
派|Group|ハ|-|立派|りっぱ|splendid
増|Increase|ゾウ|ま.す|増加|ぞうか|increase
加|Add|カ|くわ.える|参加|さんか|participation
減|Decrease|ゲン|へ.る|減少|げんしょう|decrease
少|Few|ショウ|すく.ない|少年|しょうねん|boy
状|Condition|ジョウ|-|状態|じょうたい|state
態|Figure|タイ|-|態度|たいど|attitude
比|Compare|ヒ|くら.べる|比較|ひかく|comparison
較|Contrast|カク|-|比較|ひかく|comparison
容|Contain|ヨウ|-|内容|ないよう|content
制|System|セイ|-|制度|せいど|system
度|Degree|ド,タク|たび|温度|おんど|temperature
温|Warm|オン|あたた.かい|温泉|おんせん|hot spring
泉|Spring|セン|いずみ|温泉|おんせん|hot spring
氷|Ice|ヒョウ|こおり|氷点下|ひょうてんか|below freezing
凍|Freeze|トウ|こお.る|冷凍|れいとう|freezing
冷|Cold|レイ|つめ.たい|冷蔵庫|れいぞうこ|refrigerator
蔵|Storehouse|ゾウ|くら|冷蔵庫|れいぞうこ|refrigerator
庫|Warehouse|コ,ク|くら|金庫|きんこ|safe
破|Break|ハ|やぶ.る|破壊|はかい|destruction
壊|Break|カイ|こわ.す|破壊|はかい|destruction
造|Create|ゾウ|つく.る|製造|せいぞう|manufacturing
製|Manufacture|セイ|-|製品|せいひん|product
品|Goods|ヒン|しな|商品|しょうひん|commodity
商|Commerce|ショウ|あきな.う|商業|しょうぎょう|commerce
業|Business|ギョウ|わざ|産業|さんぎょう|industry
産|Produce|サン|う.む|生産|せいさん|production
額|Amount|ガク|ひたい|金額|きんがく|amount of money
値|Price|チ|ね|価値|かち|value
価|Value|カ|あたい|価格|かかく|price
段|Step|ダン|-|階段|かいだん|stairs
階|Floor|カイ|-|階段|かいだん|stairs
層|Layer|ソウ|-|階層|かいそう|hierarchy
構|Construct|コウ|かま.える|構造|こうぞう|structure
基|Base|キ|もと|基本|きほん|foundation
礎|Foundation|ソ|いしずえ|基礎|きそ|foundation
築|Build|チク|きず.く|建築|けんちく|architecture
建|Build|ケン|た.てる|建物|たてもの|building
物|Thing|ブツ,モツ|もの|動物|どうぶつ|animal
動|Move|ドウ|うご.く|動物|どうぶつ|animal
植|Plant|ショク|う.える|植物|しょくぶつ|plant
根|Root|コン|ね|根本|こんぽん|root
葉|Leaf|ヨウ|は|言葉|ことば|word
緑|Green|リョク|みどり|緑茶|りょくちゃ|green tea
紅|Crimson|コウ|べに|紅茶|こうちゃ|black tea
黄|Yellow|コウ|き|黄色|きいろ|yellow
色|Color|ショク,シキ|いろ|景色|けしき|scenery
景|Scene|ケイ|-|風景|ふうけい|scenery
風|Wind|フウ|かぜ|台風|たいふう|typhoon
台|Stand|ダイ,タイ|-|台風|たいふう|typhoon
機|Machine|キ|はた|機械|きかい|machine
械|Contraption|カイ|-|機械|きかい|machine
具|Tool|グ|そな.える|道具|どうぐ|tool
器|Vessel|キ|うつわ|食器|しょっき|tableware
会|Meeting|カイ,エ|あ.う|会社|かいしゃ|company
社|Company|シャ|やしろ|社会|しゃかい|society
界|World|カイ|-|世界|せかい|world
世|World|セイ,セ|よ|世紀|せいき|century
因|Cause|イン|よ.る|原因|げんいん|cause
識|Discriminate|シキ|-|意識|いしき|consciousness
意|Idea|イ|-|意味|いみ|meaning
味|Flavor|ミ|あじ|意味|いみ|meaning
常|Normal|ジョウ|つね|非常|ひじょう|emergency
非|Negative|ヒ|-|非常|ひじょう|emergency
変|Unusual|ヘン|か.わる|大変|たいへん|very
災|Disaster|サイ|わざわ.い|火災|かさい|fire
害|Harm|ガイ|-|被害|ひがい|damage
被|Incur|ヒ|こうむ.る|被害|ひがい|damage
確|Certain|カク|たし.か|確認|かくにん|confirmation
防|Defend|ボウ|ふせ.ぐ|予防|よぼう|prevention
犯|Crime|ハン|おか.す|犯罪|はんざい|crime
罪|Guilt|ザイ|つみ|犯罪|はんざい|crime
警|Admonish|ケイ|-|警察|けいさつ|police
察|Guess|サツ|-|警察|けいさつ|police
官|Bureaucrat|カン|-|警官|けいかん|policeman
署|Government office|ショ|-|警察署|けいさつしょ|police station
故|Accident|コ|ゆえ|事故|じこ|accident
障|Hinder|ショウ|さわ.る|故障|こしょう|breakdown
`;

const n1Data = `
儒|Confucianism|ジュ|-|儒教|じゅきょう|Confucianism
覇|Hegemony|ハ|-|覇権|はけん|hegemony
棄|Abandon|キ|す.てる|放棄|ほうき|abandonment
犠|Sacrifice|ギ|-|犠牲|ぎせい|sacrifice
牲|Animal sacrifice|セイ|-|犠牲|ぎせい|sacrifice
偏|Partial|ヘン|かたよ.る|偏見|へんけん|prejudice
妥|Gentle|ダ|-|妥協|だきょう|compromise
協|Cooperate|キョウ|-|妥協|だきょう|compromise
哲|Philosophy|テツ|-|哲学|てつがく|philosophy
倫|Ethics|リン|-|倫理|りんり|ethics
巧|Skillful|コウ|たく.み|巧妙|こうみょう|ingenious
克|Overcome|コク|か.つ|克服|こくふく|overcome
岐|Branch off|キ|-|分岐|ぶんき|branch
崩|Crumble|ホウ|くず.れる|崩壊|ほうかい|collapse
壊|Break|カイ|こわ.す|崩壊|ほうかい|collapse
索|Search|サク|-|検索|けんさく|search
顕|Clear|ケン|あきらか|顕著|けんちょ|remarkable
著|Author|チョ|いちじる.しい|顕著|けんちょ|remarkable
滞|Stagnate|タイ|とどこお.る|渋滞|じゅうたい|traffic jam
渋|Astringent|ジュウ|しぶ.い|渋滞|じゅうたい|traffic jam
慢|Ridicule|マン|-|慢性|まんせい|chronic
悼|Lament|トウ|いた.む|追悼|ついとう|mourning
惜|Pity|セキ|お.しい|惜別|せきべつ|reluctant parting
遺|Bequeath|イ,ユイ|-|遺産|いさん|heritage
葬|Funeral|ソウ|ほうむ.る|葬式|そうしき|funeral
墓|Grave|ボ|はか|墓地|ぼち|cemetery
碑|Tombstone|ヒ|いしぶみ|記念碑|きねんひ|monument
魂|Soul|コン|たましい|霊魂|れいこん|soul
霊|Spirit|レイ,リョウ|たま|幽霊|ゆうれい|ghost
魔|Demon|マ|-|悪魔|あくま|devil
幻|Phantom|ゲン|まぼろし|幻覚|げんかく|hallucination
魅|Fascination|ミ|-|魅力|みりょく|charm
魔|Witch|マ|-|魔法|まほう|magic
己|Self|コ,キ|おのれ|自己|じこ|self
孤|Orphan|コ|-|孤独|こどく|solitude
独|Alone|ドク|ひと.り|独立|どくりつ|independence
償|Reparation|ショウ|つぐな.う|代償|だいしょう|compensation
譲|Defer|ジョウ|ゆず.る|譲歩|じょうほ|concession
避|Avoid|ヒ|さ.ける|回避|かいひ|evasion
盾|Shield|ジュン|たて|矛盾|むじゅん|contradiction
矛|Halberd|ム|ほこ|矛盾|むじゅん|contradiction
奪|Rob|ダツ|うば.う|略奪|りゃくだつ|plunder
略|Abbreviation|リャク|-|省略|しょうりゃく|omission
省|Conserve|ショウ,セイ|はぶ.く|反省|はんせい|reflection
宴|Banquet|エン|うたげ|宴会|えんかい|banquet
賓|V.I.P.|ヒン|-|来賓|らいひん|guest
歓|Delight|カン|-|歓迎|かんげい|welcome
迎|Welcome|ゲイ|むか.える|歓迎|かんげい|welcome
拍|Clap|ハク,ヒャク|-|拍手|はくしゅ|applause
喝|Hoarse|カツ|-|喝采|かっさい|cheers
采|Dice|サイ|-|喝采|かっさい|cheers
崇|Adore|スウ|-|崇拝|すうはい|worship
拝|Worship|ハイ|おが.む|拝見|はいけん|seeing (humble)
詣|Visit temple|ケイ|もう.でる|参詣|さんけい|visiting a temple
伺|Pay respects|シ|うかが.う|伺う|うかがう|to ask
謙|Self-depreciating|ケン|-|謙譲|けんじょう|modesty
遜|Humble|ソン|-|謙遜|けんそん|modesty
傲|Proud|ゴウ|-|傲慢|ごうまん|arrogance
誇|Boast|コ|ほこ.る|誇張|こちょう|exaggeration
虚|Void|キョ|むな.しい|虚偽|きょぎ|falsehood
偽|False|ギ|いつわ.る|偽造|ぎぞう|forgery
詐|Lie|サ|-|詐欺|さぎ|fraud
欺|Deceit|ギ|あざむ.く|詐欺|さぎ|fraud
妄|Delusion|モウ,ボウ|-|妄想|もうそう|delusion
想|Concept|ソウ,ソ|-|想像|そうぞう|imagination
狂|Lunatic|キョウ|くる.う|狂気|きょうき|madness
凶|Villain|キョウ|-|凶悪|きょうあく|atrocious
脅|Threaten|キョウ|おびや.かす|脅迫|きょうはく|threat
怖|Dread|フ|こわ.い|恐怖|きょうふ|fear
惨|Wretched|サン,ザン|みじ.め|悲惨|ひさん|disastrous
酷|Cruel|コク|ひど.い|残酷|ざんこく|cruel
虐|Tyrannize|ギャク|しいた.げる|虐待|ぎゃくたい|abuse
刑|Penalty|ケイ|-|死刑|しけい|death penalty
罰|Penalty|バツ,バチ|-|罰金|ばっきん|fine
罪|Guilt|ザイ|つみ|犯罪|はんざい|crime
認|Acknowledge|ニン|みと.める|確認|かくにん|confirmation
証|Evidence|ショウ|-|証明|しょうめい|proof
明|Bright|メイ|あか.るい|証明|しょうめい|proof
判|Judge|ハン,バン|-|判断|はんだん|judgment
断|Cut off|ダン|ことわ.る|判断|はんだん|judgment
決|Decide|ケツ|き.める|決断|けつだん|decision
測|Measure|ソク|はか.る|予測|よそく|prediction
予|Beforehand|ヨ|-|予測|よそく|prediction
期|Period|キ|-|期待|きたい|expectation
待|Wait|タイ|ま.つ|期待|きたい|expectation
展|Unfold|テン|-|発展|はってん|development
発|Discharge|ハツ,ホツ|-|発展|はってん|development
進|Advance|シン|すす.む|進歩|しんぽ|progress
歩|Walk|ホ,ブ|ある.く|進歩|しんぽ|progress
退|Retreat|タイ|しりぞ.く|後退|こうたい|retreat
後|Behind|ゴ,コウ|あと|後退|こうたい|retreat
前|In front|ゼン|まえ|前進|ぜんしん|advance
散|Scatter|サン|ち.る|散歩|さんぽ|stroll
`;

function writeFullFile(filePath, exportName, dataStr) {
  const lessons = generateLessons(dataStr);
  const lessonsJson = JSON.stringify(lessons, null, 2);
  const newContent = 'export const ' + exportName + ' = ' + lessonsJson + ';\n';
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Updated", filePath);
}

const dir = 'd:/myproject/SajiloHub/client/src/data';
writeFullFile(dir + '/kanjiN3.js', 'n3Kanji', n3Data);
writeFullFile(dir + '/kanjiN2.js', 'n2Kanji', n2Data);
writeFullFile(dir + '/kanjiN1.js', 'n1Kanji', n1Data);

export const kanaGroups = [
  { id: 'vowels', name: 'Vowels (A, I, U, E, O)' },
  { id: 'k-row', name: 'K-Row (Ka, Ki, Ku, Ke, Ko)' },
  { id: 's-row', name: 'S-Row (Sa, Shi, Su, Se, So)' },
  { id: 't-row', name: 'T-Row (Ta, Chi, Tsu, Te, To)' },
  { id: 'n-row', name: 'N-Row (Na, Ni, Nu, Ne, No)' },
  { id: 'h-row', name: 'H-Row (Ha, Hi, Fu, He, Ho)' },
  { id: 'm-row', name: 'M-Row (Ma, Mi, Mu, Me, Mo)' },
  { id: 'y-row', name: 'Y-Row (Ya, Yu, Yo)' },
  { id: 'r-row', name: 'R-Row (Ra, Ri, Ru, Re, Ro)' },
  { id: 'w-row', name: 'W-Row & N (Wa, Wo, N)' }
];

export const hiraganaData = [
  // Vowels
  { id: 'h_a', char: 'あ', romaji: 'a', strokeCount: 3, group: 'vowels', exampleWord: { jp: 'あめ', romaji: 'ame', en: 'Rain' }, exampleSentence: { jp: 'あめがふっています。', en: 'It is raining.' } },
  { id: 'h_i', char: 'い', romaji: 'i', strokeCount: 2, group: 'vowels', exampleWord: { jp: 'いえ', romaji: 'ie', en: 'House' }, exampleSentence: { jp: 'わたしのいえはちかいです。', en: 'My house is nearby.' } },
  { id: 'h_u', char: 'う', romaji: 'u', strokeCount: 2, group: 'vowels', exampleWord: { jp: 'うみ', romaji: 'umi', en: 'Sea / Ocean' }, exampleSentence: { jp: 'うみでおよぎたいです。', en: 'I want to swim in the ocean.' } },
  { id: 'h_e', char: 'え', romaji: 'e', strokeCount: 2, group: 'vowels', exampleWord: { jp: 'えき', romaji: 'eki', en: 'Station' }, exampleSentence: { jp: 'えきでともだちに会いました。', en: 'I met a friend at the station.' } },
  { id: 'h_o', char: 'お', romaji: 'o', strokeCount: 3, group: 'vowels', exampleWord: { jp: 'おちゃ', romaji: 'ocha', en: 'Green Tea' }, exampleSentence: { jp: 'おちゃをのんでください。', en: 'Please drink some green tea.' } },

  // K-Row
  { id: 'h_ka', char: 'か', romaji: 'ka', strokeCount: 3, group: 'k-row', exampleWord: { jp: 'かさ', romaji: 'kasa', en: 'Umbrella' }, exampleSentence: { jp: 'かさをもっていますか？', en: 'Do you have an umbrella?' } },
  { id: 'h_ki', char: 'き', romaji: 'ki', strokeCount: 4, group: 'k-row', exampleWord: { jp: 'きっぷ', romaji: 'kippu', en: 'Ticket' }, exampleSentence: { jp: 'きっぷをかいました。', en: 'I bought a ticket.' } },
  { id: 'h_ku', char: 'く', romaji: 'ku', strokeCount: 1, group: 'k-row', exampleWord: { jp: 'くるま', romaji: 'kuruma', en: 'Car' }, exampleSentence: { jp: 'くるまをうんてんします。', en: 'I drive a car.' } },
  { id: 'h_ke', char: 'け', romaji: 'ke', strokeCount: 3, group: 'k-row', exampleWord: { jp: 'けいたい', romaji: 'keitai', en: 'Mobile Phone' }, exampleSentence: { jp: 'けいたいをなくしました。', en: 'I lost my mobile phone.' } },
  { id: 'h_ko', char: 'こ', romaji: 'ko', strokeCount: 2, group: 'k-row', exampleWord: { jp: 'こども', romaji: 'kodomo', en: 'Child' }, exampleSentence: { jp: 'こどもがあそんでいます。', en: 'The child is playing.' } },

  // S-Row
  { id: 'h_sa', char: 'さ', romaji: 'sa', strokeCount: 3, group: 's-row', exampleWord: { jp: 'さかな', romaji: 'sakana', en: 'Fish' }, exampleSentence: { jp: 'さかなをたべます。', en: 'I eat fish.' } },
  { id: 'h_shi', char: 'し', romaji: 'shi', strokeCount: 1, group: 's-row', exampleWord: { jp: 'しんぶん', romaji: 'shinbun', en: 'Newspaper' }, exampleSentence: { jp: 'まいあさしんぶんをよみます。', en: 'I read the newspaper every morning.' } },
  { id: 'h_su', char: 'す', romaji: 'su', strokeCount: 2, group: 's-row', exampleWord: { jp: 'すし', romaji: 'sushi', en: 'Sushi' }, exampleSentence: { jp: 'すしがだいすきです。', en: 'I love sushi.' } },
  { id: 'h_se', char: 'せ', romaji: 'se', strokeCount: 3, group: 's-row', exampleWord: { jp: 'せんせい', romaji: 'sensei', en: 'Teacher' }, exampleSentence: { jp: 'せんせいにしつもんしました。', en: 'I asked the teacher a question.' } },
  { id: 'h_so', char: 'そ', romaji: 'so', strokeCount: 1, group: 's-row', exampleWord: { jp: 'そら', romaji: 'sora', en: 'Sky' }, exampleSentence: { jp: 'そらがあおいです。', en: 'The sky is blue.' } },

  // T-Row
  { id: 'h_ta', char: 'た', romaji: 'ta', strokeCount: 4, group: 't-row', exampleWord: { jp: 'たまご', romaji: 'tamago', en: 'Egg' }, exampleSentence: { jp: 'たまごをたべました。', en: 'I ate an egg.' } },
  { id: 'h_chi', char: 'ち', romaji: 'chi', strokeCount: 2, group: 't-row', exampleWord: { jp: 'ちず', romaji: 'chizu', en: 'Map' }, exampleSentence: { jp: 'ちずをみせてください。', en: 'Please show me the map.' } },
  { id: 'h_tsu', char: 'つ', romaji: 'tsu', strokeCount: 1, group: 't-row', exampleWord: { jp: 'つくえ', romaji: 'tsukue', en: 'Desk' }, exampleSentence: { jp: 'つくえのうえに本があります。', en: 'There is a book on the desk.' } },
  { id: 'h_te', char: 'て', romaji: 'te', strokeCount: 1, group: 't-row', exampleWord: { jp: 'てがみ', romaji: 'tegami', en: 'Letter' }, exampleSentence: { jp: 'てがみをかきました。', en: 'I wrote a letter.' } },
  { id: 'h_to', char: 'と', romaji: 'to', strokeCount: 2, group: 't-row', exampleWord: { jp: 'ともだち', romaji: 'tomodachi', en: 'Friend' }, exampleSentence: { jp: 'ともだちとあそびます。', en: 'I will play with my friend.' } },

  // N-Row
  { id: 'h_na', char: 'な', romaji: 'na', strokeCount: 4, group: 'n-row', exampleWord: { jp: 'なつ', romaji: 'natsu', en: 'Summer' }, exampleSentence: { jp: 'なつやすみがたのしみです。', en: 'I am looking forward to summer vacation.' } },
  { id: 'h_ni', char: 'に', romaji: 'ni', strokeCount: 3, group: 'n-row', exampleWord: { jp: 'にほんご', romaji: 'nihongo', en: 'Japanese Language' }, exampleSentence: { jp: 'にほんごをべんきょうしています。', en: 'I am studying Japanese.' } },
  { id: 'h_nu', char: 'ぬ', romaji: 'nu', strokeCount: 2, group: 'n-row', exampleWord: { jp: 'ぬいぐるみ', romaji: 'nuigurumi', en: 'Stuffed Animal' }, exampleSentence: { jp: 'かわいいぬいぐるみを買いました。', en: 'I bought a cute stuffed animal.' } },
  { id: 'h_ne', char: 'ね', romaji: 'ne', strokeCount: 2, group: 'n-row', exampleWord: { jp: 'ねこ', romaji: 'neko', en: 'Cat' }, exampleSentence: { jp: 'ねこがねています。', en: 'The cat is sleeping.' } },
  { id: 'h_no', char: 'の', romaji: 'no', strokeCount: 1, group: 'n-row', exampleWord: { jp: 'のりもの', romaji: 'norimono', en: 'Vehicle' }, exampleSentence: { jp: 'いろんなのりものがあります。', en: 'There are various vehicles.' } },

  // H-Row
  { id: 'h_ha', char: 'は', romaji: 'ha', strokeCount: 3, group: 'h-row', exampleWord: { jp: 'はな', romaji: 'hana', en: 'Flower' }, exampleSentence: { jp: 'はながさきました。', en: 'The flowers bloomed.' } },
  { id: 'h_hi', char: 'ひ', romaji: 'hi', strokeCount: 1, group: 'h-row', exampleWord: { jp: 'ひこうき', romaji: 'hikouki', en: 'Airplane' }, exampleSentence: { jp: 'ひこうきにのります。', en: 'I will board the airplane.' } },
  { id: 'h_fu', char: 'ふ', romaji: 'fu', strokeCount: 4, group: 'h-row', exampleWord: { jp: 'ふじさん', romaji: 'fujisan', en: 'Mt. Fuji' }, exampleSentence: { jp: 'ふじさんはきれいです。', en: 'Mt. Fuji is beautiful.' } },
  { id: 'h_he', char: 'へ', romaji: 'he', strokeCount: 1, group: 'h-row', exampleWord: { jp: 'へや', romaji: 'heya', en: 'Room' }, exampleSentence: { jp: 'へやをそうじしました。', en: 'I cleaned my room.' } },
  { id: 'h_ho', char: 'ほ', romaji: 'ho', strokeCount: 4, group: 'h-row', exampleWord: { jp: 'ほん', romaji: 'hon', en: 'Book' }, exampleSentence: { jp: 'ほんをよんでいます。', en: 'I am reading a book.' } },

  // M-Row
  { id: 'h_ma', char: 'ま', romaji: 'ma', strokeCount: 3, group: 'm-row', exampleWord: { jp: 'まち', romaji: 'machi', en: 'Town / City' }, exampleSentence: { jp: 'このまちはにぎやかです。', en: 'This town is lively.' } },
  { id: 'h_mi', char: 'み', romaji: 'mi', strokeCount: 2, group: 'm-row', exampleWord: { jp: 'みず', romaji: 'mizu', en: 'Water' }, exampleSentence: { jp: 'みずをいっぱいのんでください。', en: 'Please drink plenty of water.' } },
  { id: 'h_mu', char: 'む', romaji: 'mu', strokeCount: 3, group: 'm-row', exampleWord: { jp: 'むし', romaji: 'mushi', en: 'Insect' }, exampleSentence: { jp: 'むしがにがてです。', en: 'I am not good with insects.' } },
  { id: 'h_me', char: 'め', romaji: 'me', strokeCount: 2, group: 'm-row', exampleWord: { jp: 'めがね', romaji: 'megane', en: 'Glasses' }, exampleSentence: { jp: 'めがねをかけています。', en: 'I am wearing glasses.' } },
  { id: 'h_mo', char: 'も', romaji: 'mo', strokeCount: 3, group: 'm-row', exampleWord: { jp: 'もり', romaji: 'mori', en: 'Forest' }, exampleSentence: { jp: 'もりのなかをあるきました。', en: 'I walked inside the forest.' } },

  // Y-Row
  { id: 'h_ya', char: 'や', romaji: 'ya', strokeCount: 3, group: 'y-row', exampleWord: { jp: 'やま', romaji: 'yama', en: 'Mountain' }, exampleSentence: { jp: 'やまにのぼります。', en: 'I will climb the mountain.' } },
  { id: 'h_yu', char: 'ゆ', romaji: 'yu', strokeCount: 2, group: 'y-row', exampleWord: { jp: 'ゆき', romaji: 'yuki', en: 'Snow' }, exampleSentence: { jp: 'ゆきがふっています。', en: 'It is snowing.' } },
  { id: 'h_yo', char: 'よ', romaji: 'yo', strokeCount: 2, group: 'y-row', exampleWord: { jp: 'よる', romaji: 'yoru', en: 'Night' }, exampleSentence: { jp: 'よるはしずかです。', en: 'The night is quiet.' } },

  // R-Row
  { id: 'h_ra', char: 'ら', romaji: 'ra', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'らいねん', romaji: 'rainen', en: 'Next Year' }, exampleSentence: { jp: 'らいねんにほんへいきます。', en: 'I will go to Japan next year.' } },
  { id: 'h_ri', char: 'り', romaji: 'ri', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'りんご', romaji: 'ringo', en: 'Apple' }, exampleSentence: { jp: 'りんごをたべます。', en: 'I eat an apple.' } },
  { id: 'h_ru', char: 'る', romaji: 'ru', strokeCount: 1, group: 'r-row', exampleWord: { jp: 'るす', romaji: 'rusu', en: 'Absence' }, exampleSentence: { jp: 'ともだちのいえはるすでした。', en: 'My friend was away from home.' } },
  { id: 'h_re', char: 'れ', romaji: 're', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'れいぞうこ', romaji: 'reizouko', en: 'Refrigerator' }, exampleSentence: { jp: 'れいぞうこにぎゅうにゅうがあります。', en: 'There is milk in the refrigerator.' } },
  { id: 'h_ro', char: 'ろ', romaji: 'ro', strokeCount: 1, group: 'r-row', exampleWord: { jp: 'ろうそく', romaji: 'rousoku', en: 'Candle' }, exampleSentence: { jp: 'ろうそくにひをつけます。', en: 'I will light the candle.' } },

  // W-Row & N
  { id: 'h_wa', char: 'わ', romaji: 'wa', strokeCount: 2, group: 'w-row', exampleWord: { jp: 'わたしたち', romaji: 'watashitachi', en: 'We / Us' }, exampleSentence: { jp: 'わたしたちはともだちです。', en: 'We are friends.' } },
  { id: 'h_wo', char: 'を', romaji: 'wo', strokeCount: 3, group: 'w-row', exampleWord: { jp: '〜を', romaji: 'wo (particle)', en: 'Object particle' }, exampleSentence: { jp: 'ごはんをたべます。', en: 'I eat rice (Object marker particle).' } },
  { id: 'h_n', char: 'ん', romaji: 'n', strokeCount: 1, group: 'w-row', exampleWord: { jp: 'にほん', romaji: 'nihon', en: 'Japan' }, exampleSentence: { jp: 'にほんはうつくしいです。', en: 'Japan is beautiful.' } }
];

export const katakanaData = [
  // Vowels
  { id: 'k_a', char: 'ア', romaji: 'a', strokeCount: 2, group: 'vowels', exampleWord: { jp: 'アイス', romaji: 'aisu', en: 'Ice cream' }, exampleSentence: { jp: 'アイスクリームがすきです。', en: 'I like ice cream.' } },
  { id: 'k_i', char: 'イ', romaji: 'i', strokeCount: 2, group: 'vowels', exampleWord: { jp: 'インク', romaji: 'inku', en: 'Ink' }, exampleSentence: { jp: 'インクがなくなりました。', en: 'The ink has run out.' } },
  { id: 'k_u', char: 'ウ', romaji: 'u', strokeCount: 3, group: 'vowels', exampleWord: { jp: 'ウサギ', romaji: 'usagi', en: 'Rabbit' }, exampleSentence: { jp: 'ウサギがはねています。', en: 'The rabbit is hopping.' } },
  { id: 'k_e', char: 'エ', romaji: 'e', strokeCount: 3, group: 'vowels', exampleWord: { jp: 'エアコン', romaji: 'eakon', en: 'Air Conditioner' }, exampleSentence: { jp: 'エアコンをつけてください。', en: 'Please turn on the air conditioner.' } },
  { id: 'k_o', char: 'オ', romaji: 'o', strokeCount: 3, group: 'vowels', exampleWord: { jp: 'オレンジ', romaji: 'orenji', en: 'Orange' }, exampleSentence: { jp: 'オレンジをかいました。', en: 'I bought oranges.' } },

  // K-Row
  { id: 'k_ka', char: 'カ', romaji: 'ka', strokeCount: 2, group: 'k-row', exampleWord: { jp: 'カメラ', romaji: 'kamera', en: 'Camera' }, exampleSentence: { jp: 'カメラでしゃしんをとります。', en: 'I take photos with a camera.' } },
  { id: 'k_ki', char: 'キ', romaji: 'ki', strokeCount: 3, group: 'k-row', exampleWord: { jp: 'ギター', romaji: 'gitaa', en: 'Guitar' }, exampleSentence: { jp: 'ギターをひきます。', en: 'I play the guitar.' } },
  { id: 'k_ku', char: 'ク', romaji: 'ku', strokeCount: 2, group: 'k-row', exampleWord: { jp: 'クラス', romaji: 'kurasu', en: 'Class' }, exampleSentence: { jp: 'クラスはたのしいです。', en: 'The class is fun.' } },
  { id: 'k_ke', char: 'ケ', romaji: 'ke', strokeCount: 3, group: 'k-row', exampleWord: { jp: 'ケーキ', romaji: 'keeki', en: 'Cake' }, exampleSentence: { jp: 'ケーキをたべましょう。', en: 'Let\'s eat cake.' } },
  { id: 'k_ko', char: 'コ', romaji: 'ko', strokeCount: 2, group: 'k-row', exampleWord: { jp: 'コーヒー', romaji: 'koohii', en: 'Coffee' }, exampleSentence: { jp: 'コーヒーをのみますか？', en: 'Do you drink coffee?' } },

  // S-Row
  { id: 'k_sa', char: 'サ', romaji: 'sa', strokeCount: 3, group: 's-row', exampleWord: { jp: 'サラダ', romaji: 'sarada', en: 'Salad' }, exampleSentence: { jp: 'サラダをたべました。', en: 'I ate salad.' } },
  { id: 'k_shi', char: 'シ', romaji: 'shi', strokeCount: 3, group: 's-row', exampleWord: { jp: 'シャツ', romaji: 'shatsu', en: 'Shirt' }, exampleSentence: { jp: 'あおいシャツをきています。', en: 'I am wearing a blue shirt.' } },
  { id: 'k_su', char: 'ス', romaji: 'su', strokeCount: 2, group: 's-row', exampleWord: { jp: 'スポーツ', romaji: 'supootsu', en: 'Sports' }, exampleSentence: { jp: 'スポーツがすきです。', en: 'I like sports.' } },
  { id: 'k_se', char: 'セ', romaji: 'se', strokeCount: 2, group: 's-row', exampleWord: { jp: 'セーター', romaji: 'seetaa', en: 'Sweater' }, exampleSentence: { jp: 'あたたかいセーターです。', en: 'It is a warm sweater.' } },
  { id: 'k_so', char: 'ソ', romaji: 'so', strokeCount: 2, group: 's-row', exampleWord: { jp: 'ソファ', romaji: 'sofa', en: 'Sofa' }, exampleSentence: { jp: 'ソファでやすんでいます。', en: 'I am resting on the sofa.' } },

  // T-Row
  { id: 'k_ta', char: 'タ', romaji: 'ta', strokeCount: 3, group: 't-row', exampleWord: { jp: 'タクシー', romaji: 'takushii', en: 'Taxi' }, exampleSentence: { jp: 'タクシーでかえります。', en: 'I will go back by taxi.' } },
  { id: 'k_chi', char: 'チ', romaji: 'chi', strokeCount: 3, group: 't-row', exampleWord: { jp: 'チーム', romaji: 'chiimu', en: 'Team' }, exampleSentence: { jp: 'チームが勝ちました。', en: 'The team won.' } },
  { id: 'k_tsu', char: 'ツ', romaji: 'tsu', strokeCount: 3, group: 't-row', exampleWord: { jp: 'ツアー', romaji: 'tsuaa', en: 'Tour' }, exampleSentence: { jp: 'ツアーにさんかします。', en: 'I will participate in the tour.' } },
  { id: 'k_te', char: 'テ', romaji: 'te', strokeCount: 3, group: 't-row', exampleWord: { jp: 'テレビ', romaji: 'terebi', en: 'Television' }, exampleSentence: { jp: 'テレビをみます。', en: 'I watch television.' } },
  { id: 'k_to', char: 'ト', romaji: 'to', strokeCount: 2, group: 't-row', exampleWord: { jp: 'トイレ', romaji: 'toire', en: 'Toilet / Restroom' }, exampleSentence: { jp: 'トイレはどこですか？', en: 'Where is the restroom?' } },

  // N-Row
  { id: 'k_na', char: 'ナ', romaji: 'na', strokeCount: 2, group: 'n-row', exampleWord: { jp: 'ナイフ', romaji: 'naifu', en: 'Knife' }, exampleSentence: { jp: 'ナイフとフォークを使います。', en: 'I use a knife and fork.' } },
  { id: 'k_ni', char: 'ニ', romaji: 'ni', strokeCount: 2, group: 'n-row', exampleWord: { jp: 'ニュース', romaji: 'nyuusu', en: 'News' }, exampleSentence: { jp: 'ニュースをみています。', en: 'I am watching the news.' } },
  { id: 'k_nu', char: 'ヌ', romaji: 'nu', strokeCount: 2, group: 'n-row', exampleWord: { jp: 'ヌードル', romaji: 'nuudoru', en: 'Noodle' }, exampleSentence: { jp: 'ヌードルをたべました。', en: 'I ate noodles.' } },
  { id: 'k_ne', char: 'ネ', romaji: 'ne', strokeCount: 4, group: 'n-row', exampleWord: { jp: 'ネクタイ', romaji: 'nekutai', en: 'Necktie' }, exampleSentence: { jp: 'ネクタイをむすびます。', en: 'I will tie my necktie.' } },
  { id: 'k_no', char: 'ノ', romaji: 'no', strokeCount: 1, group: 'n-row', exampleWord: { jp: 'ノート', romaji: 'nooto', en: 'Notebook' }, exampleSentence: { jp: 'ノートにかきこみます。', en: 'I write in the notebook.' } },

  // H-Row
  { id: 'k_ha', char: 'ハ', romaji: 'ha', strokeCount: 2, group: 'h-row', exampleWord: { jp: 'ハンバーグ', romaji: 'hanbaagu', en: 'Hamburger Patty' }, exampleSentence: { jp: 'ハンバーグがおいしいです。', en: 'The hamburger patty is delicious.' } },
  { id: 'k_hi', char: 'ヒ', romaji: 'hi', strokeCount: 2, group: 'h-row', exampleWord: { jp: 'ヒーロー', romaji: 'hiiroo', en: 'Hero' }, exampleSentence: { jp: 'かれはわたしのヒーローです。', en: 'He is my hero.' } },
  { id: 'k_fu', char: 'フ', romaji: 'fu', strokeCount: 1, group: 'h-row', exampleWord: { jp: 'フィルム', romaji: 'firumu', en: 'Film' }, exampleSentence: { jp: 'フィルムカメラを買いました。', en: 'I bought a film camera.' } },
  { id: 'k_he', char: 'ヘ', romaji: 'he', strokeCount: 1, group: 'h-row', exampleWord: { jp: 'ヘリコプター', romaji: 'herikoputaa', en: 'Helicopter' }, exampleSentence: { jp: 'ヘリコプターがとんでいます。', en: 'A helicopter is flying.' } },
  { id: 'k_ho', char: 'ホ', romaji: 'ho', strokeCount: 4, group: 'h-row', exampleWord: { jp: 'ホテル', romaji: 'hoteru', en: 'Hotel' }, exampleSentence: { jp: 'ホテルに泊まります。', en: 'I will stay at a hotel.' } },

  // M-Row
  { id: 'k_ma', char: 'マ', romaji: 'ma', strokeCount: 2, group: 'm-row', exampleWord: { jp: 'マイク', romaji: 'maiku', en: 'Microphone' }, exampleSentence: { jp: 'マイクをつかいます。', en: 'I use a microphone.' } },
  { id: 'k_mi', char: 'ミ', romaji: 'mi', strokeCount: 3, group: 'm-row', exampleWord: { jp: 'ミルク', romaji: 'miruku', en: 'Milk' }, exampleSentence: { jp: 'ミルクをのみます。', en: 'I drink milk.' } },
  { id: 'k_mu', char: 'ム', romaji: 'mu', strokeCount: 2, group: 'm-row', exampleWord: { jp: 'ムービー', romaji: 'muubii', en: 'Movie' }, exampleSentence: { jp: 'ムービーをみました。', en: 'I watched a movie.' } },
  { id: 'k_me', char: 'メ', romaji: 'me', strokeCount: 2, group: 'm-row', exampleWord: { jp: 'メール', romaji: 'meeru', en: 'Email / Mail' }, exampleSentence: { jp: 'メールをおくりました。', en: 'I sent an email.' } },
  { id: 'k_mo', char: 'モ', romaji: 'mo', strokeCount: 3, group: 'm-row', exampleWord: { jp: 'モデル', romaji: 'moderu', en: 'Model' }, exampleSentence: { jp: 'かのじょはモデルです。', en: 'She is a model.' } },

  // Y-Row
  { id: 'k_ya', char: 'ヤ', romaji: 'ya', strokeCount: 2, group: 'y-row', exampleWord: { jp: 'ヤマ', romaji: 'yama (loan word)', en: 'Yama / Peak' }, exampleSentence: { jp: 'ヤマをはります。', en: 'To make a guess (idiom using Peak).' } },
  { id: 'k_yu', char: 'ユ', romaji: 'yu', strokeCount: 2, group: 'y-row', exampleWord: { jp: 'ユニフォーム', romaji: 'yunifoomu', en: 'Uniform' }, exampleSentence: { jp: 'ユニフォームをきます。', en: 'I wear a uniform.' } },
  { id: 'k_yo', char: 'ヨ', romaji: 'yo', strokeCount: 3, group: 'y-row', exampleWord: { jp: 'ヨガ', romaji: 'yoga', en: 'Yoga' }, exampleSentence: { jp: 'ヨガをならっています。', en: 'I am learning yoga.' } },

  // R-Row
  { id: 'k_ra', char: 'ラ', romaji: 'ra', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'ラジオ', romaji: 'rajio', en: 'Radio' }, exampleSentence: { jp: 'ラジオをききます。', en: 'I listen to the radio.' } },
  { id: 'k_ri', char: 'リ', romaji: 'ri', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'リンゴ (Kat.)', romaji: 'ringo', en: 'Apple' }, exampleSentence: { jp: 'リンゴをスライスします。', en: 'I slice the apple.' } },
  { id: 'k_ru', char: 'ル', romaji: 'ru', strokeCount: 2, group: 'r-row', exampleWord: { jp: 'ルール', romaji: 'ruuru', en: 'Rule' }, exampleSentence: { jp: 'ルールをまもりましょう。', en: 'Let\'s follow the rules.' } },
  { id: 'k_re', char: 'レ', romaji: 're', strokeCount: 1, group: 'r-row', exampleWord: { jp: 'レストラン', romaji: 'resutoran', en: 'Restaurant' }, exampleSentence: { jp: 'レストランでしょくじします。', en: 'I will dine at a restaurant.' } },
  { id: 'k_ro', char: 'ロ', romaji: 'ro', strokeCount: 3, group: 'r-row', exampleWord: { jp: 'ロボット', romaji: 'robotto', en: 'Robot' }, exampleSentence: { jp: 'ロボットがつくりたいです。', en: 'I want to build a robot.' } },

  // W-Row & N
  { id: 'k_wa', char: 'ワ', romaji: 'wa', strokeCount: 2, group: 'w-row', exampleWord: { jp: 'ワイン', romaji: 'wain', en: 'Wine' }, exampleSentence: { jp: 'ワインをのみました。', en: 'I drank wine.' } },
  { id: 'k_wo', char: 'ヲ', romaji: 'wo', strokeCount: 3, group: 'w-row', exampleWord: { jp: 'ヲタ', romaji: 'wota', en: 'Geek / Otaku' }, exampleSentence: { jp: 'ヲタかつをします。', en: 'I engage in geeky activities.' } },
  { id: 'k_n', char: 'ン', romaji: 'n', strokeCount: 2, group: 'w-row', exampleWord: { jp: 'マンション', romaji: 'manshon', en: 'Apartment / Mansion' }, exampleSentence: { jp: 'マンションにすんでいます。', en: 'I live in an apartment.' } }
];

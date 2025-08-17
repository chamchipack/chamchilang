export const HIRAGANA: Record<string, { jp: string; ro: string; ko: string }> =
  {
    // a 행
    a: { jp: 'あ', ro: 'a', ko: '아' },
    i: { jp: 'い', ro: 'i', ko: '이' },
    u: { jp: 'う', ro: 'u', ko: '우' },
    e: { jp: 'え', ro: 'e', ko: '에' },
    o: { jp: 'お', ro: 'o', ko: '오' },

    // ka 행
    ka: { jp: 'か', ro: 'ka', ko: '카' },
    ki: { jp: 'き', ro: 'ki', ko: '키' },
    ku: { jp: 'く', ro: 'ku', ko: '쿠' },
    ke: { jp: 'け', ro: 'ke', ko: '케' },
    ko: { jp: 'こ', ro: 'ko', ko: '코' },

    // sa 행
    sa: { jp: 'さ', ro: 'sa', ko: '사' },
    shi: { jp: 'し', ro: 'shi', ko: '시' },
    su: { jp: 'す', ro: 'su', ko: '스' },
    se: { jp: 'せ', ro: 'se', ko: '세' },
    so: { jp: 'そ', ro: 'so', ko: '소' },

    // ta 행
    ta: { jp: 'た', ro: 'ta', ko: '타' },
    chi: { jp: 'ち', ro: 'chi', ko: '치' },
    tsu: { jp: 'つ', ro: 'tsu', ko: '츠' },
    te: { jp: 'て', ro: 'te', ko: '테' },
    to: { jp: 'と', ro: 'to', ko: '토' },

    // na 행
    na: { jp: 'な', ro: 'na', ko: '나' },
    ni: { jp: 'に', ro: 'ni', ko: '니' },
    nu: { jp: 'ぬ', ro: 'nu', ko: '누' },
    ne: { jp: 'ね', ro: 'ne', ko: '네' },
    no: { jp: 'の', ro: 'no', ko: '노' },

    // ha 행
    ha: { jp: 'は', ro: 'ha', ko: '하' },
    hi: { jp: 'ひ', ro: 'hi', ko: '히' },
    fu: { jp: 'ふ', ro: 'fu', ko: '후' },
    he: { jp: 'へ', ro: 'he', ko: '헤' },
    ho: { jp: 'ほ', ro: 'ho', ko: '호' },

    // ma 행
    ma: { jp: 'ま', ro: 'ma', ko: '마' },
    mi: { jp: 'み', ro: 'mi', ko: '미' },
    mu: { jp: 'む', ro: 'mu', ko: '무' },
    me: { jp: 'め', ro: 'me', ko: '메' },
    mo: { jp: 'も', ro: 'mo', ko: '모' },

    // ya 행
    ya: { jp: 'や', ro: 'ya', ko: '야' },
    yu: { jp: 'ゆ', ro: 'yu', ko: '유' },
    yo: { jp: 'よ', ro: 'yo', ko: '요' },

    // ra 행
    ra: { jp: 'ら', ro: 'ra', ko: '라' },
    ri: { jp: 'り', ro: 'ri', ko: '리' },
    ru: { jp: 'る', ro: 'ru', ko: '루' },
    re: { jp: 'れ', ro: 're', ko: '레' },
    ro: { jp: 'ろ', ro: 'ro', ko: '로' },

    // wa 행
    wa: { jp: 'わ', ro: 'wa', ko: '와' },
    wi: { jp: 'ゐ', ro: 'wi', ko: '이' }, // 고전
    we: { jp: 'ゑ', ro: 'we', ko: '에' }, // 고전
    wo: { jp: 'を', ro: 'wo', ko: '오' },

    // n
    n: { jp: 'ん', ro: 'n', ko: 'ん' },
  };

export const HIRAGANA_BY_JP: Record<string, { ro: string; ko: string }> = {
  // a 행
  あ: { ro: 'a', ko: '아' },
  い: { ro: 'i', ko: '이' },
  う: { ro: 'u', ko: '우' },
  え: { ro: 'e', ko: '에' },
  お: { ro: 'o', ko: '오' },

  // ka 행
  か: { ro: 'ka', ko: '카' },
  き: { ro: 'ki', ko: '키' },
  く: { ro: 'ku', ko: '쿠' },
  け: { ro: 'ke', ko: '케' },
  こ: { ro: 'ko', ko: '코' },

  // sa 행
  さ: { ro: 'sa', ko: '사' },
  し: { ro: 'shi', ko: '시' },
  す: { ro: 'su', ko: '스' },
  せ: { ro: 'se', ko: '세' },
  そ: { ro: 'so', ko: '소' },

  // ta 행
  た: { ro: 'ta', ko: '타' },
  ち: { ro: 'chi', ko: '치' },
  つ: { ro: 'tsu', ko: '츠' },
  て: { ro: 'te', ko: '테' },
  と: { ro: 'to', ko: '토' },

  // na 행
  な: { ro: 'na', ko: '나' },
  に: { ro: 'ni', ko: '니' },
  ぬ: { ro: 'nu', ko: '누' },
  ね: { ro: 'ne', ko: '네' },
  の: { ro: 'no', ko: '노' },

  // ha 행
  は: { ro: 'ha', ko: '하' },
  ひ: { ro: 'hi', ko: '히' },
  ふ: { ro: 'fu', ko: '후' },
  へ: { ro: 'he', ko: '헤' },
  ほ: { ro: 'ho', ko: '호' },

  // ma 행
  ま: { ro: 'ma', ko: '마' },
  み: { ro: 'mi', ko: '미' },
  む: { ro: 'mu', ko: '무' },
  め: { ro: 'me', ko: '메' },
  も: { ro: 'mo', ko: '모' },

  // ya 행
  や: { ro: 'ya', ko: '야' },
  ゆ: { ro: 'yu', ko: '유' },
  よ: { ro: 'yo', ko: '요' },

  // ra 행
  ら: { ro: 'ra', ko: '라' },
  り: { ro: 'ri', ko: '리' },
  る: { ro: 'ru', ko: '루' },
  れ: { ro: 're', ko: '레' },
  ろ: { ro: 'ro', ko: '로' },

  // wa 행
  わ: { ro: 'wa', ko: '와' },
  ゐ: { ro: 'wi', ko: '이' }, // 고전
  ゑ: { ro: 'we', ko: '에' }, // 고전
  を: { ro: 'wo', ko: '오' },

  // g 행
  が: { ro: 'ga', ko: '가' },
  ぎ: { ro: 'gi', ko: '기' },
  ぐ: { ro: 'gu', ko: '구' },
  げ: { ro: 'ge', ko: '게' },
  ご: { ro: 'go', ko: '고' },

  // z 행
  ざ: { ro: 'za', ko: '자' },
  じ: { ro: 'ji', ko: '지' },
  ず: { ro: 'zu', ko: '즈' },
  ぜ: { ro: 'ze', ko: '제' },
  ぞ: { ro: 'zo', ko: '조' },

  // d 행
  だ: { ro: 'da', ko: '다' },
  ぢ: { ro: 'ji', ko: '지' }, // 현대 일본어에서는 'じ'와 발음 같음
  づ: { ro: 'zu', ko: '즈' }, // 'ず'와 발음 같음
  で: { ro: 'de', ko: '데' },
  ど: { ro: 'do', ko: '도' },

  // b 행
  ば: { ro: 'ba', ko: '바' },
  び: { ro: 'bi', ko: '비' },
  ぶ: { ro: 'bu', ko: '부' },
  べ: { ro: 'be', ko: '베' },
  ぼ: { ro: 'bo', ko: '보' },

  // p 행 (반탁음)
  ぱ: { ro: 'pa', ko: '파' },
  ぴ: { ro: 'pi', ko: '피' },
  ぷ: { ro: 'pu', ko: '푸' },
  ぺ: { ro: 'pe', ko: '페' },
  ぽ: { ro: 'po', ko: '포' },

  // n
  ん: { ro: 'n', ko: 'ん' },
};

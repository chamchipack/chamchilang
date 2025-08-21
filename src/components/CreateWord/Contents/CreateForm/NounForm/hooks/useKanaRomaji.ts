// CreateForm/hooks/useKanaRomaji.ts

import { HIRAGANA_BY_JP } from '../../../../../../config/japanese/alphabet/hiragana';

const SMALL = new Set([
  'ゃ',
  'ゅ',
  'ょ',
  'ぁ',
  'ぃ',
  'ぅ',
  'ぇ',
  'ぉ',
  'ャ',
  'ュ',
  'ョ',
  'ァ',
  'ィ',
  'ゥ',
  'ェ',
  'ォ',
]);
const SOKUON = new Set(['っ', 'ッ']);
const CHOON = 'ー';

export const kataToHira = (s: string) =>
  s.replace(/[\u30A1-\u30FA]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );

export function splitIntoMora(kana: string) {
  const a = Array.from(kataToHira(kana));
  const out: string[] = [];
  for (let i = 0; i < a.length; i++) {
    const c = a[i];
    if (SOKUON.has(c)) {
      out.push(c);
      continue;
    }
    if (SMALL.has(c) || c === CHOON) {
      if (out.length) out[out.length - 1] += c;
      else out.push(c);
      continue;
    }
    out.push(c);
  }
  return out;
}

const YOON: Record<string, string> = {
  きゃ: 'kya',
  きゅ: 'kyu',
  きょ: 'kyo',
  しゃ: 'sha',
  しゅ: 'shu',
  しょ: 'sho',
  ちゃ: 'cha',
  ちゅ: 'chu',
  ちょ: 'cho',
  にゃ: 'nya',
  にゅ: 'nyu',
  にょ: 'nyo',
  ひゃ: 'hya',
  ひゅ: 'hyu',
  ひょ: 'hyo',
  みゃ: 'mya',
  みゅ: 'myu',
  みょ: 'myo',
  りゃ: 'rya',
  りゅ: 'ryu',
  りょ: 'ryo',
  ぎゃ: 'gya',
  ぎゅ: 'gyu',
  ぎょ: 'gyo',
  じゃ: 'ja',
  じゅ: 'ju',
  じょ: 'jo',
  びゃ: 'bya',
  びゅ: 'byu',
  びょ: 'byo',
  ぴゃ: 'pya',
  ぴゅ: 'pyu',
  ぴょ: 'pyo',
};

const BASE: Record<string, string> = {
  あ: 'a',
  い: 'i',
  う: 'u',
  え: 'e',
  お: 'o',
  か: 'ka',
  き: 'ki',
  く: 'ku',
  け: 'ke',
  こ: 'ko',
  さ: 'sa',
  し: 'shi',
  す: 'su',
  せ: 'se',
  そ: 'so',
  た: 'ta',
  ち: 'chi',
  つ: 'tsu',
  て: 'te',
  と: 'to',
  な: 'na',
  に: 'ni',
  ぬ: 'nu',
  ね: 'ne',
  の: 'no',
  は: 'ha',
  ひ: 'hi',
  ふ: 'fu',
  へ: 'he',
  ほ: 'ho',
  ま: 'ma',
  み: 'mi',
  む: 'mu',
  め: 'me',
  も: 'mo',
  や: 'ya',
  ゆ: 'yu',
  よ: 'yo',
  ら: 'ra',
  り: 'ri',
  る: 'ru',
  れ: 're',
  ろ: 'ro',
  わ: 'wa',
  を: 'o',
  ん: 'n',
  が: 'ga',
  ぎ: 'gi',
  ぐ: 'gu',
  げ: 'ge',
  ご: 'go',
  ざ: 'za',
  じ: 'ji',
  ず: 'zu',
  ぜ: 'ze',
  ぞ: 'zo',
  だ: 'da',
  ぢ: 'ji',
  づ: 'zu',
  で: 'de',
  ど: 'do',
  ば: 'ba',
  び: 'bi',
  ぶ: 'bu',
  べ: 'be',
  ぼ: 'bo',
  ぱ: 'pa',
  ぴ: 'pi',
  ぷ: 'pu',
  ぺ: 'pe',
  ぽ: 'po',
};

function moraToRomaji(m: string) {
  if (YOON[m]) return YOON[m];
  if (m.includes(CHOON)) {
    const base = m.replaceAll(CHOON, '');
    const r = YOON[base] ?? BASE[base] ?? '';
    if (!r) return '';
    const v = r.match(/[aeiou]$/)?.[0];
    return v ? r + (v === 'e' ? 'i' : 'u') : r; // えー→ei, おー→ou
  }
  return BASE[m] ?? '';
}

function sokuonify(nextRomaji: string) {
  if (!nextRomaji) return '';
  const f = nextRomaji[0];
  if ('aeiou'.includes(f)) return nextRomaji;
  return f + nextRomaji;
}

export function kanaToRomajiFull(kana: string) {
  const mora = splitIntoMora(kana);
  const out: string[] = [];
  for (let i = 0; i < mora.length; i++) {
    const m = mora[i];
    if (SOKUON.has(m)) {
      const next = mora[i + 1] ?? '';
      const nextRoma = moraToRomaji(next);
      out.push(sokuonify(nextRoma));
      i++;
      continue;
    }
    if (m === 'ん') {
      const next = mora[i + 1];
      const nNext = next ? moraToRomaji(next) : '';
      out.push(/^[aiueoy]/.test(nNext) ? "n'" : 'n');
      continue;
    }
    out.push(moraToRomaji(m));
  }
  return out.join('');
}

/** 제출용: kana 기준으로 meta(stem/ending)의 ro 계산 */
export function computeMetaRomajiFromKana(kanaStr: string) {
  if (!kanaStr.trim()) return { stemRo: '', endingRo: '' };
  const mora = splitIntoMora(kanaStr);
  if (mora.length === 0) return { stemRo: '', endingRo: '' };

  const stemKana = mora.slice(0, -1).join('');
  const endingKana = mora[mora.length - 1];

  const stemRo = stemKana ? kanaToRomajiFull(stemKana) : '';
  const endingRo = kanaToRomajiFull(endingKana);
  return { stemRo, endingRo };
}

/** (옵션) 단순 매핑 기반 변환: 등록된 문자만 매핑.
 *  필요 시 유지하고 싶으면 index.tsx에서 import 해서 사용.
 */
export function kanaToRomajiByTable(src: string) {
  let out = '';
  for (const ch of src.trim()) {
    if (/\s/.test(ch) || /[、。！？・.,!?-]/.test(ch)) {
      out += ch;
      continue;
    }
    const hit = HIRAGANA_BY_JP[ch as keyof typeof HIRAGANA_BY_JP];
    if (!hit) throw new Error(`매핑되지 않은 문자: "${ch}"`);
    out += hit.ro;
  }
  return out;
}

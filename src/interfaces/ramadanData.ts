export interface Root {
  code: number
  status: string
  range: string
  ramadan_year: number
  data: Data
  resource: Resource
}

export interface Data {
  fasting: Fasting[]
  white_days: WhiteDays
}

export interface Fasting {
  date: string
  day: string
  hijri: string
  hijri_readable: string
  time: Time
}

export interface Time {
  sahur: string
  iftar: string
  duration: string
}

export interface WhiteDays {
  status: string
  days: Days
}

export interface Days {
  "13th": string
  "14th": string
  "15th": string
}

export interface Resource {
  dua: Dua
  hadith: Hadith
}

export interface Dua {
  title: string
  arabic: string
  translation: string
  transliteration: string
  reference: string
}

export interface Hadith {
  arabic: string
  english: string
  source: string
  grade: string
}
export type Quran = QuranData[]

export interface QuranData {
  surahName: string
  surahNameArabic: string
  surahNameArabicLong: string
  surahNameTranslation: string
  revelationPlace: string
  totalAyah: number
}

export interface ChapterData {
  surahName: string
  surahNameArabic: string
  surahNameArabicLong: string
  surahNameTranslation: string
  revelationPlace: string
  totalAyah: number
  surahNo: number
  audio: Audio
  english: string[]
  arabic1: string[]
  arabic2: string[]
  bengali: string[]
  urdu: string[]
}

export interface Audio {
  "1": N1
  "2": N2
  "3": N3
  "4": N4
  "5": N5
}

export interface N1 {
  reciter: string
  url: string
  originalUrl: string
}

export interface N2 {
  reciter: string
  url: string
  originalUrl: string
}

export interface N3 {
  reciter: string
  url: string
  originalUrl: string
}

export interface N4 {
  reciter: string
  url: string
  originalUrl: string
}

export interface N5 {
  reciter: string
  url: string
  originalUrl: string
}
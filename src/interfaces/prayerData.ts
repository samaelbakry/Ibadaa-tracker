export interface PrayerData {
  code: number
  status: string
  data: Data
}

export interface Data {
  times: Times
  date: Date
  qibla: Qibla
  prohibited_times: ProhibitedTimes
  timezone: Timezone
}

export interface Times {
  Fajr: string
  Sunrise: string
  Dhuhr: string
  Asr: string
  Sunset: string
  Maghrib: string
  Isha: string
  Imsak: string
  Midnight: string
  Firstthird: string
  Lastthird: string
}

export interface Date {
  readable: string
  timestamp: string
  hijri: Hijri
  gregorian: Gregorian
}

export interface Hijri {
  date: string
  format: string
  day: string
  weekday: Weekday
  month: Month
  year: string
  designation: Designation
  holidays: any[]
  adjustedHolidays: any[]
  method: string
}

export interface Weekday {
  en: string
  ar: string
}

export interface Month {
  number: number
  en: string
  ar: string
  days: number
}

export interface Designation {
  abbreviated: string
  expanded: string
}

export interface Gregorian {
  date: string
  format: string
  day: string
  weekday: Weekday2
  month: Month2
  year: string
  designation: Designation2
}

export interface Weekday2 {
  en: string
}

export interface Month2 {
  number: number
  en: string
}

export interface Designation2 {
  abbreviated: string
  expanded: string
}

export interface Qibla {
  direction: Direction
  distance: Distance
}

export interface Direction {
  degrees: number
  from: string
  clockwise: boolean
}

export interface Distance {
  value: number
  unit: string
}

export interface ProhibitedTimes {
  sunrise: Sunrise
  noon: Noon
  sunset: Sunset
}

export interface Sunrise {
  start: string
  end: string
}

export interface Noon {
  start: string
  end: string
}

export interface Sunset {
  start: string
  end: string
}

export interface Timezone {
  name: string
  utc_offset: string
  abbreviation: string
}

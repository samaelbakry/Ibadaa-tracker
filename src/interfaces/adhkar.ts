export interface Adhkar {
  "أذكار الصباح": AdhkarType[][]
  "أذكار المساء": AdhkarType[][]
}

export interface AdhkarType {
  category: string
  count: string
  description: string
  reference: string
  content: string
}
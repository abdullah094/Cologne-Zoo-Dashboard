type Kilogram = number
type Meter = number

// For simplification in the animal kingdom, let's assume that only 2 genders exist
export type Gender = 'male' | 'female'
export type Fruit = 'banana' | 'apple' | 'cherry'

export interface Animal {
  id: string
  name: string
  species: string
  gender: Gender
  age: number | string
  weight: Kilogram
  height: Meter
  favouriteFruit: Fruit
  requiredFood: Kilogram
}

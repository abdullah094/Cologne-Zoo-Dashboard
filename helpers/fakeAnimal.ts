import type { GenderType } from '@faker-js/faker'
import { faker } from '@faker-js/faker'

import type { Animal, Fruit, Gender } from '../types'

export const fakeAnimal = (): Animal => {
  const gender = faker.helpers.arrayElement(['male', 'female']) as Gender
  const favouriteFruit = faker.helpers.arrayElement(['banana', 'apple', 'cherry']) as Fruit
  const birthDate =  faker.date.past(25)
 
  
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const weight = faker.datatype.float({
    min: 20,
    max: 250,
    precision: 0.1,
  })
  const height = faker.datatype.float({
    min: 0.25,
    max: 4,
    precision: 0.01,
  })
  const ageInYears =  Math.floor(age*2)/2;
  const specie = faker.animal.type();
  let requiredFood = weight+height/250;
 if(ageInYears>20){
   requiredFood/2
 }
 else if(ageInYears<2){
  requiredFood*2
 }

 if(favouriteFruit=='cherry'){
  requiredFood + 28
 }
 if(gender=="male"){
  requiredFood+=requiredFood*0.2;
 }
 if(specie=="fish"){
  requiredFood = 0
 }
 

  if (
    // 5.1: current month is earlier than the birth month?
    monthDifference < 0
    // 5.2: or, same month but current day is earlier than birth day?
    || (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    // 5.3: subtract `1` from the age
    age--;
  }

  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(gender as GenderType),
    species: specie,
    age: ageInYears,
    weight: weight,
    height: height,
    gender,
    favouriteFruit,
    requiredFood: Math.floor(requiredFood),
  }
}

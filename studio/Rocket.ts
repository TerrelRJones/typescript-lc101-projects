import {Astronaut} from "./Astronaut";
import {Cargo} from "./Cargo";
import  {Payload}  from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
        constructor(name: string, totalCapacity: number) {
            this.name = name,
            this.totalCapacityKg = totalCapacity
        }
        sumMass(items: Payload[]): number {
            let massKgSum = 0;
        items.map(item => {massKgSum += item.massKg })

        return massKgSum;
        }

        currentMassKg(): number {
            
           let total1 = this.sumMass(this.astronauts);
           let total2 = this.sumMass(this.cargoItems);
            return  total1 + total2;
        }

        canAdd(item: Payload): boolean{
            if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
                return true;
            } else {
                return false;
            }
        }

        addCargo(cargo: Cargo): boolean {
           if(this.canAdd(cargo)){
               this.cargoItems.push(cargo)
               return true;
           } else {
              return false;
           }
        }

        addAstronaut(astronaut: Astronaut): boolean {
            if(this.canAdd(astronaut)) {
                this.astronauts.push(astronaut)
                return true
            } else {
                return false;
            }
        }

}

import {Injectable} from "angular2/core";
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly(){
        return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(HEROES), 20000));
    }
    
}
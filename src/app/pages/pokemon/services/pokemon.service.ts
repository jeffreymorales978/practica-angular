import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlBase: string = 'https://pokeapi.co/api/v2/pokemon/';
  private next:string | null = null;
  private previous:string | null = null;
  constructor(
    private http: HttpClient
  ) { }

  getPokemons(url:string = this.apiUrlBase): Observable<Pokemons>{
    return this.http.get<Pokemons>(url);
  }

  getpokemon(termino: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrlBase}${termino}`);
  }
  
  set nextURl(url:string | null){
    this.next = url;
  }
  set previousURl(url:string | null){
    this.previous = url;
  }

  get nextURl():string | null{
    return this.next;
  }
  get previousURl():string | null{
    return this.previous;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgClass } from '@angular/common';
import { Pokemons } from '../interfaces/pokemons';

@Component({
  selector: 'pokemon-paginacion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {
  @Output() public eventNewPokemons = new EventEmitter<Pokemons>();

  constructor(
    private _srvPokemon: PokemonService
  ){}

  get nextURl():string | null{
    return this._srvPokemon.nextURl;
  }
  get previousURl():string | null{
    return this._srvPokemon.previousURl;
  }

  loadPokemons(url:string){
    this._srvPokemon.getPokemons(url).subscribe((pokemonsAll) => {
      pokemonsAll.results.forEach((pokemon) => {
        this._srvPokemon.getpokemon(pokemon.name).subscribe((pokemonData) => {
          pokemon.data = pokemonData;
          this._srvPokemon.nextURl = pokemonsAll.next;
          this._srvPokemon.previousURl = pokemonsAll.previous;
          this.eventNewPokemons.emit(pokemonsAll);
        });
      });
    });
  }
}

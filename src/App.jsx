import './App.css'
import { Card } from './components/Card/Card';
import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario/Usuario';
import { Text } from './components/Text';
import { ItemListContainer } from './components/ItemListContainer';
import PokemonList from './components/PokemonList';
import { Pokemon } from './components/Pokemon';

function App() {

  return (
    <div>
      {/* <Usuario nombre="Nereo" edad = {23} nacionalodad = "Peruana" />
      <Usuario nombre="Maria" edad = {28} nacionalodad = "Chilena" />
      <Card /> */}
      {/* <Counter /> */}
      {/* <ItemListContainer /> */}
      {/* <PokemonList /> */}
      <Pokemon />
    </div>
  );
}

export default App

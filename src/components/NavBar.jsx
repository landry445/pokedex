
import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

  const handleSelect = (index) => {
    if (pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
    setPokemonIndex(index);
  };
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleSelect(index)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
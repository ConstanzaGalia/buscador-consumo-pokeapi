import Loader from "./Loader";
import { Row, Button, Input, Col } from "antd";
import PokeCard from "./PokeCard";
import useGet from "../utils/useGet";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

const PokeSection = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [pokemones, loading, nextUrl, prevUrl, error] = useGet({ url: url });
  const [pokeFilter, setPokeFilter] = useState([]);
  const handleChangeUrl = (urlString) => {
    setUrl(urlString);
    window.scrollTo(0, 0);
  };
  const searchPokemon = (value) => {
    const pokemon = pokemones.filter((pokemon) => pokemon.name.toLowerCase() === value.toLowerCase());
    setPokeFilter(pokemon);
  };

  return (
    <div className="pokeSection">
      <Row className="rowInputSearch">
        <Col span={12} offset={6}>
          <Search
            placeholder="Poke búsqueda"
            allowClear
            enterButton={
              <Button
                style={{ background: "rgb(255, 89, 89)", border: "none" }}
              >
                {<SearchOutlined />}
              </Button>
            }
            size="large"
            onSearch={searchPokemon}
          />
        </Col>
      </Row>
      <Loader isLoading={loading} error={error}>
        <Row justify="space-around" className="rowCards">
          {pokeFilter.length > 0
            ? pokeFilter.map((pokemon, index) => (
                <PokeCard pokemon={pokemon} key={index} />
              ))
            : pokemones.map((pokemon, index) => (
                <PokeCard pokemon={pokemon} key={index} />
              ))}
        </Row>
      </Loader>
      <Row>
        {prevUrl === null ? null : (
          <Button
            className="btnPagination"
            onClick={() => handleChangeUrl(prevUrl)}
          >
            Anterior página
          </Button>
        )}
        <Button
          className="btnPagination"
          onClick={() => handleChangeUrl(nextUrl)}
        >
          Siguiente página
        </Button>
      </Row>
    </div>
  );
};

export default PokeSection;

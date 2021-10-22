import { useState, useEffect } from "react";
import { Row, Card, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const DetailPokemon = () => {
  const history = useHistory();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  return (
    <Loader isLoading={loading}>
      <Row className="pokeSection" justify="center">
        <div>
          <Card
            title={<h1 className="namePokemonDetail">{pokemon?.name}</h1>}
            hoverable
            className="shadowCard"
            style={{ width: 500, marginTop: 30 }}
            cover={<img alt="example" src={pokeImg} />}
          >
            <Row justify="space-around">
              <p>
                <span className='span'>Altura: </span>
                {pokemon?.weight}cm
              </p>
              <p>
                <span className='span'>Peso: </span>
                {pokemon?.height}kg
              </p>
              <p>
                <span className='span'>Experiencia Base: </span>
                {pokemon?.base_experience}
              </p>
            </Row>
            <Button type="link" onClick={() => history.goBack()} className="btnGoBack">
              Volver
            </Button>
          </Card>
        </div>
      </Row>
    </Loader>
  );
};

export default DetailPokemon;

import { Card, Button, Row } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

const PokeCard = ({ pokemon }) => {
  const url = pokemon.url.split("/");
  const id = url[url.length - 2];
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  const history = useHistory();

  const viewPokemon = () => {
    history.push(`/detail/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      className="pokeCard"
      cover={<img alt="example" src={pokeImg} />}
    >
      <Meta title={<p className="pokeName">{pokemon.name}</p>} />
      <Row justify="center">
        <Button type="link" onClick={viewPokemon} className="btnViewPoke">
          Ver pokemon
        </Button>
      </Row>
    </Card>
  );
};

export default PokeCard;

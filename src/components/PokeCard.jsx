import {Card} from 'antd';
const { Meta } = Card;

const PokeCard = ({pokemon}) => {
  const url = pokemon.url.split('/');
  const id = url[url.length - 2];
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    className="pokeCard"
    cover={<img alt="example" src={pokeImg} />}
    >
      <Meta title={<p className="pokeName">{pokemon.name}</p>} />
    </Card>
  )
}

export default PokeCard;
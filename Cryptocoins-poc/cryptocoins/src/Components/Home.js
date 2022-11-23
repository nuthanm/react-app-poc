import React from 'react'
import axios from 'axios'
import ImageCard from './ImageCard';

const Home = () => {
    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState([]);

    const handler = e => {
        setSearch(e.target.value);
    }
    
    React.useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=20").then(
            res => setData(res.data.coins)
        )},[]);

  return (
    <>
    <div className='header'>
        <span>Place to see real time crypto currencies rates.</span>
        <input value={search} onChange={handler} placeholder='Search for a crypto'/>
    </div>

    {
        data.length > 0 &&
        <div className='grid-container'>
            {data.filter(crypto => crypto.name.toLowerCase().includes(search.toLocaleLowerCase()))
            .map(crypto =>
                <ImageCard 
                    name = {crypto.name}
                    url = {crypto.icon}
                    rank = {crypto.rank}
                    price = {crypto.price}
                    marketCap = {crypto.marketCap}
                    key = {crypto.id}
                />
            )}
        </div>        
    }
    </>
  )
}

export default Home
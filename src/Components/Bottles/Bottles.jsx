import { useEffect, useState } from 'react';
import './Bottles.css'
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottle, setBottle] = useState([])

    useEffect(() => {
        fetch('Bottle.json')
            .then(res => res.json())
            .then(data => setBottle(data))
    }, [])
    return (
        <div id='width'>

          <div >
          <h1>memorable bottle collection</h1>
            <h2>Bottle: {bottle.length}</h2>
            <div className='bottles-container'>
                {
                    bottle.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>

          </div>

        </div>
    );
};

export default Bottles;
import { Link } from 'react-router-dom';
import { Tovari } from '../Tovari/tovari';

export default function Catalog() {
    return (
        <div>
            <h1>Каталог товаров</h1>
            <ul>
                {Tovari.map((tovar) => (
                    <li key={tovar.id}>
                        <Link to={`/Tovari/${tovar.id}`}>{tovar.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

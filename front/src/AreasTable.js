import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AreasTable = () => {
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/areas')
            .then(response => {
                setAreas(response.data);
            })
            .catch(error => {
                console.error('Il y a eu un problème avec la requête', error);
            });
    }, []);

    return (
        <div>
            <h2>Zone à définir</h2>
            <table>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                </tr>
                </thead>
                <tbody>
                {areas.map(area => (
                    <tr key={area.name}>
                        <td>{area.name}</td>
                        <td>{area.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AreasTable;

import React from 'react'
import { useState } from "react";

const Teste = () => {
    const [name, setName] = useState('Bruno');

    const hadleChangeName = () => {
        setName(prev => prev === 'Bruno' ? 'Eriberto' : 'Bruno')
    }

    return (
    <div>
        <p>
            {name}
        </p>
        <button onClick={hadleChangeName}>Alterar</button>
    </div>
)
}

export {Teste}
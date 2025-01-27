import React, { useState } from 'react';
import './order.css';

export default function Order() {

    const valueToText = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    }

    const sizeOptions = ['küçük', 'orta', 'büyük'];
    const [selectedSize, setSelectedSize] = useState('küçük');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    const doughOptions = ['ince', 'klasik', 'kalın'];
    const [selectedDough, setSelectedDough] = useState('');

    const handleDoughChange = (event) => {
        setSelectedDough(event.target.value);
    }

    return (
        <>
            <main>
                <h2 id='title'>Position Absolute Acı Pizza</h2>
                <div className='upper'>
                    <h2 id='price'>85.50₺</h2>
                    <span id='score'>4.9</span>
                    <span id='comment-count'>(200)</span>
                </div>
                <p id='description'>
                    Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,
                    peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                    fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
                    İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                </p>
                <div id='selection-section'>
                    <div id='size'>
                        <h2>Boyut Seç</h2>
                        {sizeOptions.map((size) => (
                            <div key={size}>
                                <label htmlFor={size}>
                                    <input
                                        id={size}
                                        type='radio'
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={handleSizeChange}
                                    />
                                    {valueToText(size)}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div id='dough'>
                        <h2>Hamur Seç</h2>
                        <label htmlFor='thickness'>
                            <select id='thickness' value={selectedDough} onChange={handleDoughChange}>
                                <option id='placeholder' value="" disabled hidden >
                                    Hamur Kalınlığı
                                </option>
                                {doughOptions.map((dough, index) => (
                                    <option key={index} value={dough}>{valueToText(dough)}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            </main>

            

        </>
    )
}
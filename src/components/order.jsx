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

    const extraIngredients = [
            { id: 1, label: 'Pepperoni' },
            { id: 2, label: 'Sosis' },
            { id: 3, label: 'Kanada Jambonu' },
            { id: 4, label: 'Tavuk Izgara' },
            { id: 5, label: 'Soğan' },
            { id: 6, label: 'Domates' },
            { id: 7, label: 'Mısır' },
            { id: 8, label: 'Sucuk' },
            { id: 9, label: 'Jalepeno' },
            { id: 10, label: 'Sarımsak' },
            { id: 11, label: 'Biber' },
            { id: 12, label: 'Salam' },
            { id: 13, label: 'Ananas' },
            { id: 14, label: 'Kabak' }
    ]

    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (id) => {
        if (checkedItems.length >= 10 && !checkedItems.includes(id)) {
            return;
        }
        setCheckedItems((prevCheckedItems) => {
            if (prevCheckedItems.includes(id)) {
                return prevCheckedItems.filter(item => item !== id);
            } else {
                return [...prevCheckedItems, id];
            }
        });
    };

    const [counter, setCounter] = useState(1);

    const increaseCounter = () => setCounter(value + 1);
    const decreaseCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

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
                        <h3>Boyut Seç</h3>
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
                        <h3>Hamur Seç</h3>
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
                <div id='extra'>
                    <h3>Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className='checkbox-container'>
                        {extraIngredients.map(ingredient => (
                            <label className='container' key={ingredient.id}>
                                <input 
                                    type="checkbox"
                                    checked={checkedItems.includes(ingredient.id)}
                                    onChange={() => handleCheckboxChange(ingredient.id)} 
                                />
                                {ingredient.label}
                                <span className='checkmark'></span>
                            </label>
                    ))}
                    </div>
                </div>
                <div id='note'>
                    <h3>Sipariş Notu</h3>
                    <input 
                        type="text"
                        placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
                </div>
                <hr />
                <div id='bottom'>
                    <div id='counter'>
                        <button
                            className='btn'
                            onClick={decreaseCounter}>
                                -
                        </button>
                        <span id='counter-value'>{counter}</span>
                        <button
                            className='btn'
                            onClick={increaseCounter}>
                                +
                        </button>
                    </div>
                    <div id='buyout'>
                        <h3>Sipariş Toplamı</h3>
                        <span>Seçimler</span>
                        <span>{}</span>
                    </div>
                </div>
            </main>

            

        </>
    )
}
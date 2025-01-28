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

    const increaseCounter = () => setCounter(counter + 1);
    const decreaseCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const basePrice = 85.50;
    const extraIngredientPrice = 5;

    const extraCost = checkedItems.length * extraIngredientPrice;
    const totalPrice = (basePrice + extraCost) * counter;

    return (
        <>
            <header>
                <img src="images/iteration-1-images/logo.svg" alt="logo" />
                <div id='header-container'>
                    <span id='main-page'>Anasayfa</span>
                    <span id='sub-page'>- Sipariş Oluştur</span>
                </div>
            </header>
            <div id='wrapper'>
                <main>
                    <h2 id='title'>Position Absolute Acı Pizza</h2>
                    <div className='upper'>
                        <h2 id='price'>{basePrice.toFixed(2)}₺</h2>
                        <span id='score'>4.9</span>
                        <span id='comment-count'>(200)</span>
                    </div>
                    <p id='description'>
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates,
                        peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
                        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
                        İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </main>
                <section id='selection'>
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
                </section>
                <section id='extra'>
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
                </section>
                <section id='note'>
                    <h3>Sipariş Notu</h3>
                    <input 
                        type="text"
                        placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
                </section>
                <hr />
                <footer>
                    <div id='counter'>
                        <button
                            className='btn'
                            onClick={decreaseCounter}>
                               -
                        </button>
                        <div id='counter-value'>{counter}</div>
                        <button
                            className='btn'
                            onClick={increaseCounter}>
                                +
                        </button>
                    </div>
                    <div id='footer-couple'>
                        <div id='buyout'>
                            <h3 id='left-title'>Sipariş Toplamı</h3>
                            <div id='left-col'>
                                <span style={{ visibility: checkedItems.length > 0 ? "visible" : "hidden" }}>Seçimler</span>
                                <span style={{ visibility: checkedItems.length > 0 ? "visible" : "hidden" }}>{extraCost.toFixed(2)}₺</span>
                            </div>
                            <div id='right-col'>
                                <span>Toplam</span>
                                <span>{totalPrice.toFixed(2)}₺</span>
                            </div>
                        </div>
                        <button id='complete-btn'>
                            <h3>SİPARİŞ VER</h3>
                        </button>
                    </div>    
                </footer>
            </div>
        </>
    )
}
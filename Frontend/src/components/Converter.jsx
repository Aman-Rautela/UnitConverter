import React, { useState } from 'react'
import './Converter.css';
function Converter(){
    const[category, setCategory] = useState('length');
    const[from, setFrom] = useState('');
    const[to, setTo] = useState('');
    const[value, setValue] = useState('');
    const[result, setResult] = useState(null);
    const categories = {
        length: 'Length',
        temp: 'Temperature',
        weight: 'Weight'
    }

    const units = {
    length: ['millimeter', 'centimeter', 'meter', 'kilometer', 'inch', 'foot', 'yard', 'mile'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    weight: ['milligram', 'gram', 'kilogram', 'ounce', 'pound']
  };

    async function handleSubmit(e){
        e.preventDefault();
        if(!from || !to || !value){
            alert(" - Enter the required Fields - ")
            return;
        }else{
            try{
                const res = await fetch(`http://localhost:3000/${category}`,{
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        from, to, value : Number(value)
                    })
                });
                const data = await res.json();
                setResult(data.result);
            }catch(err){
                console.log(`-------OOPSS!! ERROR -  ${err}`);
            }
        }
    }

  return (
    <div className='converter-container'>
        <>
            <form onSubmit={handleSubmit}>
                <label>Select the Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {Object.keys(categories).map((key) => (
                        <option key={key} value={key}>
                            {categories[key]}
                        </option>
                    ))}
                </select>

                    <br/><br/>


                    <input
                    type='number'
                    value={value}
                    placeholder='Enter the Value'
                    onChange={(e) => setValue(e.target.value)} />

                    <br/><br/>


                    <label>FROM UNIT : </label>
                    <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}>
                    <option value=''>---SELECT FROM UNIT---</option>
                    {units[category].map((unit) =>(
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                    </select>

                    <br/>

                    <label>TO UNIT : </label>
                    <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}>
                        <option value= ''>---SELECT TO UNIT---</option>
                        {units[category].map((unit) => (
                            <option value={unit} key={unit}>
                                {unit}
                            </option>                            
                        ))}
                    </select>

                    <br/><br/>

                    <button type='submit'>Convert</button>

                    {result !== null && (
                        <p>
                            RESULT IS: <strong>{Number(result).toFixed(2)}{to}</strong>
                        </p>
                    )}
            </form>
        </>
    </div>
  )
}

export default Converter
import currency from 'currency.js'

function InputNumber() {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value
    const numberValue = parseFloat(inputValue)
    const randomNumber = Math.random()
    const sum = currency(numberValue).add(randomNumber).value
    console.log(sum)
  }

  return (
    <li>
      <input type="number" onChange={handleChange} />
    </li>
  )
}

export default InputNumber

let values = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

  let total = 0;
  for(let i = 0; i < values.length; i++) {
    total += values[i].amount 
  }

for(let i = 0; i < values.length; i++) {
    let spendingItems = document.querySelector('.spending__items')

    let divEl = document.createElement("div")
    divEl.classList.add('spending__item');

    let pEl = document.createElement("p")
    pEl.classList.add('spending__item__value');

    let bar = document.createElement("div")
    bar.classList.add('spending__item__bar');

    let day = document.createElement("p")
    day.classList.add('spending__item__day');

    

    let dayValue = document.createTextNode(values[i].day)
    let amount = document.createTextNode(values[i].amount)
  
    let percentage = values[i].amount / [total / 100]
    let tamanho = spendingItems.clientHeight - 40 
    bar.style.height = percentage * tamanho / 100 * 3 + 'px'

    day.appendChild(dayValue)
    pEl.appendChild(amount)
    divEl.appendChild(pEl)
    divEl.appendChild(bar)
    divEl.appendChild(day)
    

    spendingItems.appendChild(divEl)
}

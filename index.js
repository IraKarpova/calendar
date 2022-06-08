const body = document.body

const table = document.createElement('table')
body.append(table)

for (let i = 0; i < 3; i++) {
  let tr = document.createElement('tr')
  table.append(tr)
  tr.style.color = "blue"

  for (let j = 1; j < 4; j++) {
    let td = document.createElement('td')
    td.innerText = i * 3 + j
    tr.append(td)
    td.style.backgroundColor = "yellow"
  }
}














let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] = 'Sim'

  for (let key in info) {
      console.log(info[key])
  }
  
let info2 = {
personagem: "Tio Patinhas",
origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
nota: "O último MacPatinhas",
recorrente: "Sim",
}

for (let key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key])
    }
}
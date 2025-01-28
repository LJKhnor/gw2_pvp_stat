export function getClassColor(value: string){
  switch(value.toLowerCase()){
    case 'elementalist':
      return 'color: red'
      break
    case 'engineer':
      return 'color: orange'
      break
    case 'guardian':
      return 'color: lightblue'
      break
    case 'mesmer':
      return 'color: rose'
      break
    case 'necromancer':
      return 'color: green'
      break
    case 'ranger':
      return 'color: yellow'
      break
    case 'revenant':
      return 'color: grey'
      break
    case 'thief':
      return 'color: brown'
      break
    case 'warrior':
      return 'color: lightorange'
      break
    default:
      return 'color: var(--color-theme)'
      break
  }
}

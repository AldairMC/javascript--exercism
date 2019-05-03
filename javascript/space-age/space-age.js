 const convert = (planet, time) => {
    switch(planet){
      case 'earth':
        return time / 31557600
      break;
      case 'mercury':
        return time / (0.2408467*31557600)
      break;
      case 'venus':
        return time / (0.61519726*31557600)
      break;
      case 'mars':
        return time / (1.8808158*31557600)
      break;
      case 'jupiter':
        return time / (11.862615*31557600)
      break;
      case 'saturn':
        return time / (29.447498*31557600)
      break;
      case 'uranus':
        return time / (84.016846*31557600)
      break;
      case 'neptune':
        return time / (164.79132*31557600)
      break;
    }
  }

  const age = (planet, time) => {
    return Number(convert(planet, time).toFixed(2))
  }
  
  export {age}
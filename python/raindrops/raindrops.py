#Raindrops exercise

RAIN = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}

def convert(number):
  aux = ""
  for i in RAIN:
    if number % i == 0:  
      aux += RAIN[i]  
  return (aux or str(number))

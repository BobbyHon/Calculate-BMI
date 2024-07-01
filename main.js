function bmi(weight, height) {
    return check(weight / Math.pow(height, 2));
  }
  function check(bmi){
    if (bmi <= 18.5) return 'Underweight'
    if (bmi <= 25) return 'Normal'
    if (bmi <= 30) return 'Overweight'
    else return 'Obese'
  }
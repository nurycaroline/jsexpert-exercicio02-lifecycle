class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    return boolean + number;
  }

  getWeirdStringBooleanMath(string, boolean) {
    return string + boolean;
  }

  getWeirdStringBooleanMath2(string, boolean) {
    return string - boolean;
  }

  getWeirdStringNumberMath(string, number) {
    return string - number;
  }
}

module.exports = WeirdMathService;

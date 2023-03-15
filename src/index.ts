class Calculator {
 public sum(a: number, b: number): number {
    return a + b;
  }
  
  public subtract(a: number, b: number): number {
    return a - b;
  }
  
  public multiply(a: number, b: number): number {
    return a * b;
  }
  
  public divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('cannot be divided by zero');
    }
  
    return a / b;
  }
}

export default Calculator;



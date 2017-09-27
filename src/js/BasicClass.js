class BasicClass {
  constructor(height, width) {
    this.name = 'You';
    this.height = height;
    this.width = width;
  }

  static calculateArea(area) {
    return area.height * area.width;
  }

  normalCalculateArea() {
    return this.width * this.height;
  }
}

export default BasicClass;

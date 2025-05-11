const student = {
  name: "Shivam",
  class: "IX",
  hindi: 90,
  english: 80,
  math: 70,
  // below getAvvg() function is a method because it defined inside an object
  getAvg: function () {
    // console.log(this);
    let avg = (this.hindi + this.english + this.math) / 3;
    console.log(avg);
  },
};

student.getAvg();

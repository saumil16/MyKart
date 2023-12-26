function calculateSize() {
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var height = document.getElementById('height').value;
    var chestSize = document.getElementById('chestSize').value;
  
    // Convert input values to numbers for comparison
    height = parseInt(height);
    chestSize = parseInt(chestSize);
  
    var size = determineSize(gender, height, chestSize);
  
    document.getElementById('result').innerHTML = "Your recommended size is: " + size;
  }
  
  function determineSize(gender, height, chestSize) {
    if (gender === 'male') {
      if ((height >= 170 && height <= 190) && (chestSize >= 28 && chestSize <= 34)) {
        return 'XL';
      } else if ((height >= 170 && height <= 190) && chestSize < 25) {
        return 'Large';
      } else if ((height >= 155 && height < 170) && (chestSize >= 25 && chestSize <= 34)) {
        return 'Large';
      } else if ((height >= 130 && height <= 140) && (chestSize >= 25 && chestSize <= 34)) {
        return 'Small';
      } else if ((height > 140 && height <= 155) && (chestSize >= 25 && chestSize <= 34)) {
        return 'Medium';
      }
    } else if (gender === 'female') {
      if ((height >= 170 && height <= 190) && (chestSize >= 28 && chestSize <= 34)) {
        return 'XL';
      } else if ((height >= 170 && height <= 190) && chestSize < 28) {
        return 'Large';
      } else if ((height >= 155 && height < 170) && (chestSize >= 28 && chestSize <= 34)) {
        return 'Large';
      } else if ((height >= 130 && height <= 140) && (chestSize >= 28 && chestSize <= 34)) {
        return 'Small';
    } else if ((height < 130 ) && (chestSize >= 25 && chestSize <= 32)) {
        return 'XS';
    } else if ((height <= 130 ) && (chestSize > 32)) {
        return 'Small';
      } else if ((height > 140 && height <= 155) && (chestSize >= 28 && chestSize <= 34)) {
        return 'Medium';
      }
    }
  
    // Default size if no condition is met
    return 'Medium';
  }
  
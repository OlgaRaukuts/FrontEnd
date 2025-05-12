const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this.field = field;
    this.x = 0;
    this.y = 0;
    this.field[0][0] = pathCharacter;
  }

playGame(){
  let playing = true;
  while(playing){
    this.print();
    this.askQuestion();
      if (!this.isInBounds()) {
        console.log('Out of bounds instruction!');
        playing = false;
        break;
      } else if (this.isHole()) {
        console.log('Sorry, you fell down a hole!');
        playing = false;
        break;
      } else if (this.isHat()) {
        console.log('Congrats, you found your hat!');
        playing = false;
        break;
      }
      // Update the current location on the map
      this.field[this.y][this.x] = pathCharacter ;
  }
  }
 askQuestion() {
    const answer = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'U':
        this.y -= 1;
        break;
      case 'D':
        this.y += 1;
        break;
      case 'L':
        this.x -= 1;
        break;
      case 'R':
        this.x += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.askQuestion();
        break;
    }
  }

  isInBounds() {
    return (
      this.y >= 0 &&
      this.x >= 0 &&
      this.y < this.field.length &&
      this.x < this.field[0].length
    );
  }

  isHat() {
    return this.field[this.y][this.x] === hat;
  }

  isHole() {
    return this.field[this.y][this.x] === hole;
  }


print(){
  const displayString = this.field.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
    }

static generateField(height, width) {
  let field = [];

    for (let y = 0; y < height; y++) {
      field[y] = [];
      for (let x = 0; x < width; x++) {
        field[y][x] = fieldCharacter;
      }
    }

    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
     while (hatLocation.x === 0 && hatLocation.y === 0) {
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }

 field[hatLocation.y][hatLocation.x] = hat;

 //set holes location
 const holesLocation = {
  x: Math.floor(Math.random() * width),
  y: Math.floor(Math.random() * height)
}
while (holesLocation.x === 0 && holesLocation.y === 0) {
  holesLocation.x = Math.floor(Math.random() * width);
  holesLocation.y = Math.floor(Math.random() * height);
}

field[holesLocation.y][holesLocation.x] = hole;

    return field;
  }





}





const myfield = new Field(Field.generateField(2, 5));
//myfield.print();
myfield.playGame();

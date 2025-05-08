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
  let currentlyPlaying = true;
  let moveSelection;
  while(currentlyPlaying){
    console.log(this.print);
    moveSelection = prompt("Please make a move. (Up = 'u' Down = 'd' Left = 'l' Right = 'r'");
    if(moveSelection === 'u' && this.y !== 0){
      this.y--;
    }else if(moveSelection === 'u' && this.y === 0){
      console.log('You are outside the game field');
    }else if(moveSelection === 'd' && this.y !== (height - 1)){
      this.y++;
    }else if(moveSelection === 'd' && this.y === (height - 1)){
      console.log('You are outside the game field');
    }else if(moveSelection === 'l' && this.x !==0){
      this.x--;
    }else if(moveSelection === 'l' && this.x ===0){
      console.log('You are outside the game field');
    }else if(moveSelection === 'r' && this.x !== (width - 1)){
      this.x++;
  }else if(moveSelection === 'r' && this.x === (width - 1)){
      console.log('You are outside the game field');
}else {
        console.log('Invalid Entry');
      }

if(this.field[this.x][this.y] === hat){
  console.log("You win!");
        currentlyPlaying = false;
        break;
} else if(this.field[this.x][this.y] === hole){
  console.log("You lose!");
        currentlyPlaying = false;
        break;
}else {
        this.field[this.y][this.x] = pathCharacter;
        console.log(this.print());
      }
  }

}
print(){
  const displayString = this.field.map(row => {
        return row.join('');
      }).join('\n');
    console.log(displayString);
    }

static generateField(height, width) {
    const field = new Array(height).fill(0).map(el => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const randomArray = Math.random();
        field[y][x];
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
    return field;
  }



}



const myfield = new Field(Field.generateField(10, 10));
myfield.playGame();


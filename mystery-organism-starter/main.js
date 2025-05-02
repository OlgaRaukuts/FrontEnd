const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * array.length);
      let newBase = returnRandBase();
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let similarity = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          similarity++;
        }
      }
      let persantage = Math.floor((similarity / this.dna.length) * 100);
      console.log(
        `specimen #1 and specimen #2 have ${persantage}% DNA in common`
      );
    },
    willLikelySurvive() {
      let newBases = [];
      for (let i= 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          newBases.push([i]);
        } 
      }
      if (newBases.length/this.dna.length > 0.6) {
        return true;
      } else {
        return false;
      }
    },
      complementStrand(){
        let complementedDna = [];
        this.dna.forEach((element) => {
          let baseAnothertItem;
          switch(element){
            case 'A':
            baseAnothertItem = 'T';
            break;
            case 'T':
            baseAnothertItem = 'A';
            break;
            case 'G':
            baseAnothertItem = 'C';
            break;
            case 'C':
            baseAnothertItem = 'G';
            break;
          }
          complementedDna.push(baseAnothertItem);
        });
      return complementedDna;
      }
  };
};

const newDna = pAequorFactory(5, mockUpStrand());
console.log(newDna);
//console.log(newDna.mutate());
//console.log(newDna.dna);
console.log(newDna.compareDNA(pAequorFactory(3, mockUpStrand())));

console.log(newDna.willLikelySurvive());









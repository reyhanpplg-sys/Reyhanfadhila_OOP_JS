class Hewan {
    bersuara() {
        console.log("Hewan bersuara");
    }
}

class cuking extends Hewan {
    mengeong() {
        console.log("Meong!");
    }
}

const Cuking = new cuking();
Cuking.bersuara();
Cuking.mengeong();
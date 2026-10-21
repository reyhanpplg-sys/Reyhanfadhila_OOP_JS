class Mobil {
    constructor(merk){
        this.merk = merk;
    }
    nyalakan() {
        console.log("Menyalakan mobil " + this.merk);
        this.#prosesMesin();
        console.log("Mobil siap digunakan!");
    }
    #prosesMesin() {
        console.log("Memeriksa mesin...");
        console.log("Mnegaktifkan sistem kendaraan...");
    }
}
const mobil1 = new Mobil("toyota supra");
mobil1.nyalakan();
const mobilsport = new Mobil("jesko");
mobilsport.nyalakan();
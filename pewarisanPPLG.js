class PPLG {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    perkenalan() {
        console.log("halo, saya dari siswa kelas XI - pplg " + this.nama);
        console.log("Umur saya adalah : " + this.umur);
    }
}

class Siswa extends PPLG{
    constructor(nama,umur, kelas){
        super(nama, umur);
        this.kelas = kelas;
    }
    belajar(){
        console.log(this.nama + " sedang belajar");
    }
}

const siswa1 = new Siswa("rahul", 18, "XI PPLG");
siswa1.perkenalan();
siswa1.belajar();
console.log("kelas : " + siswa1.kelas);
class Siswa {
    constructor(nama, kelas, nilai1, nilai2) {
        this.nama = nama;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }

    tampilkanData() {
        console.log("=== DATA SISWA ===");
        console.log("Nama : " + this.nama);
        console.log("kelas : " + this.kelas);
    }

    hitungRataRata() {
        return (this.nilai1 + this.nilai2) / 2;
    }

    cekKelulusan() {
        if (this.hitungRataRata() >= 75) {
            return "lulus";
        } else {
            return "belum lulus";
        }
    }
}

const siswa1 = new Siswa("rahul", "XI-PPLG 1 ", 80, 90);
const siswa2 = new Siswa("baim", "XI-PPLG 2 ", 70, 60);

siswa1.tampilkanData();
console.log("Rata- rata : " + siswa1.hitungRataRata());
console.log("Status : " + siswa1.cekKelulusan());

siswa2.tampilkanData();
console.log("Rata- rata : " + siswa2.hitungRataRata());
console.log("Status : " + siswa2.cekKelulusan());

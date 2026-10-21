class siswa{
    constructor(nama,kelas){
        this.namasiswa = nama;
        this.kelassiswa = kelas;
    }
    perkenalan(){
        console.log(`nama saya : ${this.namasiswa}`);
        console.log(`kelas saya : ${this.kelassiswa}`);
    }
    seragam(){
        console.log("saya menggunakan seragam praktek");
    }
};

const siswa1 = new siswa("rahul", "XI-PPLG");
siswa1.perkenalan();
siswa1.seragam();

const siswa2 = new siswa("CAU", "XI-PPLG");
siswa2.perkenalan();
siswa2.seragam();

const siswa3 = new siswa("rehan", "XI-PPLG");
siswa3.perkenalan();
siswa3.seragam();

class produk{
    constructor(nama,harga,jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }
    tampilkanInfo(){
        console.log("nama produk : " + this.nama);
        console.log("harga produk : " + this.harga);
        console.log("jumlah produk : " + this.jumlah);
    }
    hitungdiskon(persen){
        return this.harga-(this.harga * persen/100);
    }
};

const produk1 = new produk("keyboard",150000,2);
produk1.tampilkanInfo();
console.log(
    "harga setelah diskon: Rp" +
    produk1.hitungdiskon(10)
);

const rtx = new produk("rtx-9090",5000000,1);
rtx.tampilkanInfo();
console.log(
    "harga setelah diskon: Rp" +
    rtx.hitungdiskon(50)
);
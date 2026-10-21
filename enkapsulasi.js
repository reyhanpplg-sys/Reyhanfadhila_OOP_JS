class Rekening {
     #saldo = 0;

    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
        }else {
            console.log("setor harus > 0");
        }
     }

    tarik(jumlah){

        if(jumlah > 0 && jumlah <= this.#saldo){
            this.#saldo -= jumlah;
            console.log("penarikan saldo berhasil");
        }else {
            console.log("penarikan saldo gagal");
        }
    }
    lihatSaldo() {
        return this.#saldo;
    }
}

const rekening = new Rekening();
rekening.setor(50000);
console.log(rekening.tarik(10000));
console.log(rekening.lihatSaldo());
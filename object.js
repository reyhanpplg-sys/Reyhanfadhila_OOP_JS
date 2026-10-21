const books = {
    judul: "The Alchemist",
    penulis: "paulo coelho",
    tahun_terbit: 1988,

    dibaca: function() {
        console.log("buku ini telah di baca" + this.judul);
    }
};

const car = {
    nama: "jesko",
    warna: "white",
    speed: 0,

    melaju: function() {
        this.speed += 10;
        console.log("the car is moving : " + this.speed + " km/jam");
    }
};

console.log(car.nama)
car.melaju();

console.log(books.judul)
books.dibaca();
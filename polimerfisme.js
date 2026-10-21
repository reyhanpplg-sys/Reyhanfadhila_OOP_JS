class cuking {
    bersuara() {
        console.log("meong :V");
    }
}

class anjing {
    bersuara() {
        console.log("pinjam 100");
    }
}

class manuk {
    bersuara() {
        console.log("kicau mania")
    }
}

const hewan = [new cuking(), new anjing()];

hewan.forEach(function(item) {
    item.bersuara();
});

const hewan3 = new manuk();
hewan3.bersuara();
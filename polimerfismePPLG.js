class fadilah {
    skill() {
        console.log("fadilah mampu membuat halaman html sederhana backend");
    }
    level() {
        console.log("999999")
    }
}

class baim {
    skill() {
        console.log("baim mampu membuat halaman html");
    }
    level() {
        console.log("-1")
    }
}

class rama {
    skill() {
        console.log("rama mampu membuat design ui/ux");
    }
    level() {
        console.log("1")
    }
}

const coding = [new fadilah(), new baim()];

coding.forEach(function(item) {
    item.skill();
    item.level();
});

const coding2 = new rama();
coding2.skill();
coding2.level();

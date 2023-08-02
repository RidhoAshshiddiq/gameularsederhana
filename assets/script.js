class Ular {
    constructor() {
        this.body = [
            { x: 10, y: 10 },
        ];
        this.arah = { x: 1, y: 0 };
        this.makanan = this.generatedMakanan();
    }

    generatedMakanan() {
        return {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        }
    }

    gerak() {
        const kepala = {
            x: this.body[0].x + this.arah.x,
            y: this.body[0].y + this.arah.y
        }
        this.body.unshift(kepala);
        if (kepala.x === this.makanan.x && kepala.y === this.makanan.y) {
            this.makanan = this.generatedMakanan();
        } else {
            this.body.pop();
        }
    }

    rubahArah (x,y) {
        if(this.arah.x!==-x && this.arah.y!==-y) {
            this.arah.x=x;
            this.arah.y=y;
        }
    }
}

const cvs = document.getElementById("ular");
const context = cvs.getContext("2d");
const ukuranKotak = 20;
const ular = new Ular();
document.addEventListener("keydown", (event) => {
    switch (event.key){
        case "ArrowUp":
        console.log("panahatas");
        ular.rubahArah(0,-1);
        break;

        case "ArrowDown":
        console.log("panahbawah");
        ular.rubahArah(0,1);
        break;

        case "ArrowLeft":
        console.log("panahkiri");
        ular.rubahArah(-1,0);
        break;

        case "ArrowRight":
        console.log("panahkanan");
        ular.rubahArah(1,0);
        break;
    } 
});
function gambar() {
    context.clearRect(0, 0, cvs.width, cvs.height)
    gambarUlar();
    gambarMakananUlar();
    ular.gerak();
}

function gambarUlar() {
    context.fillStyle = "#00f"
    for (const segment of ular.body) {
        console.log(segment.x * ukuranKotak, segment.y * ukuranKotak);
        context.fillRect(segment.x * ukuranKotak, segment.y * ukuranKotak, ukuranKotak, ukuranKotak)
    }
}

function gambarMakananUlar() {
    context.fillStyle = "#f00";
    context.fillRect(ular.makanan.x * ukuranKotak, ular.makanan.y * ukuranKotak, ukuranKotak, ukuranKotak)
}

function coba() {
    console.log(ular.makanan.x);
}
setInterval(gambar, 1000)
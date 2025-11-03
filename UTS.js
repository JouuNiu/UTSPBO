class kuotaCuti{
    constructor(kuota  ){
        this.kuota = kuota;
        this.cutiTahunan = 12;
        this.cutiSakit = 2;
        this.cutilahir = 90;
    }
}
class cutiTahun extends kuotaCuti{
    getCuti(){
    if(this.kuota <= this.cutiTahunan ){
        return `Cuti yang sudah anda ambil sebanyak ${this.kuota} hari`;
    } else {
        return `Kuota cuti tahunan anda sudah melebihi batas maksimal`;
    }
    }
}

class cutiSakitt extends kuotaCuti{
    getCutiSakit(){
    if(this.kuota <= this.cutiSakit ){
        return `Cuti yang sudah anda ambil sebanyak ${this.cutiSakit} hari`;
    } else {
        return `Cuti sakit anda sudah melebihi batas maksimal`;
        }
    }
}


class cutiMelahirkan extends kuotaCuti{
    getCutiMelahirkan(){
    if(this.kuota <= this.cutiMelahirkan){
        return `Cuti yang sudah anda ambil sebanyak ${this.cutiMelahirkan} hari`;  
    } else {
        return `Cuti melahirkan anda sudah melebihi batas maksimal`;
    }
}
}


const karyawan1 = new cutiTahun (10);
console.log(karyawan1.getCuti());
const karyawan2 = new cutiSakitt (2);
console.log(karyawan2.getCutiSakit());
const karyawan3 = new cutiMelahirkan (90);
console.log(karyawan3.getCutiMelahirkan());
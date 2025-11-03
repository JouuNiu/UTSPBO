class kuotaCuti{
    constructor(nama, cutiTahunan, cutiSakit, cutiMelahirkan ){
        this.nama = nama;
        this.cutiTahunan = 12;
        this.cutiSakit = 2;
        this.cutiMelahirkan = 90;
    }
}
class cutiTahunan extends kuotaCuti{
    getCuti(){
    if(this.cutiTahunan > 12){
        return `Cuti Tahunan anda sudah melebihi batas maksimal`;
    } else {
        return `Sisa cuti tahunan anda adalah ${this.cutiTahunan} hari`;
    }
}
}

class cutiSakit extends kuotaCuti{
    getCutiSakit(){
    if(this.cutiSakit > 2){
        return `Cuti Sakit anda sudah melebihi batas maksimal`;
    } else {
        return `Sisa cuti sakit anda adalah ${this.cutiSakit} hari`;
        }
    }
}


class cutiMelahirkan extends kuotaCuti{
    getCutiMelahirkan(){
    if(this.cutiMelahirkan > 90){
        return `Cuti Melahirkan anda sudah melebihi batas maksimal`;  
    } else {
        return `Sisa cuti melahirkan anda adalah ${this.cutiMelahirkan} hari`;
    }
}
}

const karyawan1 = new kuotaCuti('Alya', 10, 1, 80);
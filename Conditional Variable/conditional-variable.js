// conditional variable
let umur = prompt('Silahkan masukkan Usia anda Saat ini:')

const keterangan = umur > 50 ? 'Anda Sudah Tua' : 'Anda Masuh Muda';
alert(keterangan)

let beratBadan = prompt('Silahkan masukkan berat badan anda:')
const keteranganAnd = beratBadan < 50 && 'Anda Kurus';
alert(keteranganAnd)

let qna = prompt('Sebutkan Nama Lengkap Presiden Indonesia Keempat:')
let keteranganOr = qna == 'Aabdurrahman Wahid' || 'Maaf tebakan anda salah silahkan lihat papan nama berikut';
alert(keteranganOr)


// Map & Filter

const listPresiden = [
    {
        Nama: 'Soekarno',
        MasaJabatan: 50
    },
    {
        Nama: 'Soeharto',
        MasaJabatan: 32
    },
    {
        Nama: 'Bj Habibie',
        MasaJabatan: 3
    },
    {
        Nama: 'Abdurrahman Wahid',
        MasaJabatan: 5
    },
    {
        Nama: 'Megawati',
        MasaJabatan: 5
    }

]

const listNamaPresiden = listPresiden.map((presiden) => presiden.Nama)
alert(listNamaPresiden)

const listMasaJabatanPresiden = listPresiden.filter((value) => value.MasaJabatan > 5)
console.log(listMasaJabatanPresiden)
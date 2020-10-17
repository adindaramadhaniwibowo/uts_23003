export interface Product {
    id: string;
    nama: string;
    harga: number;
    stok: number;
    produkType: string;
    imgUrl: string[];   
    model: string;
    speed: number;
    ukuran: number;
    chipset: string;
    processor: string;
    baseClock: number;
    boostClock: number;
    jumlahCore: number;
    jumlahThread: number;
}
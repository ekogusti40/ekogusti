import Head from 'next/head'
import Menu from '../components/menu';
export default function Tentang() {
return (
<div>
<Head>
<title>Tentang Kami</title>
</Head>
<Menu />
<div>
<h1>Tentang Kami</h1>
<h5>Mahasiswa Stikom Banyuwangi</h5>
<p>Nama  : Eko Gusti Putro</p>
<p>Tempat, Tgl Lahir : Banyuwangi, 28 Agustus 1999</p>
<p>Jenis Kelamin : Laki-Laki</p>
<p>Agama : Islam</p>
<p>Alamat : Banyuwangi</p>
<p>Kelas : SM4.1 (S1 Reguler Sore)</p>
<p>Email : ekogusti40@gmail.com</p>
</div>
</div>
);
}

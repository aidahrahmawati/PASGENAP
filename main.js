import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNYqYJVYPTZRIK7pKZ4shbQ4igjseQpLM",
  authDomain: "insan-cemerlang-d724d.firebaseapp.com",
  projectId: "insan-cemerlang-d724d",
  storageBucket: "insan-cemerlang-d724d.appspot.com",
  messagingSenderId: "630693962922",
  appId: "1:630693962922:web:a9447f760b858bcf781cd3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ambilAbsensiSiswa() {
  const refDokumen = collection(db, "absensi");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);

  let hasil = [];
  cuplikanKueri.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      tanggal: dok.data().tanggal,
      nis: dok.data().nis,
      alamat: dok.data().alamat,
      noTlpn: dok.data().noTlpn,
     kelas: dok.data().kelas,
     keterangan: dok.data().keterangan,
    });
  });
  
    return hasil;
}
  
  export function formatAngka(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export async function tambahAbsensiSiswa(nama, tanggal, nis, alamat, noTlpn, kelas, keterangan) {
  try {
    const dokRef = await addDoc(collection(db, 'absensi'), {
      nama: nama,
      tanggal:tanggal,
      nis: nis,
      alamat: alamat,
      noTlpn: noTlpn,
      kelas: kelas,
      keterangan: keterangan
    });
    console.log('Berhasil menambah absensiSiswa ' + dokRef.id);
  } catch (e) {
    console.log('Gagal menambah absensiSiswa ' + e);
  }
}

export async function hapusAbsensiSiswa(docId) {
  await deleteDoc(doc(db, "absensi", docId));
}  

export async function ubahAbsensi(docId, nama, tanggal, nis, alamat, noTlpn, kelas, keterangan) {
  await updateDoc(doc(db, "absensi", docId), {
    nama: nama,
    tanggal: tanggal,
    nis: nis,
    alamat: alamat,
    noTlpn: noTlpn,
    kelas: kelas,
    keterangan: keterangan
  });
}

export async function ambilAbsensi(docId) {
  const docRef = await doc(db, "absensi", docId);
  const docSnap = await getDoc(docRef);

  return await docSnap.data();
}

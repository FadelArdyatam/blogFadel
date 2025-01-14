import cek from '../assets/cek.jpg';
import image from '../assets/image.png'



export const blogPosts = [
  {
    id: 1,
    title: "Praktikum Jaringan Dasar: Pengenalan Topologi Jaringan",
    author: "Dr. Ahmad Fauzi",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: "/api/placeholder/100/100",
    date: "14 Jan 2025",
    readTime: "5 min",
    category: "Praktikum",
    content: `Pada praktikum ini, kita akan mempelajari berbagai topologi jaringan seperti topologi bus, star, ring, dan mesh. Setiap topologi memiliki kelebihan dan kekurangan tersendiri.
    
    Topologi bus menggunakan kabel tunggal sebagai media transmisi, sedangkan topologi star menghubungkan semua perangkat ke sebuah hub atau switch. Topologi ring menghubungkan perangkat dalam bentuk lingkaran, dan topologi mesh menghubungkan setiap perangkat secara langsung.
    
    Praktikum ini akan membantu memahami bagaimana memilih topologi yang sesuai untuk kebutuhan jaringan.`,
    tags: ['Topologi Jaringan', 'Jaringan Dasar', 'Praktikum'],
    imageUrl: image,
    likes: 35,
    comments: 10,
    shares: 5
  },
  {
    id: 2,
    title: "Praktikum Konfigurasi Router dan Switch",
    author: "Dr. Budi Santoso",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: image,
    date: "15 Jan 2025",
    readTime: "8 min",
    category: "Praktikum",
    content: `Praktikum ini akan membahas cara mengkonfigurasi router dan switch menggunakan Cisco Packet Tracer. Router berfungsi untuk menghubungkan jaringan yang berbeda, sedangkan switch digunakan untuk menghubungkan perangkat dalam jaringan yang sama.
    
    Langkah-langkah yang akan dipelajari meliputi pengaturan IP address, konfigurasi routing static dan dynamic, serta pengaturan VLAN pada switch. Praktikum ini sangat penting untuk memahami manajemen jaringan yang efisien.`,
    tags: ['Router', 'Switch', 'Cisco Packet Tracer'],
    imageUrl: "https://th.bing.com/th/id/OIP.1ndorypMclIlGbfueIzCNwHaE3?rs=1&pid=ImgDetMain",
    likes: 45,
    comments: 15,
    shares: 7
  },
  {
    id: 3,
    title: "Praktikum Implementasi Firewall dan VPN",
    author: "Dr. Budi Santoso",
    authorRole: "Dosen Keamanan Jaringan",
    authorAvatar: "../assets/image.png",
    date: "16 Jan 2025",
    readTime: "10 min",
    category: "Praktikum",
    content: `Praktikum ini fokus pada implementasi firewall dan VPN untuk meningkatkan keamanan jaringan. Firewall digunakan untuk memfilter lalu lintas jaringan yang tidak diinginkan, sedangkan VPN (Virtual Private Network) digunakan untuk membuat koneksi aman melalui jaringan publik.
    
    Kita akan mempelajari cara mengkonfigurasi firewall menggunakan pfSense dan membuat koneksi VPN menggunakan OpenVPN. Praktikum ini sangat berguna untuk memahami prinsip-prinsip keamanan jaringan.`,
    tags: ['Firewall', 'VPN', 'Keamanan Jaringan'],
    imageUrl: "https://static.vecteezy.com/system/resources/previews/000/600/578/original/network-firewall-icon-illustration-vector-on-white-background.jpg",
    likes: 50,
    comments: 20,
    shares: 10
  },
  {
    id: 4,
    title: "Praktikum Analisis Paket Data dengan Wireshark",
    author: "Dr. Ahmad Fathurrahman",
    authorRole: "Dosen Analisis Jaringan",
    authorAvatar: cek, // Updated to use the image from the assets folder
    date: "17 Jan 2025",
    readTime: "7 min",
    category: "Teori",
    content: `Wireshark adalah alat yang sangat berguna untuk menganalisis paket data dalam jaringan. Pada praktikum ini, kita akan mempelajari cara menggunakan Wireshark untuk menangkap dan menganalisis paket data.
    
    Langkah-langkah yang akan dipelajari meliputi cara menangkap paket, menganalisis protokol jaringan seperti TCP, UDP, dan HTTP, serta mengidentifikasi masalah jaringan. Praktikum ini sangat penting untuk memahami bagaimana data dikirim dan diterima dalam jaringan.`,
    tags: ['Wireshark', 'Analisis Paket', 'Jaringan'],
    imageUrl: "https://th.bing.com/th/id/R.d462559c86883446983275d974675eae?rik=SITYeixJB%2fXxgw&riu=http%3a%2f%2fallpcworld.com%2fwp-content%2fuploads%2f2016%2f09%2fWireshark-Free-Download-Logo.png&ehk=%2fYYXx2wXTnD%2fY5JAq%2bgVtKMCCkzsuEV1olEw%2bs8vgcw%3d&risl=&pid=ImgRaw&r=0",
    likes: 40,
    comments: 12,
    shares: 6
  },
  {
    id: 5,
    title: "Mengenal DNS, Fungsi, Jenis-jenis, dan Cara Kerja DNS",
    author: "Bpk. Akhmad Fathurrahman",
    authorRole: "Dosen Jaringan Nirkabel",
    authorAvatar: "/api/placeholder/100/100",
    date: "18 Jan 2025",
    readTime: "8 min",
    category: "Teori",
    content: `MENGENAL DNS, FUNGSI, JENIS-JENIS, DAN CARA KERJANYA
Mark as done
DNS adalah singkatan dari Domain Name System yang merupakan sebuah sistem untuk menyimpan informasi tentang nama host maupun nama domain dalam bentuk basis data tersebar (distributed database) di dalam jaringan komputer, misalkan: Internet. DNS menyediakan alamat IP untuk setiap nama host dan mendata setiap server transmisi surat (mail exchange server) yang menerima surat elektronik (email) untuk setiap domain.DNS biasanya digunakan sebuah Layanan Nama Domain untuk menyelesaikan permintaan untuk nama-nama website menjadi alamat IP untuk tujuan menemukan layanan komputer serta perangkat di seluruh dunia.

 

Sejarah DNS

Sebelum dipergunakannya DNS, jaringan komputer menggunakan HOSTS.TXT dari SRI (sekarang SIR International) yang berisi informasi dari nama komputer dan IP address-nya. Di Internet, file ini dikelola secara terpusat dan di setiap loaksi harus di copy versi terbaru dari HOSTS files, dari sini bisa dibayangkan betapa repotnya jika ada penambahan 1 komputer di jaringan, maka kita harus copy versi terbaru file ini ke setiap lokasi. Dengan makin meluasnya jaringan internet, hal ini makin merepotkan, akhirnya dibuatkan sebuah solusi dimana DNS di desain menggantikan fungsi HOSTS files, dengan kelebihan unlimited database size, dan performace yang baik.

Paul Mockapetris menemukan DNS di tahun 1983; spesifikasi asli muncul di RFC 882 dan 883. Tahun 1987, penerbitan RFC 1034 dan RFC 1035 membuat update terhadap spesifikasi DNS. Hal ini membuat RFC 882dan RFC 883 tidak berlaku lagi. Beberapa RFC terkini telah memproposikan beberapa tambahan dari protokol inti DNS.

 

Pengertian Domain Name System (DNS)

Domain Name System (DNS) adalah distribute database system yang digunakan untuk pencarian nama komputer (name resolution) di jaringan yang mengunakan TCP/IP (Transmission Control Protocol/Internet Protocol). DNS biasa digunakan pada aplikasi yang terhubung ke Internet seperti web browser atau e-mail, dimana DNS membantu memetakan host name sebuah komputer ke IP address.




Gambar 1. Skema DNS dalam jaringan

DNS menyediakan pelayanan yang cukup penting untuk internet, ketika perangkat keras komputer dan jaringan bekerja dengan alamat IP untuk mengerjakan tugas seperti pengalamatan dan penjaluran (routing), manusia pada umumnya lebih memilih untuk menggunakan nama host dan nama domain, contohnya adalah penunjukan sumber universal (URL) dan alamat surel. Analogi yang umum digunakan untuk menjelaskan fungsinya adalah DNS bisa dianggap seperti buku telepon internet dimana saat pengguna mengetikkan informatika.unimus.ac.id  di peramban web maka pengguna akan diarahkan ke alamat IP 103.97.100.139 (IPv4).

DNS adalah sebuah sitem yag diciptakan untuk mempermudah pencarian pada sistem komputer. DNS merupakan system yang mampu merubah URL di website menjadi bentuk sebuah IP Address. Tanpa adanya DNS pengguna harus mengetik IP Address dengan lengkap bila ingin mengunjungi suatu website.

DNS menjadi sebuah moderator atau penyampai diantara pengguna yang menggunakan konfigurasi berupa nama dan computer yang menggunakan konfigurasi angka. Kemampuan DNS adalah untuk meleburkan semua infomasi dan data yang diterima lalu menyajikan informasi yang dicari tadi dengan bahasa sederhana serta mudah.

Di dalam DNS ini adalah penggabungan semua sitem database yang terdistribusi ke dalam jaringan yang membuat permintaan tadi diubah menjadi hostname berdasarkan nomor IP spesifik yang dibaca oleh computer. Informasi dan asil pencarian kemudia akan disimpan ke dalam bentuk direktori yang berada pada server nama domain.

DNS juga mempunyai banyak informasi yang terkait dengan fungsi server, bagian dan kinerja yang berhubungan dengan setting domain.

Selain digunakan di Internet, DNS juga dapat di implementasikan ke private network atau intranet dimana DNS memiliki keunggulan seperti:

1.     Mudah, DNS sangat mudah karena user tidak lagi direpotkan untuk mengingat IP address sebuah komputer cukup host name (nama Komputer).

2.     Konsisten, IP address sebuah komputer bisa berubah tapi host name tidak berubah.

3.     Simple, user hanya menggunakan satu nama domain untuk mencari baik di Internet maupun di Intranet.

 

Stuktur DNS

Struktur database DNS dapat diibaratkan sebagai struktur tree terbalik, dengan puncaknya berupa root node. Dalam setiap node pada tree, terdapat keterangan seperti .org, .com, .edu, dsb yang relatif terhadap puncak root node. Jika dalam sistem file UNIX puncak hirarki dinotasikan dengan “/”, pada DNS dinotasikan dengan “.” (titik).

Struktur hirarki pada DNS



Gambar 2. Struktur Hirarki DNS

Dalam DNS, terdapat hirarki yang digunakan untuk mengelompokkan komponen-komponen dari sebuah domain. Domain dikelompokkan dalam hirarki sebagai berikut :

1.    Root-Level Domain : merupakan puncak hirarki yang diekspresikan berdasarkan periode. Memiliki ciri khas penambahan titik di belakan domain, misalnya unimus.ac.id (tanda titik (.) di belakang .id merupakan root level domain)

2.    Top-Level Domain : merupakan kata yang posisinya berada paling kanan dari suatu domain, atau jika dibaca berada paling belakang. Misalnya saja untuk informatika.unimus.ac.id, maka top level domainnya adalah “.id”. Top level domain dapat berisi second-level domain dan juga host. Secara umum, top level domain dibagi lagi menjadi dua, yaitu :

GLTD (Generic Top Level Domain) : adalah TLD yang bersifat general, misalnya : .com (untuk tujuan komersial), .edu (untuk institusi pendidikan), .gov (untuk instansi pemerintahan), .org(untuk organisasi non-profit), dan .net (untuk organisasi jaringan).
CCLTD (Country Code Top Level Domain): TLD yang didasarkan pada kode negara, misalnya .id (untuk Indonesia), .us (Amerika Serikat), .my (Malaysia), uk (Kode Negara United Kingdom/England), dan sebagainya.
3.    Second-Level Domain : dapat berisikan host dan domain lain, atau sering disebut dengan subdomain. Misalnya saja, pada domain informatika.unimus.ac.id, maka second level domainnya adalah “ac”.

4.    Third-Level Domain : merupakan kata yang letaknya di sebelah kiri second level domain dan dibatasi dengan titik. Misalnya saja, untuk domain informatika.unimus.ac.id, maka “unimus” merupakan bagian third-level domain-nya.

5.    Sub-Domain: merupakan kata yang letaknya di sebelah kiri Third level domain dan dibatasi dengan titik. Misalnya saja, untuk domain informatika.unimus.ac.id, maka “informatika” merupakan bagian sub domain-nya.

6. Host Name : kata yang terletak di paling depan pada sebuah domain, misal untuk www.google.com, maka www adalah nama hostnya. Jika sebuah domain menggunakan host name, maka akan tercipta FQDN (Fully Qualified Domain Name) untuk tiap komputer. Dengan begitu, keberadaan DNS akan terdistribusi di seluruh dunia, dengan tiap organisasi memiliki tanggung jawab terhadap database yang berisikan info mengenai jaringannya masing-masing.

Pada bagian dibawah ini adalah contoh dari top-level domains:

·       com ® Organisasi Komersial

·       id ® Identitas Kode Negara

·       edu ® Institusi pendidikan atau universitas

·       org ® Organisasi non-profit

·       net ® Networks (backbone Internet)

·       gov ® Organisasi pemerintah non militer

·       mil ® Organisasi pemerintah militer

·       num ® No telpon

·       arpa ® Reverse DNS

·       xx ®  dua-huruf untuk kode negara (id:Indonesia,sg:singapura,au:australia,dll)

·       Top-level domains dapat berisi second-level domains dan hosts, mislanya (ac.id ®

Academic Indonesia, or.id ®organization Indonesia, co.id ® Coorporation Indonesia, or.id ® Organization Indonesia) 

 

Cara Kerja DNS

Sebelum mengetahui cara kerja DNS, perlu diketahui bahwa pengelola DNS terdiri dari 3 komponen, yaitu :

1.     DNS resolver : adalah klien yang merupakan komputer pengguna, pihak yang membuat permintaan DNS dari suatu program aplikasi

2.     Recursive DNS server : adalah pihak yang melakukan pencarian melalui DNS berdasarkan permintaan resolver, kemudian memberikan jawaban pada resolver tersebut.

3.     Authoritative DNS server : pihak yang memberikan respon setelah recursive melakukan pencarian. Respon dapat berupa sebuah jawaban maupun delegasi ke DNS server lainnya.

Untuk menjalankan tugasnya, server DNS memerlukan program client yang bernama resolveruntuk menghubungkan setiap komputer user dengan server DNS. Program resolver yang dimaksud adalah web browser dan mail client. Jadi untuk terhubung ke server DNS, kita perlu menginstall web browser atau mail client pada komputer kita.`,
    tags: ['DNS', 'Jaringan Komputer', 'Server'],
    imageUrl: "https://static.vecteezy.com/system/resources/previews/008/450/364/original/dns-icon-on-white-domain-name-system-vector.jpg",
    likes: 30,
    comments: 15,
    shares: 8
  },
  {
    id: 6,
    title: "Manajemen Bandwidth",
    author: "Akhmad Fathurrahman S.Kom., M.",
    authorRole: "Dosen Jaringan Komputer",
    authorAvatar: "/api/placeholder/100/100",
    date: "19 Jan 2025",
    readTime: "9 min",
    category: "Teori",
    content: `Manajemen bandwidth merupakan proses pengaturan jumlah data pada jaringan dengan mengatur alokasi perangkat yang memakan data jaringan. Hal ini membantu meringankan kemacetan jaringan dan memastikan aplikasi kritis suatu organisasi mendapatkan bandwidth yang cukup. Konsep pengelolaan bandwidth menyerupai dengan penjatahan. Prinsip penjatahan menyerupai kondisi darurat akibat pandemi covid-19 yang membatasi jumlah komoditas. Penjatahan memastikan apakah semua orang mendapatkan yang dibutuhkan. Dalam pengertian bandwidth management, porsi bandwidth di jatah untuk setiap aplikasi maupun perangkat..
    Manajemen bandwidth adalah cara untuk menyelesaikan masalah kecepatan internet yang tiba-tiba melambat ketika banyak yang menggunakan jaringan. Maupun membuka aplikasi di beberapa aplikasi dalam satu perangkat sekaligus.
    Apa itu Bandwidth

    Bandwidth mengacu pada jumlah maksimum data yang dapat ditransfer jaringan, perangkat, maupun aplikasi. Semakin besar bandwidth, makin cepat kecepatan koneksi jaringannya.
Bandwidth dapat diibaratkan sedotan yang memiliki ukuran berbeda. Orang dengan sedotan yang lebih besar mampu menyeruput minuman lebih banyak daripada sedotan lebih kecil.
Hal yang sama dengan perangkat maupun alamat IP dengan lebar pita yang lebih besar. Sebab dapat mempengaruhi koneksi internet lebih cepat.
Pentingnya manajemen bandwidth
Koneksi jaringan dipengaruhi beberapa aktivitas yang terjadi. Jika berada dalam lingkungan perkantoran, aktivitas karyawan mempengaruhi koneksi jaringan, antara lain:
Mengunggah informasi karyawan baru ke dalam platform sistem informasi sumber daya manusia
Mendownload bahan penelitian untuk riset melalui mesin pencari seperti Google
Menonton video hiburan di Youtube
Mengunggah foto, video, maupun konten lewat sosial media
Dari banyaknya aktivitas ini, manajemen bandwidth membantu mengalokasikan bandwidth untuk aktivitas penting.

Bagaimana cara kerja management bandwidth

Management bandwidth bisa dilakukan dengan berbagai cara. Seperti bagaimana jaringan administrasi dapat mengendalikan bandwidth.
Administrasi jaringan dapat mengendalikan bandwidth berdasarkan aplikasi. Bukan cuma itu, lebih banyak bandwidth yang mengatur penggunaan platform dan media komunikasi.
Sementara, Internet Service Provider (ISP) dapat mengimplementasikan pengaturan bandwidth berdasarkan alamat IP.
Apabila alamat IP ditentukan untuk menggunakan perusahaan, mereka dapat mengalokasikan lebih banyak bandwidth.

Penggunaan alat manajemen bandwidth
Management bandwidth memiliki alat dan software yang dapat diimplementasikan sebagai berikut
Router
Fungsi utama router adalah membuat rute lalu lintas bandwidth untuk kepada tujuan masing-masing. Anda masih bisa memakainya untuk mengimplementasikan control bandwidth untuk menganalisa lalu lintas.

Pembatas bandwidth
Pembatas bandwidth memantau lalu lintas dengan membatasi bandwidth berdasarkan perangkat yang sudah ditetapkan. Berbeda dengan router, alat ini dirancang khusus untuk mengendalikan bandwidth.

Traffic shaping tools
Cara lain untuk mengendalikan bandwidth adalah menggunakan alat pembentuk lalu lintas atau traffic shaping tools. Fungsi alat ini menunda jenis lalu lintas jaringan tertentu untuk perangkat maupun aplikasi yang lebih penting.

Manfaat dari manajemen bandwidth
Salah satu manfaat manajemen bandwidth yang signifikan adalah mengurangi kemacetan antara jaringan maupun aplikasi. Tanpa itu, semua aplikasi akan memperebutkan bandwidth sehingga dapat mengganggu pekerjaan.

Selain mengurangi kemacetan jaringan antar perangkat, berikut ini manfaat lain management bandwidth berdasarkan ipwithease.com.

Meningkatkan performa jaringan
Manfaat utama mengaktifkan manajemen bandwidth pada router WiFi adalah meningkatkan performa jaringan mereka. Dapat diaktifkan dari panel admin router WiFi, dan memungkinkan organisasi mengalokasikan bandwidth ke perangkat maupun aplikasi lainnya berdasarkan prioritas.

Meningkatkan user experience
Management bandwidth bermanfaat untuk meningkatkan pengalaman pengguna untuk memastikan distribusi bandwidth dilakukan secara adil dan merata kepada pengguna. Tanpa adanya management bandwidth, perangkat manapun akan kesulitan mendapatkan bandwith.

Baca juga : Pentingnya Memberikan Customer Experience Terbaik

Efisiensi alokasi sumber daya daringan
Aktivasi manajemen bandwidth memungkinkan Anda mengalokasikan sumber daya secara efisien untuk memastikan penggunaan internet yang tidak adil. Hal ini penting untuk penggunaan organisasi dengan banyak penggunaan dan perangkat yang terhubung.

Management bandwidth memungkinkan pengoptimalan pemakaian bandwidth yang tersedia sehingga banyak perangkat dapat bergabung dengan jaringan tanpa mengalami kemacetan jaringan maupun penurunan kinerja.

Hal ini memastikan kecepatan dan kinerja jaringan secara keseluruhan tidak terganggu dan semua perangkat menerima bagian yang adik dari sumber daya jaringan

Memprioritaskan aplikasi kritis
Memprioritaskan aplikasi atau jaringan menjadi manfaat dari management bandwidth. Kemampuan ini mampu mengalokasikan lebih banyak bandwidth ke aplikasi maupun perangkat yang sangat dibutuhkan.

Mengalokasikan lebih banyak bandwidth untuk aktivitas internet yang membutuhkan kecepatan transfer daya dan bandwidth lebih tinggi seperti mengunduh, online meeting, hingga analitik daya.

Baca juga : Teknologi Cloud Computing Telah Mengubah Kultur Masyarakat

Dampak yang dirasakan dari prioritas alokasi bandwidth adalah meningkatkan kinerja jaringan pada perangkat untuk tugas-tugas penting seperti remote working maupun online meeting yang butuh koneksi internet yang lebih cepat.

Efisiensi pemanfaatan paket data
Untuk pengguna paket data dengan limit tertentu, management bandwidth menjadi fitur yang bermanfaat untuk membantu mengurangi pemakaian biaya berlebih.

Management bandwidth memberi kendali besar data yang dipakai oleh setiap perangkat maupun aplikasi supaya tidak melebihi batas data yang dianjurkan.

Manajemen bandwidth adalah cara untuk mengatasi masalah kecepatan internet yang lambat ketika banyak yang menggunakan jaringan tersebut. Tidak hanya mengendalikan lalu lintas bandwidth, proses manajemen ini mampu meningkatkan pengalaman pengguna menjadi lebih baik.
    Kita akan mempelajari cara membuat VPC, mengkonfigurasi subnet, security group, dan route table. Praktikum ini sangat penting untuk memahami bagaimana membangun infrastruktur jaringan di cloud.`,
    tags: ['Bandwidth', 'Fiber Optic'],
    imageUrl: "https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 55,
    comments: 18,
    shares: 9
  },
];


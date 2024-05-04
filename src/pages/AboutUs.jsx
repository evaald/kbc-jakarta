import Navbar from "../component/Navbar";
import HeaderAboutUs from "../Image/HeaderAboutUs.jpg"


const AboutUs = () => {
    return(
        <>
        <Navbar/>
        <div class="flex flex-row bg-white h-48 p-8">
            <div class="flex flex-col justify-center w-6/12 font-black">
                <p class="font-" style={{fontSize:"20px"}}>ABOUT US</p>
                <h1 style={{fontSize:"30px", color:"#be8511"}}>KINGDOM BUSINESS COMMUNITY</h1>
            </div>
            <div class="w-6/12 font-bold" style={{color: "#605E5E"}}><h1>Kingdom Business Community (KBC) adalah sebuah gerakan moral dalam dunia kerja berbentuk yayasan nirlaba dengan fokus untuk memperlengkapi pebisnis & profesional dunia kerja untuk memiliki ‘transformasi pola pikir’ dalam melakukan Bisnis / Pekerjaan dengan Tujuan yang Mulia (tidak hanya orientasi profit) dan mempraktekkan nilai spiritual dalam bekerja.</h1></div>
        </div>
        <div class="relative">
            <div class="absolute inset-0 bg-black opacity-20"></div>
            <img src={HeaderAboutUs} alt="gambar" class="w-full h-96 object-cover"/>
        </div>
        <div class="bg-white py-8 px-56 text-center">
            <p class="font-bold" style={{color: "#605E5E"}}>KBC didirikan pada 14 Januari 2005 oleh komunitas pebisnis & profesional di Jakarta (berawal dari 10 orang) dan telah berkembang lebih dari 20.000 anggota di 7 kota (Jakarta, Surabaya, Semarang, Jogja, Solo, Bali, Bandung) dengan lebih dari 200 mentor / pembimbing.</p>
        </div>
        <div class=" flex flex-row justify-center bg-white px-16 pt-8 pb-16">
            <div class="w-6/12 justify">
                <p class="text-center font-black py-4" style={{fontSize:"20px"}}>OUR VISION</p>
                <p class="font-bold" style={{color: "#605E5E"}}>Komunitas Dunia Usaha yang Berpusatkan Allah (A God Centered Marketplace Community).</p>
            </div>
            <div class="w-6/12">
                <p class="text-center font-black py-4" style={{fontSize:"20px"}}>OUR MISSION</p>
                <p class="font-bold" style={{color: "#605E5E"}}>Membangun komunitas bisnis Kerajaan Allah yang : <p>Kuat dalam Firman,</p>
                <p>Ahli dalam bisnis dan</p>
                <p>Menjadi berkat / peduli (Termasuk komunitas pra sejahtera)</p>
                </p>
            </div>
        </div>
        <div class="flex flex-row justify-around bg-white p-8">
            <div>
            <img
                src={HeaderAboutUs}
                alt="gambar"
                className="w-80 h-auto object-cover"/> 
            </div>
            <div>
            <img
                src={HeaderAboutUs}
                alt="gambar"
                className="w-80 h-auto object-cover"/> 
            </div>
            <div>
            <img
                src={HeaderAboutUs}
                alt="gambar"
                className="w-80 h-auto object-cover"/> 
            </div>
        </div>
        </>
    )
}

export default AboutUs;
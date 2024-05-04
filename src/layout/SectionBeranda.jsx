import Button from "../component/Button"

const SectionBeranda = () => {
    return(
        <>
        <div class='bg-slate-500'>
            <div class="bg-white h-auto flex flex-row">
                <div class="w-6/12"><h1>anjay</h1></div>
                <div class="w-6/12">
                    <h1 style={{fontSize:"25px", fontWeight: "bold"}}>One Value</h1>
                    <br/>
                    <p class="pb-8">God Centered (Berpusatkan Allah), Loyal to Process (Belajar Setia pada Proses), Obedient to Truth (Berani Melakukan Kebenaran), Real Spirit of Excellence (Memberi yang Terbaik), Yielding Rights (Berkorban untuk Orang Lain / Penyerahan Hak).</p>
                    <Button idButton="ReadMoreAboutUs" nameButton="READ MORE" backgroundColorButton="#be8511"/>
                </div>
            </div>
            <div class="bg-white h-auto flex flex-row flex-wrap justify-around items-center pt-8 pb-28">
                <div class="flex flex-col items-center text-center h-36 w-36">
                    <div class="h-24 w-24"><h1 class="rounded-full h-24 w-24 py-6 font-bold text-center" style={{backgroundColor: "#be8511", fontSize: "25px" }} >2.101</h1></div>
                    <div><p>Alumni Sukses Sejati</p></div>
                </div>
                <div class="flex flex-col items-center text-center h-36 w-36">
                    <div class="h-24 w-24"><h1 class="rounded-full h-24 w-24 py-6 font-bold text-center" style={{backgroundColor: "#be8511", fontSize: "25px" }} >6.002</h1></div>
                    <div><p>Alumni Kingdom Financial</p></div>
                </div>
                <div class="flex flex-col items-center text-center h-36 w-36">
                    <div class="h-24 w-24"><h1 class="rounded-full h-24 w-24 py-6 font-bold text-center" style={{backgroundColor: "#be8511", fontSize: "25px" }} >900</h1></div>
                    <div><p>Alumni Fire</p></div>
                </div>
                <div class="flex flex-col items-center text-center h-36 w-36">
                    <div class="h-24 w-24"><h1 class="rounded-full h-24 w-24 py-6 font-bold text-center" style={{backgroundColor: "#be8511", fontSize: "25px" }} >8.084</h1></div>
                    <div><p>Alumni Road To Succes</p></div>
                </div>
                <div class="flex flex-col items-center text-center h-36 w-36">
                    <div class="h-24 w-24"><h1 class="rounded-full h-24 w-24 py-6 font-bold text-center" style={{backgroundColor: "#be8511", fontSize: "25px" }} >1.130</h1></div>
                    <div><p>Alumni Dare To Succeed</p></div>
                </div>
            </div>
            <div class="h-auto flex flex-col">
                <div class="font-bold text-white text-center py-8" style={{fontSize:"30px"}}><h1>UPCOMING EVENTS</h1></div>
                <div class="flex flex-row">
                    <h1>card event</h1>
                    <h1>card event</h1>
                </div>
            </div>
            <div class="bg-white h-auto flex flex-row py-32">
                <div class="flex flex-col justify-center w-4/12">
                    <h1 class="font-bold py-4" style={{color: "#be8511", fontSize: "20px"}}>Media</h1>
                    <h1 class="font-bold pb-8" style={{fontSize: "25px"}}>LATEST PODCAST</h1>
                    <div><Button idButton="LearnMorePodcast" nameButton="LEARN MORE" backgroundColorButton="#be8511"/></div>
                </div>
                <div class="w-8/12">
                    <div class="bg-gray-200 h-48 rounded-md">card podcast</div>
                </div>  
            </div>
            <div class="bg-white h-auto flex flex-row py-48">
                <div class="w-8/12">
                    <div class="bg-gray-200 h-48 rounded-md">card articles</div>
                </div>
                <div class="flex flex-col justify-center w-4/12">
                    <h1 class="font-bold" style={{color: "#be8511", fontSize: "20px"}}>Media</h1>
                    <h1 class="font-bold" style={{fontSize: "25px"}}>LATEST ARTICLE</h1>
                    <div><Button idButton="LearnMorePodcast" nameButton="LEARN MORE" backgroundColorButton="#be8511"/></div>
                </div>
            </div>
        </div>

        </>
    )
}

export default SectionBeranda;
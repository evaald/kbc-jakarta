import HeaderAboutUs from "../Image/HeaderAboutUs.jpg";
import Title from "../component/Title";
import Section from "../layout/Section";

const AboutUs = () => {
  return (
    <>
      <Section style={"justify-items-center"}>
        <div className="w-1/2 my-auto">
          <Title
            text={"ABOUT US"}
            style={"text-black font-extrabold text-xl"}
          />
          <Title
            text={"KINGDOM BUSINESS COMMUNITY"}
            style={"font-black text-normal text-2xl"}
          />
        </div>
        <div className="w-1/2">
          <p className="text-md text-[#605E5E] font-semibold">
            Kingdom Business Community (KBC) adalah sebuah gerakan moral dalam
            dunia kerja berbentuk yayasan nirlaba dengan fokus untuk
            memperlengkapi pebisnis & profesional dunia kerja untuk memiliki{" "}
            <span className="font-bold text-red-600">
              Transformasi pola pikir{" "}
            </span>{" "}
            dalam melakukan Bisnis / Pekerjaan dengan Tujuan yang Mulia (tidak
            hanya orientasi profit) dan mempraktekkan nilai spiritual dalam
            bekerja.
          </p>
        </div>
      </Section>

      <div className="h-[500px] w- bg-aboutus bg-cover mt-14 bg-center"></div>
      <Section style={"text-center text-[#605E5E] font-bold w-3/4 mx-auto"}>
        <p>
          KBC didirikan pada 14 Januari 2005 oleh komunitas pebisnis &
          profesional di Jakarta (berawal dari 10 orang) dan telah berkembang
          lebih dari 20.000 anggota di 7 kota (Jakarta, Surabaya, Semarang,
          Jogja, Solo, Bali, Bandung) dengan lebih dari 200 mentor / pembimbing.
        </p>
      </Section>

      <Section style={""}>
        <div className="flex flex-col w-1/2 gap-5">
          <Title text={"OUR VISION"} style={"font-black text-[20px]"} />
          <p class="font-bold" style={{ color: "#605E5E" }}>
            Komunitas Dunia Usaha yang Berpusatkan Allah (A God Centered
            Marketplace Community).
          </p>
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          <Title text={"OUR MISSION"} style={"font-black text-[20px]"} />
          <p class="font-bold" style={{ color: "#605E5E" }}>
            Membangun komunitas bisnis Kerajaan Allah yang :{" "}
            <ul>
              <li>Kuat dalam Firman,</li>
              <li>Ahli dalam bisnis dan</li>
              <li>
                Menjadi berkat / peduli (Termasuk komunitas pra sejahtera)
              </li>
            </ul>
          </p>
        </div>
      </Section>
      <Section style={'justify-center gap-5'}>
        <div>
          <img
            src={HeaderAboutUs}
            alt="gambar"
            className="w-80 h-auto object-cover"
          />
        </div>
        <div>
          <img
            src={HeaderAboutUs}
            alt="gambar"
            className="w-80 h-auto object-cover"
          />
        </div>
        <div>
          <img
            src={HeaderAboutUs}
            alt="gambar"
            className="w-80 h-auto object-cover"
          />
        </div>
      </Section>
    </>
  );
};

export default AboutUs;

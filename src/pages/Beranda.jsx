import Header from "../layout/Header";
import Button from "../component/Button";
import Card from "../component/Card";
import RoundedElement from "../component/RoundedElement";
import Title from "../component/Title";
import Section from "../layout/Section";

const Beranda = () => {
  const data = [
    { title: "A", statistik: 12.34 },
    { title: "B", statistik: 12.34 },
    { title: "C", statistik: 12.34 },
    { title: "D", statistik: 12.34 },
  ];
  return (
    <div class="bg-primary">
      <Header
        judulHeader={"KINGDOM BUSINESS COMMUNITY"}
        bgHeader={"bg-beranda"}
        style={
          "items-center justify-center m-auto h-[600px] max-sm:h-[200px] w-full"
        }
        containerTitle={"w-[400px] max-sm:w-[200px] p-2"}
        color={"text-white"}
      >
        <Button
          idButton="AboutUs"
          nameButton="ABOUT US"
          backgroundColorButton="#be8511"
        />
      </Header>
      {/* section 1 */}
      <Section id="Section Pertama" style={"bg-primary gap-3 "}>
        <div class="w-1/2 bg-beranda bg-center rounded-md">
          {/* <Card>content</Card> */}
        </div>
        <div class="w-1/2">
          <Title text={"One Value"} style={"font-bold pb-5 max-sm:pb-2"} />
          <p class="pb-8 max-sm:pb-2 ">
            God Centered (Berpusatkan Allah), Loyal to Process (Belajar Setia
            pada Proses), Obedient to Truth (Berani Melakukan Kebenaran), Real
            Spirit of Excellence (Memberi yang Terbaik), Yielding Rights
            (Berkorban untuk Orang Lain / Penyerahan Hak).
          </p>
          <Button idButton="ReadMoreAboutUs" nameButton="READ MORE" />
        </div>
      </Section>

      {/* Section 2 */}
      <Section
        id="Section kedua"
        style="justify-center items-center bg-primary"
      >
        {data.map((i) => {
          return <RoundedElement title={i.title} statistik={i.statistik} />;
        })}
      </Section>

      {/* Section 3 */}
      <Section id="Section ketiga" style="flex-col gap-2">
        <Title text={"UPCOMING EVENTS"} style={"font-bold text-center"} />

        <div class="flex flex-row gap-4 justify-center items-center">
          <Card style={"h-48 bg-gray-500 p-2 rounded-md text-white"}>
            Card content
          </Card>
        </div>
      </Section>

      {/* Section 4 */}
      <Section id="Section keempat">
        <div class="grid justify-items-start w-2/7">
          <Title
            text={"Media"}
            style={"font-bold text-[#be8511] text-[20px] "}
          />
          <Title text={"LATEST PODCAST"} style={"font-bold"} />
          <div>
            <Button idButton="LearnMorePodcast" nameButton="LEARN MORE" />
          </div>
        </div>
        <div class="w-5/7 p-2 flex gap-10 max-sm:gap-2">
          <Card style={"h-48 bg-gray-500 p-2 rounded-md text-white"}>
            Card content
          </Card>
        </div>
      </Section>

      {/* Section 5 */}
      <Section id="Section kelima">
        <div class="w-3/4 p-2 flex gap-10 max-sm:gap-2 justify-end">
          <Card style={"h-48 bg-gray-500 p-2 rounded-md text-white"}>
            Card content
          </Card>
        </div>
        <div class="grid justify-items-end w-1/4">
          <Title text={"Media"} style={"font-bold text-[#be8511]"} />
          <Title text={"LATEST ARTICLE"} style={"font-bold text-right"} />
          <div>
            <Button idButton="LearnMorePodcast" nameButton="LEARN MORE" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Beranda;

import { Card, ListBox } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import presentacionAnimation from "../assets/guy.lottie";
import { DottedMap } from "@/components/ui/dotted-map";

function AboutMe() {
  const Datos = {
    presentacion: "Hola, soy un desarrollador apasionado por la tecnología y el diseño. Me encanta crear soluciones innovadoras y eficientes para resolver problemas complejos. Con una sólida experiencia en desarrollo web y móvil, siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades. Mi objetivo es contribuir al éxito de proyectos emocionantes y colaborar con equipos talentosos para crear productos excepcionales.",
    ubicacion: "Ciudad de México, México",
    estudios: "Licenciatura en Informática, Universidad Nacional Autónoma de México (UNAM)",
  }

  const [selected, setSelected] = React.useState("presentacion");

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className=" grid grid-cols-5 gap-4 p-10">
        <div className="col-span-1">
          <p>{selected}</p>
          <ListBox>
            {
              Object.entries(Datos).map(([key, ]) => (
                <ListBox.Item
                  key={key}
                  value={key}
                  selected={selected === key}
                  onClick={() => setSelected(key)}
                >
                  {key}
                </ListBox.Item>
              ))
            }
          </ListBox>
        </div>
        {selected === "presentacion" && <PresentacionCard />}
        {selected === "ubicacion" && <UbicacionCard />}
      </div>
    </div>
  );
}

function PresentacionCard() {
  return (
    <Card className="p-5 w-full col-span-4 justify-around items-center">
      <p className="text-3xl font-bold mb-1">¿Quien soy?</p>
      <div className="text-gray-700 grid grid-cols-3 gap-4 items-center">
        <DotLottieReact src={presentacionAnimation} className="col-span-1 p-10" autoplay loop />
        <p className="col-span-2 text-lg font-light text-justify me-12">
          Hola, soy un desarrollador apasionado por la tecnología y el diseño. Me encanta crear soluciones innovadoras y eficientes para resolver problemas complejos. Con una sólida experiencia en desarrollo web y móvil, siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades. Mi objetivo es contribuir al éxito de proyectos emocionantes y colaborar con equipos talentosos para crear productos excepcionales.
        </p>
      </div>
    </Card>
  );
}

function UbicacionCard() {
  type CountryCode = Lowercase<TCountryCode>
 
type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode
    label: string
  }
}
 
const markers: MyMarker[] = [
  {
    lat: 37.5665,
    lng: 126.978,
    size: 2.8,
    overlay: { countryCode: "kr", label: "Seoul" },
  },
]
 
<DottedMap<MyMarker>
  markers={markers}
  renderMarkerOverlay={({ marker, x, y, r }) => {
    // Custom overlay rendering
    return <text x={x} y={y}>{marker.overlay.label}</text>
  }}
/>
}

export default AboutMe;

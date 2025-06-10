import React from 'react'
import Marquee from "react-fast-marquee";

const clientsRow1 = [
  "ibm", "pg", "bok", "bankak", "time", "authentik", "rbs", "christou", "saeed", "metro", "rayan", "payfast"
];
const clientsRow2 = [
  "sosafe", "sunrise", "ziauddin", "bok2", "nift", "radiant", "alliend", "idem", "askari", "blinkq", "bluebird", "zafra"
];

const imageMap = {
  ibm: "ibm.png",
  pg: "pg.png",
  bok: "bok.png",
  bankak: "bankak.png",
  time: "time.png",
  authentik: "authentik.png",
  christou: "christou.png",
  saeed: "saeed.png",
  metro: "metro.png",
  rayan: "rayan.png",
  payfast: "payfast.png",
  rbs: "rbs.png",
  sosafe: "sosafe.png",
  sunrise: "sunrise.png",
  ziauddin: "ziauddin.png",
  bok2: "bok2.png",
  nift: "nift.png",
  radiant: "radiant.png",
  alliend: "alliend.png",
  idem: "idem.png",
  askari: "askari.png",
  blinkq: "blinkq.png",
  bluebird: "bluebird.png",
  zafra: "zafra.png",
};

function ClientSlider() {
  return (
    <div className="pb-4">
        <div className="container-fluid relative">
            <p className="text-[20px] mb-8 fc-primary">Our Clients</p>
            {/* <hr class="border-white mb-8"></hr> */}
           <div className="space-y-12">
            <div className="overflow-hidden  pb-5 mt-5">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={false}>
                {clientsRow1.map((client, index) => (
                <img
                    key={index}
                    src={`/images/${imageMap[client]}`}
                    alt={client}
                    className="mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div>
            <div className="overflow-hidden  pb-5 mt-2">
            <Marquee gradient={false} speed={40} direction="left" pauseOnHover={false}>
                {clientsRow2.map((client, index) => (
                <img
                    key={index}
                    src={`/images/${imageMap[client]}`}
                    alt={client}
                    className="mx-6 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
                ))}
            </Marquee>
            </div>
        </div>
            <hr class="border-white mb-8"></hr>
        </div>
    </div>
  );
}

export default ClientSlider

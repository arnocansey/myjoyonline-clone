export default function Footer() {
  return (
    <>
      <section className="flex justify-around bg-gray-100 p-3">
        <div className="flex flex-col gap-2">
          <p className="border-b-2 w-1/3 border-black ">About us</p>
          <a href="#">The multimedia Group</a>
          <a href="#">Advertise with us</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-2">
          <p className="border-b-1 border-black ">Radio</p>
          <a href="#">Joy 99.7 FM</a>
          <a href="#">Adom 106.3 FM</a>
          <a href="#">Hitz 103.9 FM</a>
          <a href="#">Asempa 94.7 FM</a>
          <a href="#">Luv 99.5 FM</a>
          <a href="#">Nhyira 104.5 FM</a>
        </div>
        <div className="flex flex-col gap-2">
          <p>TV</p>
          <a href="#">Joy News</a>
          <a href="#">Adom TV</a>
          <a href="#">Joy Prime</a>
          <a href="#">MultiTvWorld.com</a>
          <a href="#">Adom TV (Audio)</a>
          <a href="#">Joy News (Audio)</a>
        </div>
        <div className="flex flex-col gap-2">
          <p>Social</p>
          <a href="#">YouTube</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Infographics</a>
        </div>
        <div className="flex flex-col gap-2">
          <p>More</p>
          <a href="#">Games</a>
          <a href="#">Habitat Fair</a>
          <a href="#">Impact Makers</a>
          <a href="#">Archives</a>
        </div>
      </section>
    </>
  );
}

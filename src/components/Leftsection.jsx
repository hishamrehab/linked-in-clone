import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./leftsection.css";
import { FaLandmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import Groups from "./Recent";
const Leftsection = () => {
  return (
    <>
      <form className="d-flex" role="search">
        <FaLinkedin className="linkedin-icon" />
        <input
          className="form-control text-white me-1"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <IoIosSearch className="search-icon" />
      </form>
      {/* card */}
      <div className="card mt-5">
        <img
          className="card-img-top"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAzgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBQQGAQIHAAj/xAA8EAACAQMDAgQDBQYFBAMAAAABAgMABBEFEiExQQYTUWEicYEUMkKRoQcjUrHB0RUzYuHxJHKS8BZzk//EABgBAAMBAQAAAAAAAAAAAAAAAAECAwAE/8QAIhEAAwACAwEAAgMBAAAAAAAAAAECESEDEjFBIlETYXEy/9oADAMBAAIRAxEAPwCqxBJEG5eD0I70QWgb7qE1iXhVcYy5OWH4sDqR6+9Bt9XEM/lyqGTOPSnTOapI+sWs0UIZU2xBgWYnpyKmzfCNNAXCXHRjwCcdetRvFkW7yp4Hi8gBDsFx8XJHO3r7Z5odyJD/AIcBJKQF3KOmARx0yeMjtQbGU6wWFdOLc4z7177Ay9v0pvBZsETzHUtgZJzkmim1Pz+VDsJ1QlFmfT9KHOkNsuZ5Y48/d3uBn5U+FofT86VeJNClu7YSQpCTHlt0shGB7UcgUpgraANBG3XcgOR8qkJaZ7Ubw3pskVirOyuHCkFST2p5HYtgEIfyodguMCJbI/wmjpYn+E1N1Sf7BAgGBNMdqZ6D1Jo9rMdLtxY6zZukihpEuPMzkkk49Md+tbLB1I0Oks45wg9XOK3XS8E9Dj2qSupW0q7bNGuLg/cjJxn61K8OXhmaSK9cRzF8IpXAYelZthUpvAvXTj/D+dHTTf8ASKtL2Ss+QAvpiipb2cCb7hwoBx8Xr7Uvcb+F5K7baP5rAF1UnuRTyPw1bKqkStkdf9qcw28KAGNRjsetG8tflU3bLzwylsTNocQA2Stx2xxRo9LA/Fgf6aZeTu6E0RYyB0pezHUSRI7URqMZ+pqhat46ax8Vw2cunyRQwb03yHG9SV+IZ7fCcetdJZgEIYDA61wfXbnRl8XRmC0u1s/j815gUMp3LhsEZwORn3oxvOTV/R3OArNGkkZ3I6hlPqDUfWL+30iwe6vJlhjHG5gSMnp05qPbavpln4eTUI5Vj0+OHKE/DwOwzXMfGX7Wp5XmtNCtrdbZWKm5uF8zzMd1XoB3yc/IUJh09Gq0vRv4Y/aBpdjoN7Pq2pRy3MM8jJbxDEkuWJAVTjOc/TnNck8U+Ib3xHrM2oXrEFziOJeVhTso/qe5pWJnn8yWRy8jOSzH3rTrXVEKXk57pvQxuL4/bYBGxCCPJA6cgUN3MhDE5JAz86VRsxmXc2fhx/tU6Fs5UHnJz7UyRmtALmOQSluMZGMGmSE20tvJGG3MufMAB+nIpZdRMJd3BBIAFNLawuZHtwSiFySobPPGfpQoK8LvpviTYIUuI/OJAHmpgHPuKueloJXLkrLEeOB17n5en1rmLW0sRXeDnHJzmmVvql3aBRb3EkbYw208N8x0NT65WgZSezpN9YRwwLJGrMpwHxyRVI8cWwnjtoFuGjYk/uz34OB04JqbpviO5TAuZmZP4j2pT47v73zbSfzYjbISQCwU7/l3oJNaG16h54Ptrqw0+WS5t1CyorRq5xu+HOeOe5/SpN7q0cDeb53ll+kKnJX1+nvVctvEL6hpSR7+YkWPj0xjr9KXsSx5NMp/Yl1hk7WtT+3363Gz93EqgKeN3c/maQXd9eXV/LeyTubiRiWlJ5Pt8vapcrhhtX86iuFHwjlh6dBVEkRbYA3E5k8wSyBgeGViD+ldH8L6tDqtukWqwj7YoJEoH+aoHXA6MP17elUGzt90ygjIJG75d6ftvRkP+WqDPXG35f3pbHhtbL/c69baZZmWedpWA/dR9DJn7uPb3qo3XiDWtQ8t1RRtQKSiZy3cjPTPp7UGKa2vZYwtzuZEVMhQD8hn0qwrHBFb5+F2H4tu0/Mip6n4Vw7/AMJ/hrXdQisCNUUsI/hQEbTIP+ePlVs0u9S+Qnau9eqg5GPX+lc/SU7yXYsx71PsbyW2ux5chRn+HI9PlSUsspLwsHQCVjUkkADrVQ1/x/pmj6zDp80oAe3WUyEZHxMu3n/t3H8qS/tC8cTadpccdlGPMu0kiY+ZgrlfvjHpkEVw2ZpJZPMlkkkk4Bd2LE4GByfbimjiztgrk+I7lr37WtKtYWGlRPeXBAKnO2NeO5749q4/f67eavqiXN1OXmwxLHhVLEE7R25ApSxIycVHg3GUtkgdc5qi41Pgvdv0c6pql9fmKK9u5po7dQscbtxH7AdPXnrSu5+JOTivSNvYhSSfU96HICy4IPHanxoTGw1uuy2J6596FLLtwBXoZFFuVb16ZqLK3NZBayZhciVfy5qWrFGBJAy3rUFeHqcx+GNlJxyOvegxsEi6Zf3Su3G8HK801MUTfZYwWAGcfFyvFJbpWaOJ9jbeCDimTb1ltlXYRwVAOdwx3PetnIuMDy1vg98ttJIZCkOGZiPvcf2/WiXskUR3BviHZe9KNMjluPEJWMZYxnapxxx79O/NG1R3tpniuYnikViGRxhlPuPrQS2Cs4yaapq0rxCKFCikrmTuP6dad3Zs9UsLX/E5l8xfwCTGcjvjntVWuHVoC2OAwz270ed90ueuAAPQ0WtmT/EtOm6fELCI24wropznPOOaxLZkVWoLqdERI55FiAHAc8fSmrwXUcaSxXTyQsMMwbO0nqCO1bwSlkkvDhfu0JYPanMNmzx7mmV4w23zCvDE9Oh4NTU0YMTuDRgdXJwv681uyQvRibT4XjuIpEU8OOcdD2qTLbyzzsJAxb/UKbiyhs4gz3aJHkMxIYZx2FTINf0RrfybnzUxkLIYzzjvmldb0iijWGxXYaa27AjXPsKbrp1x5mZp8r+JXPSkM/iURxhrIbiSpK7QOMAnJ+ZP/jSm48T6nPavFK6eazZ3gZIAx2/94oYphnqi0S6hp8KErPCcFep6Z/4qpeJPFTXOE052RtrB5FOM5XHGPYn61X50Dj90Hc/iYgf+io/lEHDkovyplCRnbYENgE5zQ2OGAz17VswJztwAPWhKhM25unqacGAd052YWhRAgAse1GY5IAznIxisxQvPcrEije38RCgfMngVgoGW+MY5OazOCkpHHxcjBzW+p6fc6e8azKhEg3K0cgdTz0yO/tWju7yY2uWAAPfFDI2COG/dsvQ5656+1CIqVLbGKPLBskZ56Co1AxripVnOsBy4BA7VhYUCfG6knsHFDli2KCG/UVmshTJ0WpyJdB/MbYO2eKn214rqWQKMkE57HnP50iiQSMFY9alLbMuFS6hUHjlulK4Qew4sLiKK+M0c6qS+SACc/wC1Or2f/Ewkl2kUqgYWTzCHQZ7HnII7HOPaqjCrRvhZoevrUpJJwxMRhdduN+3lfYUrhraCqT9C6jb2rWz3FlfiSNSMwznbMp9gOHHuMY4zUmC6tpLaLzXVGUYLH4ieM5x1r0BaaD/qbu0Vm7SRuePX4RWZ9K0sRM/+L28TFfiBjlPz42A0e3xi9Bra2dldQwfZJ7cEjlJZPLbnGM5+f86tml+E9atpvNNiEAByxmHI7555Fc9htreO1Vl1qAKhyri2nyvp+GrPPrWtR2lvAPE062yIyApZS/vNw53MeuM8elZ0wdEtl00zwxdW8z3EMMCiTDKPN+Aj5Z+dPRpdyjKRDCQvT4ulUnw34t1W10uzto7pbqNJP82W2Ylkx0yX6D+31sv/AMsn2h3aIZH3fLGR/OkapsZOJWMmJ/Dd232ksqyGR1ILydgPu+w+XrUw6S5tvJksLbaAcKj4+vWl7eJ55cNCqKNwB3KAflUxdRJjzJPgkfd4zQao01PwTXOhSoVCQWsX4WVOMj55qu6hoNwz73t7RVH4fN4/nVquVmuXbyroAl/xQo2F+ZWkt/b6hbQs8y2rY64t4zx/41WCHI6+Ir89l8TbksVOeiyjj6ZqBLpyHl/s2P8A7/8AeplxqoGR+5XtkWqn+QpLelZ3DS63HFweFsZFGO/SqPQkZt/0Yl02Nw0kb22wfi87I/OlJ2if7OssQycBy2EHuWqSR5ZVBrMbrtwg+zzqCPlsz+teNlZSyHz9StQ2MbBDOMe3+XSdv2XUYBC1tRJ9nfUUNzuAxboJIxz/AB5GT8uPeiXkdtEgVIo1UZzK8g3N7k9fpxRJIooX/wCmv7FT0x9nn/UmOltxaK5HnajakjoFDj+a0u2x8YMSxhlRfNAjUZdgTlj8qzcXiRwrDASOMdulCe0jWMkXsTHH3VJ5qGcA4GM+pNN1NkK8+6Pack9885qPRNuOSQfrWrqfTFFLAMmwb0AFYClm4rXPNFQmLBXqT3ogMBCW2VJgtnb8BbpnjnrxWvnFAjhU3dMlRz86Z28h8yNgxGRyBx2PPHfmleTZlegrTT1kuFR8tlwD2A/qabvpJhQu1uY487PMYlMj0UdWP9u1L9Mm8nXC6IrFVztkyVJ9xnmnt3NNf3Pm3LtI/TOOAPQAcAewodG3sD5EloSai9nZwPHaPczTPj9+XKIg7hUxk+mSR7CoVnbeeuctvIyTjqKsXiLSZotFN0LWVULKBMVwM5x/Wrz4Z8F2h023vLhoEe4iyq71yR19s0W5lA/KkUvTNMtBYwNPGzSkBuWIwce1OGvX8vyxymMY7Yp8+gA6FaXMEgaQ26OVHyGarskbxSFSD8qMtMlydk9mizrtCKuABgAdqGLor14rWZdvxKefSopuAwCEgjnPsacmxvY3Je5jAb8Q4JwM1NM8sTN5hII65NVeG4MbhuCQehHBp9bkXkiJbZkVwchuduPX0+VLQ8+DO21Hc21JlZj2FS2ubtdwdQqejcsaXsgsJExBHEWUHGcc9xk/rTVLhZIAoKA9th4H1qVftFZS8bE13p9nOh22+x/4lbk1WtV0ySy2lwSrZANXlrZi4WRSpPOTWj6U1/vhPdWDNjOFIwT+Roq8eiuM+HMWjwhUFgPnS6SD/qUMoLp3BbGfrV18SeFbzQYIpblg8cx2oQhBHGeaplxLi52noBiqrD2gLsnhhitvETPbzSxqWwLVjvIHqHwAfyFaXNtHIAy4aMBtpDgMfmOoPPf6UCVhs6961ErwziSJtrjODjNBx9RSbf0xJBGqKSCqvnBPHtjrQJIWRNwwVrfULy5vJFe6naRlXC5wAvyA4FarJJtwSGBHQilxQ+UA5HI49qwW96LIUxwD9DQqZAMfio3LhepPQULHxfSpVi/kzxzFVbY2QrDg0UgN6MzqyJGCvfvVji0LUgllL9jkCXGRGexIHNV7Vb+a9uAZFRAgACoMVerPW9W03QNKLC3uCpYWsOz7qNGRzzz60Kb+CqVrIt0rw/cy+LLO3mV2hlCyF0GQ0fUkHp9f+K7Bo+kafbKwtraMAHksuWPoSTSTQXistIsLWZcvb2yxbujdBkH61OGoLHuEbY3DBqVdqB3iRR+1yGZtEgW1ink23CM23leuBu+pGKB+1DS31TTfD0SRTecgK4WLcBlRnJ7HjpTa9uY7u3aGU5Usrc88qQw/UCkHjjxZfadbwNYzIodmDqR8R4OO/SspegzzTWkWXwno0Gk6AttZTM010qyO0jZCkqOBmi3WkpOPszxKSnSTHJ96Q+FPE0GqWGII5YRbBIyZMfEdvbBqwDUjxls/1oYoWuSc4ZVfEGlrp+rxCBC8EgUqrHgkY3DP/vWlGr6AkOovHZXqXMWcq8QOR/pPY49c1dtREOoW/lTHocqw/CaxpKxWFsqBY/N53SqOSM9M1RNpEu05Zz+PRLqW4EWRFnq0vwgD1NXLw4lrp6/YrK3a8nYjdKcDefU+ijsPzpzeR295AYriNZEPcdvcelY0CBNNikRHDkncZDxgelLVZQ/E0q0NpNLiu7Q29/Ehz+JeqHHBHHb0qp3fhS5s/LEVypBUBicgb+4/lVqfUsMQrAjrxUmDULV12yqpB5ww7ipp0kXr+O2LtB8O3S2BjvpQRL8a45Mef78H86sGmaXHZxtv2u7DaSBxj0raK/if7rjPpWz3UX4iM1NtsvMwlo21Oyg1CxntZ0VlliePLdtwIz+tcK8S/s4u7PxTa6dpgZ7aeBHMrsPgOVVyfbcQfrXcGvkzjcKC9xEZlmKjeqlQfYkH+goxVSalNHBfFf7PtW8P6T/iNw6PAoUybRyhJxg/3qnxZPB6jNfTuu3ButIvIEEJZ4WCiYApnHGQeMVw/wAP6j4fs3ks9btkuBJFMPOihyFkcptx6AbTyOmavHI2tkaifEVCYdK3GAv0q8eLvAiW9qNS8PXLXtow3mPgsqkk5BHUAYGOvWqLOCgKsCrDgg8EGqp5J4xoCOhNamt06YrEiEYxWHzsNJH++XaMgim1hpiNg3Mm1ewHU1EUhGVh1GaOLlsfeNMc122tG/iJmxGlvFGlsqgZUDJI9TWJtUub37Fa3dwkcSkYdByBjGTS7UDI5LmUlM8LnigNsUISMg+/WlLTuUdMttQWGBI0csqqACTk1sdUY96pUF/sWNPLdRj8IyBRknVZTJj4iMZzTaOOoa9LcdSP8QNV7xJJaXDRyXU0iuAQoGSD/ao/23FQdUuFljUPGz+hHY1jcSfdFn8OXVpbWxFizHdguCT1x705XUj6iqFYXYtbdSiswIy2DyKnLqsRGQ5+WK2gcnHbrKLmNT9xW66n7iqWdVA7Sf8A5mo51C588yRT4XGPLkhbb+nOaDwaeK37o6DFqzIcoxH1rf8Axfrkkk1QhrJUYeN89yoOP1xRTfysweCVSndSM/rWxLM4ufS6tqp9TWBq7L+Kqh9uPc1r9u9zTdUS/LJ0DT/EcaMvmFgPUEU5Ov6c/BuwD71ySK5VCfKQDJydo61sbxh2apvil7Lzzck6SL9deNdJGpGyineWRR8bx4KqR29SflUtPFFo/RmHua5VMsEtwJ3QeaPxA8n51IF5gY6UFwr6PXPr8Vs6Ld+JY/KcQ/5hUhSwyM+9ck167lutVeW7jt1lP3zCMBug5HyFNWvMgj144qsymD7Xty4XJyaPRT4Pw3VN5OlaVqyQ6Vb28RJhEYA3nkiq34vjtLoLch44JM4chP8AM+eO/FRobsRxIqHgAYoF7dq8TeZH5gHOCKbGic1XcRw8mjNzQbcszkgcUdhWR036bq27Psa23V6vUESaRFu2JwvasMu4Re/FZr1Zl14iYGwMVqc9VJH8qxXqPw516amWUMAG5xnB6GsJeb+NuG6V6vUpdSmjaSZ8bVO0e1CeTYPvMT3PrWK9RCkbJdvngn5EZqQuounBT8jXq9QDhG3+KZ42Hj5UJ9Rk+8oIP/ca9XqwMA21WcjBVD9OawNRJ+8rY9mr1erJjdJ/QRdQcH4Mj58mt3vboD91cSKCM8Ej+Rr1erYAB+13ZB3TFh6NzWEmn3ZDCvV6iZ4JUUszuN5GD6Vq9gpmUhsbtxwe2MVivVvhHOK0bNL5YHXHSvbmljfYdp9TXq9RAkiHaIS5OfnR5FxXq9WG5P8Ao//Z"
          alt="Card image cap"
        />
        <img
          className="small-image"
          src="data:image/jpeg;base64,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"
        />

        <div className="card-body">
          <h7 className="card-title">Hisham rehab</h7>
          <h6>
            software engineer : <br />
            front end developer{" "}
          </h6>
          <p>
            <span>your profile views</span>
            <span className="number">24</span>
          </p>
          <p>
            <span> your post views </span>
            <span className="number meiddle">24</span>
          </p>
          <p>
            <span> your connections</span>
            <span className="number">270</span>
          </p>
          <p>
            <div>
              <span>
                <CiBookmark className="icon-blue" />
              </span>
              <span> my items</span>
            </div>

            <div>
              <span>
                <FaLandmark className="icon-yellow" />
              </span>
              <span> try premium</span>
            </div>
          </p>
          <p className="card-text"></p>
        </div>
      </div>
      <Groups />
    </>
  );
};

export default Leftsection;

import React from "react";
import "./Traits.css";
import AnimatedPage from "../../Components/AnimatedPage";
import SmallBox from "../../Components/SmallBox";
//body images
import body1 from "../../Assets/traits/Body/Skin (1).png";
import body2 from "../../Assets/traits/Body/Skin (2).png";
import body3 from "../../Assets/traits/Body/Skin (3).png";
import body4 from "../../Assets/traits/Body/Skin (4).png";
import body5 from "../../Assets/traits/Body/Skin (5).png";
import body6 from "../../Assets/traits/Body/Skin (6).png";
//cyber images
import cyber1 from "../../Assets/traits/Cyber/cyber (1).png";
import cyber2 from "../../Assets/traits/Cyber/cyber (2).png";
import cyber3 from "../../Assets/traits/Cyber/cyber (3).png";
import cyber4 from "../../Assets/traits/Cyber/cyber (4).png";
import cyber5 from "../../Assets/traits/Cyber/cyber (5).png";
import cyber6 from "../../Assets/traits/Cyber/cyber (6).png";
//head wear
import head1 from "../../Assets/traits/Headwear/head (1).png";
import head2 from "../../Assets/traits/Headwear/head (2).png";
import head3 from "../../Assets/traits/Headwear/head (3).png";
import head4 from "../../Assets/traits/Headwear/head (4).png";
import head5 from "../../Assets/traits/Headwear/head (5).png";
import head6 from "../../Assets/traits/Headwear/head (6).png";
import head7 from "../../Assets/traits/Headwear/head (7).png";
import head8 from "../../Assets/traits/Headwear/head (8).png";
import head9 from "../../Assets/traits/Headwear/head (9).png";
import head10 from "../../Assets/traits/Headwear/head (10).png";
import head11 from "../../Assets/traits/Headwear/head (11).png";
import head12 from "../../Assets/traits/Headwear/head (12).png";
import head13 from "../../Assets/traits/Headwear/head (13).png";
import head14 from "../../Assets/traits/Headwear/head (14).png";
import head15 from "../../Assets/traits/Headwear/head (15).png";
import head16 from "../../Assets/traits/Headwear/head (16).png";
import head17 from "../../Assets/traits/Headwear/head (17).png";
import head18 from "../../Assets/traits/Headwear/head (18).png";
import head19 from "../../Assets/traits/Headwear/head (19).png";
import head20 from "../../Assets/traits/Headwear/head (20).png";
import head21 from "../../Assets/traits/Headwear/head (21).png";
import head22 from "../../Assets/traits/Headwear/head (22).png";
//necklaces
import neck1 from "../../Assets/traits/Necklaces/Necklace (1).png";
import neck2 from "../../Assets/traits/Necklaces/Necklace (2).png";
import neck3 from "../../Assets/traits/Necklaces/Necklace (3).png";
import neck4 from "../../Assets/traits/Necklaces/Necklace (4).png";
import neck5 from "../../Assets/traits/Necklaces/Necklace (5).png";
import neck6 from "../../Assets/traits/Necklaces/Necklace (6).png";
import neck7 from "../../Assets/traits/Necklaces/Necklace (7).png";
import neck8 from "../../Assets/traits/Necklaces/Necklace (8).png";
import neck9 from "../../Assets/traits/Necklaces/Necklace (9).png";
import neck10 from "../../Assets/traits/Necklaces/Necklace (10).png";
import neck11 from "../../Assets/traits/Necklaces/Necklace (11).png";
import neck12 from "../../Assets/traits/Necklaces/Necklace (12).png";
//Sling
import sling1 from "../../Assets/traits/Sling bag/sling (1).png";
import sling2 from "../../Assets/traits/Sling bag/sling (2).png";
import sling3 from "../../Assets/traits/Sling bag/sling (3).png";
import sling4 from "../../Assets/traits/Sling bag/sling (4).png";
import sling5 from "../../Assets/traits/Sling bag/sling (5).png";
import sling6 from "../../Assets/traits/Sling bag/sling (6).png";
import sling7 from "../../Assets/traits/Sling bag/sling (7).png";
import sling8 from "../../Assets/traits/Sling bag/sling (8).png";
import sling9 from "../../Assets/traits/Sling bag/sling (9).png";
import sling10 from "../../Assets/traits/Sling bag/sling (10).png";
import sling11 from "../../Assets/traits/Sling bag/sling (11).png";
import sling12 from "../../Assets/traits/Sling bag/sling (12).png";
function Traits() {
  const data = {
    body: [
      {
        name: "lorem",
        img: body1,
      },
      {
        name: "lorem",
        img: body2,
      },
      {
        name: "lorem",
        img: body3,
      },
      {
        name: "lorem",
        img: body4,
      },
      {
        name: "lorem",
        img: body5,
      },
      {
        name: "lorem",
        img: body6,
      },
    ],
    cyber: [
      {
        name: "lorem",
        img: cyber1,
      },
      {
        name: "lorem",
        img: cyber2,
      },
      {
        name: "lorem",
        img: cyber3,
      },
      {
        name: "lorem",
        img: cyber4,
      },
      {
        name: "lorem",
        img: cyber5,
      },
      {
        name: "lorem",
        img: cyber6,
      },
    ],
    head: [
      {
        name: "lorem",
        img: head1,
      },
      {
        name: "lorem",
        img: head2,
      },
      {
        name: "lorem",
        img: head3,
      },
      {
        name: "lorem",
        img: head4,
      },
      {
        name: "lorem",
        img: head5,
      },
      {
        name: "lorem",
        img: head6,
      },
      {
        name: "lorem",
        img: head7,
      },
      {
        name: "lorem",
        img: head8,
      },
      {
        name: "lorem",
        img: head9,
      },
      {
        name: "lorem",
        img: head10,
      },
      {
        name: "lorem",
        img: head11,
      },
      {
        name: "lorem",
        img: head12,
      },
      {
        name: "lorem",
        img: head13,
      },
      {
        name: "lorem",
        img: head14,
      },
      {
        name: "lorem",
        img: head15,
      },
      {
        name: "lorem",
        img: head16,
      },
      {
        name: "lorem",
        img: head17,
      },
      {
        name: "lorem",
        img: head18,
      },
      {
        name: "lorem",
        img: head19,
      },
      {
        name: "lorem",
        img: head20,
      },
      {
        name: "lorem",
        img: head21,
      },
      {
        name: "lorem",
        img: head22,
      },
    ],
    neck: [
      {
        name: "lorem",
        img: neck1,
      },
      {
        name: "lorem",
        img: neck2,
      },
      {
        name: "lorem",
        img: neck3,
      },
      {
        name: "lorem",
        img: neck4,
      },
      {
        name: "lorem",
        img: neck5,
      },
      {
        name: "lorem",
        img: neck6,
      },
      {
        name: "lorem",
        img: neck7,
      },
      {
        name: "lorem",
        img: neck8,
      },
      {
        name: "lorem",
        img: neck9,
      },
      {
        name: "lorem",
        img: neck10,
      },
      {
        name: "lorem",
        img: neck11,
      },
      {
        name: "lorem",
        img: neck12,
      },
    ],
    sling: [
      {
        name: "lorem",
        img: sling1,
      },
      {
        name: "lorem",
        img: sling2,
      },
      {
        name: "lorem",
        img: sling3,
      },
      {
        name: "lorem",
        img: sling4,
      },
      {
        name: "lorem",
        img: sling5,
      },
      {
        name: "lorem",
        img: sling6,
      },
      {
        name: "lorem",
        img: sling7,
      },
      {
        name: "lorem",
        img: sling8,
      },
      {
        name: "lorem",
        img: sling9,
      },
      {
        name: "lorem",
        img: sling10,
      },
      {
        name: "lorem",
        img: sling11,
      },
      {
        name: "lorem",
        img: sling12,
      },
    ],
  };

  return (
    <AnimatedPage>
      <div className="traits">
        {/* body box ----------------- */}
        <div className="traits-box">
          <h1>Body</h1>
          <div className="traits-grid">
            {data.body.map((elem) => {
              return <SmallBox img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* cyber box --------------------------- */}
        <div className="traits-box">
          <h1>Cyber</h1>
          <div className="traits-grid">
            {data.cyber.map((elem) => {
              return <SmallBox img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* head gear box --------------------------- */}
        <div className="traits-box">
          <h1>Head Wear</h1>
          <div className="traits-grid">
            {data.head.map((elem) => {
              return <SmallBox img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* necklaces box --------------------------- */}
        <div className="traits-box">
          <h1>NeckLaces</h1>
          <div className="traits-grid">
            {data.neck.map((elem) => {
              return <SmallBox img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Sling Bag box --------------------------- */}
        <div className="traits-box">
          <h1>Sling Bag</h1>
          <div className="traits-grid">
            {data.sling.map((elem) => {
              return <SmallBox img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Traits;

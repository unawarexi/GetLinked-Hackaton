import React from "react";
import "./Section5.css";
import { images } from "../resources/IndexImg";

const Section5 = () => {
  return (
    <section>
      <div className="container  pt-28 pb-28">
        <div className="text-center items-center justify-center text-white font-roboto ">
          <h2 className="text-[50px] font-bold">Timeline</h2>
          <p className="pt-4 flex items-center m-4 lg:m-0 justify-center gap-4 text-[15px] lg:text-[20px] lg:gap-6">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
            <img
              src={images.star2}
              alt=""
              className=" stars lg:h-8 h-5 mt-6  ml-2 lg:ml-6"
            />
          </p>
        </div>

        <img src={images.star1} alt="" className="stars" />

        <div className="first__div flex flex-col">
          <article className="article__div">
            <div className="list__div">
              <h2 className="">Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">1</p>
            </div>

            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>
          </article>

          <article className="article__div">
            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">2</p>
            </div>

            <div className="list__div">
              <h2 className="">Teams Registration begins</h2>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </article>

          <article className="article__div">
            <div className="list__div">
              <h2 className="">Teams Registration ends</h2>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">3</p>
            </div>

            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>
          </article>

          <article className="article__div">
            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">4</p>
            </div>

            <div className="list__div">
              <h2 className="">Announcement of the accepted teams and ideas</h2>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </article>

          <article className="article__div">
            <div className="list__div">
              <h2 className="">Getlinked Hackathon 1.0 Offically Begins</h2>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">5</p>
            </div>

            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>
          </article>

          <article className="article__div">
            <div className="list__div list__div2">
              <h2>November 18, 2023</h2>
            </div>

            <div className="line__number">
              {" "}
              <div className="line__div"></div>
              <p className="number__div">6</p>
            </div>

            <div className="list__div">
              <h2 className="">Demo Day</h2>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </article>
        </div>
        <img src={images.secstar1} alt="" className=" stars w-8 h-8 mt-10 ml-28" />
      </div>

     
    </section>
  );
};

export default Section5;

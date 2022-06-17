import React, { useState } from "react";
import placeholder from "../../images/placeholder.png";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import styled from "styled-components";
import { BLACK, GRAY_1, PRIMARY, SECONDARY, WHITE } from "../../styles/color";
export default function Testimonials() {
  const [element, controls] = useScroll();

  const [selected, setSelected] = useState(0);
 const testimonialsAnimation = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };
  const testimonials = [
    {
      //designation: "Designer",
      name: "Anita Mishra",
      review:
        "I am amongst the first few customers who booked an apartment at Jain Heritage. Last week we went to our apartment and we were delighted to see the beautiful visuals from windows and from almost all balconies. Now we are confident that it will become one of the best places to stay.",
    },
    {
     // designation: "Developer",
      name: "Amit Biswal",
      review:
        "I booked my 1st home with Jain Heritage and didn’t want to miss out on the amazing deal on the choice of my apartment. I am now a proud owner of a smart home in a great community & world-class amenities. If you’re looking to secure your future, I would say, just go ahead with Jain Properties.",
    },
    {
      //designation: "Planner",
      name: "Radha Devi",
      review:"I bought a three bedroom flat with Jain Heritage. Originally not from Odisha, it took time for me to find the perfect home. It is the perfect place for me and my family to stay. Being a residential area, my kids have friends to socialize with and so do we. The flat itself has been a perfect home for two years.",
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle1"></div>
                  <div className="circle2">
                    <img src={placeholder} alt="placeholder" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{testimonial.designation}</span>
                  <h3 className="title">{testimonial.name}</h3>
                </div>
                <p className="description">{testimonial.review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimation}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;
  .container {
    padding: 50px;
    background-color: ${WHITE};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 50%;
      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 20px;
        .image {
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid ${WHITE};
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: ${PRIMARY};
          }
        }
      }
      .hidden {
        display: none;
      }
      color: ${BLACK};
      .designation {
        color:${PRIMARY};
      }
      .description {
        color: ${GRAY_1};
        line-height:24px;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: ${PRIMARY};
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid ${PRIMARY};
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
            padding: 20px;
        }
      }
    }
  }
`;
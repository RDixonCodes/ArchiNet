import React from "react";
import { Link } from "@reach/router";
import Carousel from "react-bootstrap/Carousel";

const Title = () => {
  const styles = {
    h1: {
      color: "white",
      textDecoration: "underline",
    },
    p: {
      color: "white",
      fontSize: "large",
    },
    span: {
      color: "red",
      fontStyle: "italic",
    },
    Link: {
      color: "red",
      TextDecoration: "none",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        height: 1000,
        paddingTop: 200,
        marginTop: -130,
      }}
    >
      <Carousel fade={2000}>
        <Carousel.Item>
          <img
            style={{ height: 400, width: 500 }}
            src="https://webneel.com/daily/sites/default/files/images/daily/09-2018/15-black-and-white-photoraphy-abstract-canada-museum-mrafiee.preview.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explore</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 400, width: 500 }}
            src="https://mymodernmet.com/wp/wp-content/uploads/2017/06/Alessio-Forlano-architectural-photography-5.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Imagine</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 400, width: 500 }}
            src="https://media.istockphoto.com/photos/spiral-staircase-picture-id580101506?k=20&m=580101506&s=612x612&w=0&h=vGV8QRqhrp_LJth9FaJ2ZRYj5VBAD93URTOi5YLAd0M="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Connect</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <h1 style={styles.h1}>
        Archi<span style={styles.span}>Net</span>
      </h1>
      <div style={{ width: 500, marginLeft: 440, textAlign: "justify" }}>
        <p style={styles.p}>
          Welcome to{" "}
          <strong>
            Archi<span style={styles.span}>Net</span>
          </strong>. A place to enjoy the world of
          architecture. Here you will find a collection of projects that not
          only span a wide range of styles, disciplines, and time periods, but
          also the globe. Add your favorite projects and browse entries by
          others. To get started enter{" "}
          <span>
            <Link to="/reglogin" style={styles.Link}>
              here
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
};
export default Title;

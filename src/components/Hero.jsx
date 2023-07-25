import React from "react";

export default function Hero(props) {
  return (
    <>
      <div className="card">
        <img
          src={`../images/${props.imageUrl}`}
          alt={`${props.location}`}
          className="card-image"
        />
        <div className="card-info">
          <div className="card-location">
            <img
              src="../images/locationTag.svg"
              alt="Location Tag"
              className="card-location-icon"
            />
            <p className="card-country">{props.location}</p>
            <a
              href={`${props.googleMapsUrl}`}
              target="_blank"
              className="card-google"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="card-place">{props.title}</h2>
          <p className="card-date">
            {`${props.startDate} - ${props.endDate}`}{" "}
          </p>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
      <hr className="line" />
    </>
  );
}

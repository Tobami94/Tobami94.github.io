import React from "react";

import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ExperienceCard = ({ data }) => {
  return (
    <Col md={6}>
      <div className="d-flex align-items-center p-1 mx-1 mb-1 rounded-3">
        <Card className="cardexp p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title className="h5">
              {data.role || <Skeleton />}
               </Card.Title>
            <small className="text-muted">{data.date}</small>
            <Card.Text>
            {!data.resumen ? "" : data.resumen || <Skeleton count={3} />}{" "}
              <div className="button-tools flex flex-wrap">
                {data.enlaces?.map((enlace, index) => (
                  <span className="btn p-1 mr-1.5" key={index}>
                    <a
                      className="enlacess"
                      href={enlace.url}
                      target="_blank"
                      rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="me-1"
                        width="16"
                        height="16">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>{enlace.texto}</span>
                    </a>
                  </span>
                ))}
              </div>
              <div className="button-tools mt-1 flex flex-wrap">
                {data.tools?.map((t) => {
                  const key = t.tool ? t.tool : t.id;
                  return (
                    <span className="btnexp p-1 rounded-3 border" key={key}>
                      {t.tool}
                    </span>
                  );
                })}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ExperienceCard;

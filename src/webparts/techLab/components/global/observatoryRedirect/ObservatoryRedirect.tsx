import * as React from "react";
import { imagesAssets } from "../../../mocks/ImagesAssets";
import "../../../styles/App.scss";
import { FormattedMessage } from "react-intl";

export const ObservatoryRedirect = ({ typeBg, showItem, typeTextPage }) => {
  const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidthScreen(window.screen.width);
    window.addEventListener("resize", handleResize);
  }, [widthScreen]);

  return (
    <div className="container-fluid containerHeader">
      <div
        className="sectionLogo"
        style={
          widthScreen < 993
            ? typeBg
              ? { backgroundColor: "#cbd8df" }
              : { backgroundColor: "#d6e6da" }
            : typeBg
            ? { backgroundColor: "#d6e6da" }
            : { backgroundColor: "#cbd8df" }
        }
      >
        <div className="containerLogo">
          <img
            src={imagesAssets(`./TechLabLogoSloganBlueAsset.png`)}
            alt="Imagen"
          />
        </div>
        <div className="containerButtomGlobal">
          <a href="mailto:techlab@iadb.org">
            <button
              type="button"
              className="btn btn-outline-primary btnContactUsResponsive"
            >
              <FormattedMessage id={"observatory.bottom"} />
            </button>
          </a>
        </div>
      </div>
      <div
        className="sectionContactUs"
        style={
          typeBg
            ? { backgroundColor: "#cbd8df" }
            : { backgroundColor: "#d6e6da" }
        }
      >
        <div
          className="containerContactUs"
          style={
            showItem
              ? typeTextPage == "solutionsHome" ||
                typeTextPage == "technologiesHome" ||
                typeTextPage == "detailTecnologie"
                ? { justifyContent: "space-evenly" }
                : null
              : { justifyContent: "end", marginRight: "10%" }
          }
        >
          <h2
            className="title"
            style={
              showItem
                ? {
                    display: "initial",
                    fontSize: "17px",
                    height: "65px",
                    maxWidth: "500px",
                    minWidth: "500px",
                    textAlign: "center",
                  }
                : { display: "none" }
            }
          >
            <FormattedMessage id={"observatory.title"} />
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://idbg.sharepoint.com/sites/tech_lab/SitePages/Observatory.aspx"
          >
            <button
              type="button"
              className="btn btn-outline-primary btnContactUs"
            >
              <FormattedMessage id={"observatory.bottom"} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

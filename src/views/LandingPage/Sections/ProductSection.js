import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Sobre Nós</h2>
          <h5 className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis elementum urna. Aenean pellentesque consectetur pellentesque.
            Sed id finibus est. Suspendisse mollis nisl rhoncus nisi
            scelerisque, at aliquam ipsum cursus. Proin nec diam lorem. Donec
            sit amet condimentum risus.
          </h5>
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Características</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              quis elementum urna.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Turmas pequenas"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum urna. Aenean pellentesque consectetur pellentesque. Sed id finibus est. Suspendisse mollis nisl rhoncus nisi scelerisque, at aliquam ipsum cursus. Proin nec diam lorem. Donec sit amet condimentum risus. Etiam non arcu eu libero accumsan pellentesque id quis nibh."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Comida gratis"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum urna. Aenean pellentesque consectetur pellentesque. Sed id finibus est. Suspendisse mollis nisl rhoncus nisi scelerisque, at aliquam ipsum cursus. Proin nec diam lorem. Donec sit amet condimentum risus. Etiam non arcu eu libero accumsan pellentesque id quis nibh."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Professores bonitos"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis elementum urna. Aenean pellentesque consectetur pellentesque. Sed id finibus est. Suspendisse mollis nisl rhoncus nisi scelerisque, at aliquam ipsum cursus. Proin nec diam lorem. Donec sit amet condimentum risus. Etiam non arcu eu libero accumsan pellentesque id quis nibh."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

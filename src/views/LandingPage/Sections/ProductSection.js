import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import PeopleIcon from "@material-ui/icons/People";
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
            Oferecemos duas modalidades de cursos: Regular e Intensivo. No
            <b> Curso Regular</b> você terá aulas ao vivo, duas vezes por
            semana, com professores que possuem certificações internacionais! No
            <b> Curso Intensivo </b>
            você terá aulas ao vivo, quatro vezes por semana, com professores
            que possuem certificações internacionais!
          </h5>
        </GridItem>
      </GridContainer>
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Características</h2>
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Aulas virtuais ao vivo!"
              description="Você vai aprender do conforto da sua casa ou de onde quer que esteja e receber orientação personalizada para praticar em um abiente seguro e motivador!"
              icon={CastForEducationIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Apenas 6 alunos por turma!"
              description="Você terá mais tempo para praticar, tirar dúvidas, errar – isso faz parte do processo – e aprender!"
              icon={PeopleIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Aulas Personalizadas!"
              description="Nossas aulas desenvolvidas para contemplar os 8 estilos diferentes de aprendizagem de inglês. Você vai praticar diversas habilidades de comunicação enquanto estuda conosco."
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

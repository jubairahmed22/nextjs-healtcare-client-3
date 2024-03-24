import { Box, Container, Grid, Typography } from "@mui/material";
import assets from "@/assets";
import chooseUsImg from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.award,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];

const WhyUs = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box>
              <Box>
                <Image src={servicesData[0].imageSrc} width={80} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography variant="h6" color="primary body1" fontWeight={300}>
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Image src={chooseUsImg} alt="chooseUsPage"></Image>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;

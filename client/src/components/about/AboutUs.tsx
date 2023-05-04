import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { textAlign } from "@mui/system";

const AboutUs = () => {
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={"https://avatars.githubusercontent.com/u/98917600?v=4"}
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Hamid Reza Delshad"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Team Lead"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "My name is Hamidreza Delshad, a passionate junior full stack developer and a freelance graphic designer from Sweden./ My passion for software is coming up with concepts and turning them into beautiful interfaces. When I develop something, I pay close attention to the user experience, architecture, and code quality."
          }
          {
            "I'm learning new things about backend to become a full stack developer at Integrify Academy."
          }
        </Typography>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={
                "https://www.samoteev.dev/static/media/bg88.9856eb521295a5269673.png"
              }
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Alina Samoteev"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Full Stack Developer"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "I am a Frontend developer with 2+ years of hands-on experience in frontend development, building web apps with Javascript, ReactJs, Typescript and other stacks. I make the concept, build from scratch and maintain the web apps by using the latest techniques.I have a genuine interest in new technologies and enjoy exploring new areas, always putting the focus on the user experience. "
          }
        </Typography>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={
                "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-2/256/man-icon.png"
              }
              alt={"Recipe Image"}
            />
          </CardActionArea>
        </Card>
        <Typography gutterBottom variant="h4" component="div">
          {"Muhammad Irfan"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Current Status: {"Full Stack Developer"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "justify" }}
        >
          {
            "My name is Muhammad Irfan, A passionate full stack developer from Sweden. I'm learning new things about backend to become a full stack developer at Integrify Academy."
          }
        </Typography>
      </div>
    </>
  );
};
export default AboutUs;

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
    </>
  );
};
export default AboutUs;

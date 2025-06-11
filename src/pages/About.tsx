import {
  AboutWrapper,
  Title,
  Card,
  CardContainer,
  Image,
  StyledLink,
  LinkWrapper,
  ImageLink,
} from "./About.styles";
import ImgRecycle from "../assets/recycle-bins-isolated.jpg";
import ImgAddContainer from "../assets/ImgAddContainer(1).png";

export default function About() {
  return (
    <AboutWrapper>
      <Title>Waste Sorting Matters</Title>
      <LinkWrapper external>
        <p style={{ color: "#0c240c", fontWeight: "bolder" }}>
          Want to learn more about recycling and waste management? Check out
          this useful article:
        </p>
        <ul>
          <li>
            <a
              href="https://www.epa.gov/recycle"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Recycle(External link)
            </a>
          </li>
        </ul>
      </LinkWrapper>
      <CardContainer>
        <Card>
          <p>
            Proper waste sorting helps protect the environment, saves resources,
            and reduces pollution. Together, small actions can make a big
            difference.
          </p>
          <Image src={ImgRecycle} alt="Recycle" />
        </Card>
        <Card>
          <p>
            Paper or plastic, bio-waste or glass — almost everything can be
            recycled.
          </p>
          <p>
            Not sure where to throw your waste? Use our smart sorting form to
            find the right bin for any item.
          </p>
          <LinkWrapper>
            <StyledLink to="/">Try the Sorting Form</StyledLink>
          </LinkWrapper>
        </Card>
        <Card>
          <p>
            Want to learn more about recycling bins? Discover the different
            types of containers and what waste goes where.
          </p>
          <LinkWrapper>
            <StyledLink to="/containers">See All Containers</StyledLink>
          </LinkWrapper>
        </Card>
        <Card>
          <p>
            Want to help improve recycling? Add a new container to the system
            and make sorting easier for everyone.
          </p>
          <LinkWrapper>
            <ImageLink to="/container-form">
              <img
                src={ImgAddContainer}
                alt="Add Container"
                title="Click to add a new container"
              />
            </ImageLink>
          </LinkWrapper>
        </Card>
      </CardContainer>
    </AboutWrapper>
  );
}

import { Container } from "../components/Container";
import { Medium, Subtitle, Title } from "../components/Text";

//eslint-disable-next-line
export default {
  title: "Display/Container",
  component: Container,
};

const Template = (args) => (
  <Container {...args}>
    <Title>Title</Title>
    <Subtitle>Subtitle</Subtitle>
    <Medium>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eveniet
      sit, iusto ipsam earum esse tempora soluta tempore nam commodi repudiandae
      fuga corporis, sequi voluptatibus porro consequatur amet, molestiae dolor?
    </Medium>
  </Container>
);

export const Sm = Template.bind({});
Sm.args = {
  size: "sm",
};

export const Md = Template.bind({});
Md.args = {
  size: "md",
};

export const Lg = Template.bind({});
Lg.args = {
  size: "lg",
};

export const Xl = Template.bind({});
Xl.args = {
  size: "xl",
};

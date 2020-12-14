import "./index.css";

export const Title = ({ children }) => <h1 className="title">{children}</h1>;
export const Subtitle = ({ children }) => (
  <h2 className="subtitle">{children}</h2>
);
export const Medium = ({ children }) => <p className="medium">{children}</p>;
export const Small = ({ children }) => <p className="small">{children}</p>;

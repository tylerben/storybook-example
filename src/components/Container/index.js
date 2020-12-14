import PropTypes from "prop-types";
import "./index.css";

const baseStyles = {
  backgroundColor: "#ffffff",
  boxShadow:
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: 4,
};

const sizeStyles = {
  sm: {
    ...baseStyles,
    width: 600,
    maxWidth: 600,
    margin: "0 auto",
  },
  md: {
    ...baseStyles,
    width: 768,
    maxWidth: 768,
    margin: "0 auto",
  },
  lg: {
    ...baseStyles,
    width: 1280,
    maxWidth: 1280,
    margin: "0 auto",
  },
  xl: {
    ...baseStyles,
    width: 1920,
    maxWidth: 1920,
    margin: "0 auto",
  },
};

export const Container = ({ size, children }) => {
  return (
    <section className="container" style={sizeStyles[size]}>
      {children}
    </section>
  );
};

Container.propTypes = {
  /**
   * How large the container should be
   */
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  children: PropTypes.node.isRequired,
};

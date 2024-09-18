import { Typography } from "@mui/material";

const Section = ({ content }) => {
  return (
    <section>
      <Typography>
        <div class="container">
          <div class="feature">
            <h2>Feature 1</h2>
            <p>of feature 1</p>
          </div>
        </div>
      </Typography>
    </section>
  );
};

export default Section;

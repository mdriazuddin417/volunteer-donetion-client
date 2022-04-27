import React from "react";
import volenteer from "../../../logos/volenteer.jpg";
const Blog = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row row-cols-lg-2 row-cols-1 g-2">
          <div className="cols">
            <img src={volenteer} alt="" className="rounded-3" />
          </div>
          <div className="cols">
            <h3>
              OUR <span className="text-warning">APPROACH </span>
            </h3>
            <p>
              We encourage volunteers to become a part of the youth family and
              bring positive change with in and people around them. VBD allows
              the volunteers to come up with their innovative ideas, sharpen it
              and implement it to a way that benefits the community because VBD
              promotes youth lead initiatives. Youth centric thoughts, spirits
              and activities are central to VBD. Volunteerism is a powerful way
              to involving people of all ages in tackling social as well as
              development challenges and obstacles. It further helps to take a
              leap and transform the nature of development. Volunteerism
              benefits the individual to strengthen trust, unity and empower as
              well as aiding the society at large. Furthermore, in today’s world
              where opportunities are centralized VBD has created platform for
              the youth outside the capital city where their voice is heard and
              valued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

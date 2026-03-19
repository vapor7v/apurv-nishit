import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development Intern</h4>
                <h5>Nashtto</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Part of a 3-member core team building a multi-application food
              delivery platform. Built the customer app, restaurant partner
              app, and delivery partner app — handling backend architecture,
              API integrations, and cross-platform data synchronization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-ready web and mobile applications using
              React, Next.js, Node.js, and React Native. Focused on
              delivering end-to-end solutions from concept to deployment
              with modern tooling and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

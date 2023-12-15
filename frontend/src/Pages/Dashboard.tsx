import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const Dashboard = () => {
  const content = (
    <Container>
      <section className="public">
        <header>
          <h1>
            Welcome to <span className="nowrap">Task Management!</span>
          </h1>
        </header>
        <main className="public__main">
          <p>
            This application is a task management system that leverages Keycloak
            for user authentication, role-based access control (RBAC), and
            fine-grained access control on data.
          </p>
          <address className="public__addr">
            Task Management
            <br />
            555 Foo Drive
            <br />
            Foo City, CA 12345
            <br />
            <a href="tel:+15555555555">(555) 555-5555</a>
          </address>
          <br />
          <p>Owner: Milin Bhakta</p>
        </main>
        <footer>
          <Link to="/login">Employee Login</Link>
        </footer>
      </section>
    </Container>
  );
  return content;
};
export default Dashboard;

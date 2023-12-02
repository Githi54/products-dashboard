import { Result } from "antd";
import { Link } from "react-router-dom";

export const Page404 = () => (
  <Result
    status="404"
    title="404, Page not found"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/">Back Home</Link>}
  />
);

import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() {
  return (
    <Layout title={"Page Not Found"}>
      <div className="not-found">
        <h1>404</h1>
        <img src="/wilfcube.gif" alt="spinning cube of wilf lalonde" className="NotFound__image" />
      </div>
    </Layout>
  );
}

export default NotFound;

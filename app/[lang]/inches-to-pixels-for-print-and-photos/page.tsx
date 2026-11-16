import { hubRoute } from "../../components/hub/hubRoute";

const route = hubRoute("print");

export const generateMetadata = route.generateMetadata;
export default route.Page;

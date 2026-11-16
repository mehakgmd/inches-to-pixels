import { hubRoute } from "../../components/hub/hubRoute";

const route = hubRoute("sizes");

export const generateMetadata = route.generateMetadata;
export default route.Page;

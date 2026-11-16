import { hubRoute } from "../../components/hub/hubRoute";

const route = hubRoute("chart");

export const generateMetadata = route.generateMetadata;
export default route.Page;

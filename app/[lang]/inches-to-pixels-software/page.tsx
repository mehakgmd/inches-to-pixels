import { hubRoute } from "../../components/hub/hubRoute";

const route = hubRoute("software");

export const generateMetadata = route.generateMetadata;
export default route.Page;

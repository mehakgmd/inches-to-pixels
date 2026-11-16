import { hubRoute } from "../../components/hub/hubRoute";

const route = hubRoute("dpi");

export const generateMetadata = route.generateMetadata;
export default route.Page;

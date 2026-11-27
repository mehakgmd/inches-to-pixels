import { infoRoute } from "../../components/info/InfoPage";

const route = infoRoute("about");

export const generateMetadata = route.generateMetadata;
export default route.Page;

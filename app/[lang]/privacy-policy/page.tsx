import { infoRoute } from "../../components/info/InfoPage";

const route = infoRoute("privacy");

export const generateMetadata = route.generateMetadata;
export default route.Page;

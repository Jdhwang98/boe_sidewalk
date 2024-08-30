import { createSidewalk} from "../../graphql/mutations";
import {generateClient} from "aws-amplify/api"
const client = generateClient();
async function createSW(sidewalk_obj) {
    await client.graphql({
        query: createSidewalk,
        variables: {
            input: {
            "SectionID": sidewalk_obj.SectionID,
            "x_slope": sidewalk_obj.x_slope,
            "y_slope": sidewalk_obj.y_slope,
            "h_displacement": sidewalk_obj.h_displacement,
            "v_displacement": sidewalk_obj.v_displacement,
            "compliance": sidewalk_obj.compliance,
            "lat": sidewalk_obj.lat,
            "lon": sidewalk_obj.lon,
        }},
    })
}

export {createSW};
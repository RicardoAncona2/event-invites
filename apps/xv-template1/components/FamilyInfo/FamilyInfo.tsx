import { Box, Typography } from "@mui/material";
import styles from "./FamiliInfo.module.css";
import { getFamilyInfo, } from "apps/xv-template1/lib/db";
import EditButton from "../utils/EditButton";
import { UpdateFamilyInfo } from "./FamilyInfoUpdate";



const LandingInfo = async () => {
  const editMode = process.env.EDIT_MODE==="on";

  const [data] = await getFamilyInfo(1);
  console.log(data)
  const {
    title1,
    title2,
    subTitle1,
    subTitle2,
  } = data;
  return (
    <Box className={styles.container}>
      <Typography variant="h3" color="text.secondary" className={styles.heading}>
        {title1}{editMode && <EditButton
          label={"v"}
          props={{ id: 1, styles }}
          updateFunction={UpdateFamilyInfo}
          />}
      </Typography>

      <Box className={styles.section}>
        <Typography variant="h6" color="text.primary">
          {subTitle1}{editMode && <EditButton
          label={"v"}
          props={{ id: 1, styles }}
          updateFunction={UpdateFamilyInfo}
          />}
        </Typography>
        
      </Box>

      <Box className={styles.section}>
        <Typography
          variant="h6"
          color="text.primary"
          component="ul"
          className={styles.godparentList}
        >
          <Typography variant="h3" color="text.secondary" className={styles.heading}>
           {title2}{editMode && <EditButton
          label={"v"}
          props={{ id: 1, styles }}
          updateFunction={UpdateFamilyInfo}
          />}
          </Typography>
          {subTitle2}{editMode && <EditButton
          label={"v"}
          props={{ id: 1, styles }}
          updateFunction={UpdateFamilyInfo}
          />}
        </Typography>


      </Box>
    </Box>
  );
};

export default LandingInfo;

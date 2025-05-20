import { AppBar, Toolbar, Box, Button } from "@mui/material";
import Link from "next/link";
import EditButton from "../utils/EditButton";
import { getHeader } from "apps/xv-template1/lib/db";
import { UpdateHeader } from "../utils/HeaderUpdate";

const Header = async () => {
  const editMode = process.env.EDIT_MODE === "on";
  const [data] = await getHeader(1);
  const {
    headerText1,
    headerText2,
    headerText3,
    headerColor,
  } = data;
  const styles = ""
  const allFieldsExist = headerText1 && headerText2 && headerText3

  if (!allFieldsExist) return null;
  return (
    <AppBar position="fixed" sx={{ backgroundColor: headerColor }}>
      <Toolbar>
        {editMode && <>{"Color"} <EditButton
          label={""}
          props={{ id: 1 }}
          updateFunction={UpdateHeader}
        />
        </>}
        <Link href="#home" passHref>
          <Button className={styles}>{headerText1}</Button>
        </Link>
        {editMode && <EditButton
          label={headerText1}
          props={{ id: 1, headerText1 }}
          updateFunction={UpdateHeader}
        />}
        <Box sx={{ ml: "auto" }}>
          <Link href="#location" passHref>
            <Button className={styles}>{headerText2}</Button>
          </Link>
          {editMode && <EditButton label={headerText2}
            props={{ id: 1, headerText2 }}
            updateFunction={UpdateHeader}
          />}
          <Link href="#confirm" passHref>
            <Button className={styles}>{headerText3}</Button>
          </Link>
          {editMode && <EditButton label={headerText3}
            props={{ id: 1, headerText3 }}
            updateFunction={UpdateHeader}
          />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

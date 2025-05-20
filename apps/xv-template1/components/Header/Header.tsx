import { AppBar, Toolbar, Box, Button } from "@mui/material";
import Link from "next/link";
import EditButton from "../utils/EditButton";
import { getHeader } from "apps/xv-template1/lib/db";
import { UpdateHeader } from "../utils/HeaderUpdate";

const Header = async () => {
  const editMode = process.env.EDIT_MODE === "on";
  const [data] = await getHeader(1);
  const { headerText1, headerText2, headerText3, headerColor } = data;

  const allFieldsExist = headerText1 && headerText2 && headerText3;
  if (!allFieldsExist) return null;

  const renderButton = (
    text: string,
    href: string,
    fieldKey: keyof typeof data
  ) => (
    <>
      <Link href={href} passHref>
        <Button>{text}</Button>
      </Link>
      {editMode && (
        <EditButton
          label={text}
          props={{ id: 1, [fieldKey]: text }}
          updateFunction={UpdateHeader}
        />
      )}
    </>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: headerColor || "primary" }}>
      <Toolbar>
        {editMode && (
          <>
            Color
            <EditButton
              label="a"
              props={{ id: 1 }}
              updateFunction={UpdateHeader}
              enableColorPicker
              enableTextField={false}
            />
          </>
        )}
        {renderButton(headerText1, "#home", "headerText1")}
        <Box sx={{ ml: "auto" }}>
          {renderButton(headerText2, "#location", "headerText2")}
          {renderButton(headerText3, "#confirm", "headerText3")}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
